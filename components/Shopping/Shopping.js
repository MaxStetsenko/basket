class Shopping {

	handleClear() {
		ROOT_SHOPPING.innerHTML = '';
	}


	render() {

		const productsStore = localStorageUtil.getProducts();
		let htmlCatalog = '';
		let indexProducts = 0;
		let sumCatalog = 0;

		CATALOG.forEach(({ id, name, price }) => {

			if (productsStore.indexOf(id) !== -1) {
				htmlCatalog += `
					<tr>
					 	<td>${indexProducts += 1}</td>
						<td class="shopping-element__name">${name}</td>
						<td class="shopping-element__price">${price.toLocaleString()} $</td>
					</tr>
				`;
				sumCatalog += price;
			}
		});


		const html = `
			<div class="shopping-container">
				<div class="shopping__close" onclick="shoppingPage.handleClear();">X</div>
				<table>
					${htmlCatalog}
					<tr>
						<td class="shopping-element__name">Всего</td>
						<td class="shopping-element__price shopping-element__price_sum" colspan="2" align="right">${sumCatalog.toLocaleString()} $</td>
			  		</tr>
				</table>
			</div>
		`;
		ROOT_SHOPPING.innerHTML = html;
	}
}

const shoppingPage = new Shopping();