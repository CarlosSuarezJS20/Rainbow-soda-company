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
		price: 7,
	},
	{
		id: 2,
		productName: 'Sour Blueberry',
		productImgURL:
			'https://cdn.shopify.com/s/files/1/0274/3641/7123/products/SourBlueBerry_Still_4K_Front-SourBlueberry.png?v=1588713584',
		type: ['sour', 'berry'],
		price: 7,
	},
	{
		id: 3,
		productName: 'Blackberry Jam',
		productImgURL:
			'https://cdn.shopify.com/s/files/1/0274/3641/7123/products/BlackBerry_Jam_Still_4K_Front-BlackberryJam.png?v=1595035965',
		type: ['berry'],
		price: 7,
	},
	{
		id: 4,
		productName: 'Orange Nectarine',
		productImgURL:
			'https://cdn.shopify.com/s/files/1/0274/3641/7123/products/Orange_Nectarine_Still_4K_Front-OrangeNectarine.png?v=1588713522',
		type: ['Citrus', 'fancy', 'juicy'],
		price: 7,
	},
	{
		id: 5,
		productName: 'Lemon Verbena',
		productImgURL:
			'https://cdn.shopify.com/s/files/1/0274/3641/7123/products/Lemon_Verbena_Still_4K_Front-LemonVerbena.png?v=1588713474',
		type: ['Citrus', 'classic', 'floral'],
		price: 7,
	},
	{
		id: 6,
		productName: 'Extra Peach',
		productImgURL:
			'https://cdn.shopify.com/s/files/1/0274/3641/7123/products/ExtraPeach_Still_4K_Front-ExtraPeach.png?v=1588713411',
		type: ['Juicy'],
		price: 7,
	},
	{
		id: 7,
		productName: 'Young Mango',
		productImgURL:
			'https://cdn.shopify.com/s/files/1/0274/3641/7123/products/Young_Mango_Still_4K_Front-YoungMango.png?v=1588713866',
		type: ['Juicy'],
		price: 7,
	},
	{
		id: 8,
		productName: 'Cherry Pop',
		productImgURL:
			'https://cdn.shopify.com/s/files/1/0274/3641/7123/products/Cherry_Pop_Still_4K_Front-CherryPop.png?v=1588713373',
		type: ['Classic'],
		price: 7,
	},
	{
		id: 9,
		productName: 'Pear Elder-Flower',
		productImgURL:
			'https://cdn.shopify.com/s/files/1/0274/3641/7123/products/Pear_Elderflower_Still_4K_Front-PearElderflower.png?v=1588713554',
		type: ['Classic', 'floral'],
		price: 7,
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
		price: 7,
	},
	{
		id: 12,
		productName: 'Gingery Ale',
		productImgURL:
			'	https://cdn.shopify.com/s/files/1/0274/3641/7123/products/Ginger_Ale_Still_4K_Front-GinergyAle.png?v=1588713442',
		type: ['classic'],
		price: 7,
	},
];

class SideCartDrawer {
	cartProducts = [];

	constructor() {
		this.productInCartEl = document.getElementById('item-cart-template');
	}

	addToCart(id) {
		console.log(id);
	}

	renderCart() {
		let cartEl = document.createElement('h2');
		cartEl.innerHTML = '<h2> Cart is Empty<h2>';
		// if (this.cartProducts.length === 0) {
		// } else {
		// 	cartEl = productInCartElTemplate.querySelector('.cart-item');
		// 	for (let productInCart of productsNoDuplicates) {
		// 		cartEl.querySelector('h3').textContent = productInCart.productName;
		// 		cartEl.querySelector('p').textContent = `£ ${productInCart.price}`;
		// 		cartEl.querySelector('span').textContent = 1;
		// 	}
		// }
		return cartEl;
	}
}

//Single product rendering

class SingleProductRendering extends SideCartDrawer {
	constructor(productDetails) {
		super();
		this.product = productDetails;
		this.productElementTemplate = document.getElementById('item-main-template');
	}

	addProductToCart = (product) => {
		this.addToCart(product);
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
			this.addProductToCart(this.product.id);
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
		const cartHook = document.getElementById('cart-items-list');
		const productList = new ProductList();
		const productListRendered = productList.render();
		renderHookProductList.append(productListRendered);

		const cartItemDrawer = new SideCartDrawer();
		const cartDrawer = cartItemDrawer.renderCart();
		cartHook.append(cartDrawer);
	}
}

const shop = new Shop();
shop.render();
