class Products {

	constructor() {
		this.classNameActive = 'active';
		this.labelAdd = 'Добавить в корзину';
		this.labelRemove = 'Удалить из корзины';
	}

	handleSetLocationStorage(element, id) {
		const { pushProduct, products } = localStorageUtil.putProducts(id);

		if (pushProduct) {
			element.classList.add(this.classNameActive);
			element.innerHTML = this.labelRemove;
		} else {
			element.classList.remove(this.classNameActive);
			element.innerHTML = this.labelAdd;
		}

		headerPage.render(products.length);
	}

	// Метод render для того чтобы отобразить данные на странице
	render() {

		const productsStore = localStorageUtil.getProducts();

		let htmlCatalog = '';

		CATALOG.forEach(({ id, name, price, img }) => {
			let activeClass = '';
			let activeText = '';

			if (productsStore.indexOf(id) === -1) {
				activeText = this.labelAdd;
			} else {
				activeClass = ' ' + this.classNameActive;
				activeText = this.labelRemove;
			}

			htmlCatalog += `
				<li class="products-element">
					<span class="products-element__name">${name}</span>
					<img class="products-element__img" src="${img}" alt="" />
					<span class="products-element__price">$ ${price.toLocaleString()} USD</span>
					<button class="products-element__btn${activeClass}" onclick="productsPage.handleSetLocationStorage(this, '${id}');">
						${activeText}
					</button>
				</li>
			`;
		});
		const html = `
			<div class="container">
				<ul class="products-container">
					${htmlCatalog}
				</ul>
			</div>
		`;
		ROOT_PRODUCTS.innerHTML = html;
	}
}

// Создаем экземпляр класса Products:
const productsPage = new Products();
productsPage.render();
