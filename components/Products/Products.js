class Products {

	// Метод render для того чтобы отобразить данные на странице
	render() {

		let htmlCatalog = '';

		CATALOG.forEach(({ id, name, price, img }) => {

			htmlCatalog += `
				<li class="products-element">
					<span class="products-element__name">${name}</span>
					<img class="products-element__img" src="${img}" alt="" />
					<span class="products-element__price">$ ${price.toLocaleString()} USD</span>
					<button class="products-element__btn">Добавить в корзину</button>
				</li>
			`;
		});
		const html = `
			<ul class="products-container">
				${htmlCatalog}
			</ul>
		`;
		ROOT_PRODUCTS.innerHTML = html;
	}
}

// Создаем экземпляр класса Products:
const productsPage = new Products();
productsPage.render();
