// ********** set date ************
// select span
const date = (document.getElementById(
	'date'
).innerHTML = new Date().getFullYear());

// ********** nav toggle ************
// select button and links
const navBtn = document.getElementById('nav-toggle');
const sideMenu = document.getElementById('side-menu');
const sideMenuCloseBtn = document.getElementById('drawer-close');

const cartDrawerBtn = document.getElementById('cart-drawer-open');
const cartDrawer = document.getElementById('side-cart');
const cartDrawerCloseBtn = document.getElementById('cart-drawer-close');

const toggleFilterBt = document.getElementById('toggle-category-filters');
const categoriesHolder = document.getElementById('categories-holder');
const filterText = document.getElementById('filter-btn-span');

//Drawers Menu and Site-Cart
navBtn.addEventListener('click', () => {
	sideMenu.classList.add('open');
});

sideMenuCloseBtn.addEventListener('click', () => {
	sideMenu.classList.remove('open');
});

cartDrawerBtn.addEventListener('click', () => {
	cartDrawer.classList.add('cart-open');
});

cartDrawerCloseBtn.addEventListener('click', () => {
	cartDrawer.classList.remove('cart-open');
});

//Toggle Filter Options Main page
toggleFilterBt.addEventListener('click', () => {
	categoriesHolder.classList.toggle('categories-show');
	filterText.innerHTML = categoriesHolder.classList.contains('categories-show')
		? '<i class="far fa-plus-square"></i>'
		: '<i class="far fa-minus-square"></i>';
});

// local Item List for development
const products = [
	{
		id: 1,
		productName: 'Strawberry Basil',
		productImgURL:
			'https://cdn.shopify.com/s/files/1/0274/3641/7123/products/Cherry_Pop_Still_4K_Front-CherryPop.png?v=1588713373',
		type: ['berry', 'citrusy', 'fancy'],
		price: 5.5,
	},
	{
		id: 2,
		productName: 'Sour Blueberry',
		productImgURL:
			'https://cdn.shopify.com/s/files/1/0274/3641/7123/products/SourBlueBerry_Still_4K_Front-SourBlueberry.png?v=1588713584',
		type: ['sour', 'berry'],
		price: 4,
	},
	{
		id: 3,
		productName: 'Blackberry Jam',
		productImgURL:
			'https://cdn.shopify.com/s/files/1/0274/3641/7123/products/BlackBerry_Jam_Still_4K_Front-BlackberryJam.png?v=1595035965',
		type: ['berry'],
		price: 10,
	},
	{
		id: 4,
		productName: 'Orange Nectarine',
		productImgURL:
			'https://cdn.shopify.com/s/files/1/0274/3641/7123/products/Orange_Nectarine_Still_4K_Front-OrangeNectarine.png?v=1588713522',
		type: ['Citrus', 'fancy', 'juicy'],
		price: 6,
	},
	{
		id: 5,
		productName: 'Lemon Verbena',
		productImgURL:
			'https://cdn.shopify.com/s/files/1/0274/3641/7123/products/Lemon_Verbena_Still_4K_Front-LemonVerbena.png?v=1588713474',
		type: ['Citrus', 'classic', 'floral'],
		price: 4.5,
	},
	{
		id: 6,
		productName: 'Extra Peach',
		productImgURL:
			'https://cdn.shopify.com/s/files/1/0274/3641/7123/products/ExtraPeach_Still_4K_Front-ExtraPeach.png?v=1588713411',
		type: ['Juicy'],
		price: 8.5,
	},
	{
		id: 7,
		productName: 'Young Mango',
		productImgURL:
			'https://cdn.shopify.com/s/files/1/0274/3641/7123/products/Young_Mango_Still_4K_Front-YoungMango.png?v=1588713866',
		type: ['Juicy'],
		price: 6.5,
	},
	{
		id: 8,
		productName: 'Cherry Pop',
		productImgURL:
			'https://cdn.shopify.com/s/files/1/0274/3641/7123/products/Cherry_Pop_Still_4K_Front-CherryPop.png?v=1588713373',
		type: ['Classic'],
		price: 7.5,
	},
	{
		id: 9,
		productName: 'Pear Elder-Flower',
		productImgURL:
			'https://cdn.shopify.com/s/files/1/0274/3641/7123/products/Pear_Elderflower_Still_4K_Front-PearElderflower.png?v=1588713554',
		type: ['Classic', 'floral'],
		price: 8,
	},
	{
		id: 10,
		productName: 'Toasted Coconut',
		productImgURL:
			'https://cdn.shopify.com/s/files/1/0274/3641/7123/products/Toasted_Coconut_Still_4K_Front-ToastedCoconut.png?v=1588713760',
		type: ['Fancy'],
		price: 7,
	},
	{
		id: 11,
		productName: 'White Grape',
		productImgURL:
			'https://cdn.shopify.com/s/files/1/0274/3641/7123/products/White_Grape_Still_4K_Front-WhiteGrape.png?v=1588713834',
		type: ['classic', 'jazzy'],
		price: 5,
	},
	{
		id: 12,
		productName: 'Gingery Ale',
		productImgURL:
			'	https://cdn.shopify.com/s/files/1/0274/3641/7123/products/Ginger_Ale_Still_4K_Front-GinergyAle.png?v=1588713442',
		type: ['classic'],
		price: 6,
	},
];

class SideCartDrawer {
	cartProducts = [];

	constructor() {
		this.cartElTemplateAccess = document.getElementById('item-cart-template');
	}

	get totalCartValue() {
		const total = this.cartProducts
			.map((prod) => prod.qty * prod.price)
			.reduce((prev, current) => prev + current);
		return total;
	}

	totalInCart() {
		document.getElementById(
			'total-cart'
		).textContent = `£ ${this.totalCartValue}`;
	}

	removeItemFromCart(id, event) {
		const itemInCartIndex = this.cartProducts.findIndex(
			(item) => item.id === id
		);
		this.cartProducts.splice(itemInCartIndex, 1);
		event.target.parentElement.parentElement.parentElement.remove();
		document.getElementById('total-cart').textContent =
			this.cartProducts.length === 0 ? 0 : `£ ${this.totalCartValue}`;
	}

	addProduct(product) {
		const cartProduct = this.cartProducts.find(
			(prod) => prod.id === product.id
		);
		const productTemplateEl = document.importNode(
			this.cartElTemplateAccess.content,
			true
		);
		const cartList = document.getElementById('cart-items-list');
		const cartEl = productTemplateEl.querySelector('.cart-item');

		if (cartProduct) {
			product.qty++;
			document.getElementById(`cart-${product.id}`).remove();
		} else {
			product.qty = 1;
			const updatedItems = [...this.cartProducts];
			updatedItems.push(product);
			this.cartProducts = updatedItems;
		}

		this.cartProducts.forEach((prod) => {
			cartEl.id = `cart-${prod.id}`;
			cartEl.querySelector('h3').textContent = prod.productName;
			cartEl.querySelector('p').textContent = `£ ${prod.price}`;
			cartEl.querySelector('span').textContent = prod.qty;
		});
		cartList.append(cartEl);
		cartEl.addEventListener('click', (event) => {
			this.removeItemFromCart(product.id, event);
		});
		this.totalInCart(product.qty, product.price);
	}

	renderCart() {
		let cartEl = document.createElement('section');
		cartEl.className = 'cart-items-list';
		cartEl.id = 'cart-items-list';
		cartEl.innerHTML = '<h2>Cart is Empty<h2>';
		this.currentHTML = cartEl.querySelector('h2');
		return cartEl;
	}
}

//Single product rendering

class SingleProductRendering {
	constructor(productDetails) {
		this.product = productDetails;
		this.productElementTemplate = document.getElementById('item-main-template');
	}

	addProductToCart = () => {
		App.addProductToCart(this.product);
	};

	render() {
		const productTemplateEl = document.importNode(
			this.productElementTemplate.content,
			true
		);
		const productEl = productTemplateEl.querySelector('.single-product');
		productEl.id = this.product.id;
		productEl.querySelector('img').src = this.product.productImgURL;
		productEl.querySelector('h2').textContent = this.product.productName;

		const btn = productEl.querySelector('button');
		btn.addEventListener('click', () => {
			this.addProductToCart();
		});

		return productEl;
	}
}

//Product List Rendering

class ProductList {
	constructor() {
		this.fetchProducts();
	}

	fetchProducts() {
		this.products = products;
	}

	render() {
		const productListEl = document.createElement('section');
		productListEl.className = 'products-holder';
		productListEl.id = 'product-holder';
		for (let product of this.products) {
			const productEl = new SingleProductRendering(product);
			const productElRendered = productEl.render();
			productListEl.append(productElRendered);
		}

		return productListEl;
	}
}

//shop API - assemble

class Shop {
	render() {
		const renderHookProductList = document.getElementById('app');
		const cartHook = document.getElementById('cart-items-hook');

		const productList = new ProductList();
		const productListRendered = productList.render();

		this.cartItemDrawer = new SideCartDrawer();
		const cartDrawer = this.cartItemDrawer.renderCart();

		renderHookProductList.append(productListRendered);
		cartHook.append(cartDrawer);
	}
}

class App {
	static cartItemDrawer;

	static init() {
		const shop = new Shop();
		shop.render();
		this.cartItemDrawer = shop.cartItemDrawer;
	}

	static addProductToCart(product) {
		this.cartItemDrawer.addProduct(product);
	}
}

App.init();
