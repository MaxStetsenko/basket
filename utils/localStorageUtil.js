class LocalStorageUtil {
	constructor() {
		this.keyName = 'products';
	}

	// Создаем методы
	// 1) Для того чтобы получить все продукты хранящ. в localstorage
	getProducts() {
		const productsLocalStorage = localStorage.getItem(this.keyName);
		if (productsLocalStorage !== null) {
			return JSON.parse(productsLocalStorage);
			// JSON.parse из строки в arr 
		}
		return [];
	}
	// 2) Для того чтобы добавить новое значние в localstorage
	putProducts(id) {
		// в пер. products получили что было в лок. хранилище
		let products = this.getProducts();
		let pushProduct = false;
		const index = products.indexOf(id);

		if (index === -1) {
			products.push(id);
			pushProduct = true;
		} else {
			products.splice(index, 1);
		}

		localStorage.setItem(this.keyName, JSON.stringify(products));
		// JSON.stringify() из arr в строку

		return { pushProduct, products }
	}
}

let localStorageUtil = new LocalStorageUtil();
