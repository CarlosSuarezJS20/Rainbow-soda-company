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

const cartDrawerBtn = document.getElementById('cart-drawer-toggle');
const cartDrawer = document.getElementById('cart-drawer');
const cartDrawerCloseBtn = document.getElementById('cart-drawer-close');

const toggleFilterBt = document.getElementById('toggle-category-filters');
const categoriesHolder = document.getElementById('categories-holder');
const filterText = document.getElementById('filter-btn-span');

// add event listener
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

toggleFilterBt.addEventListener('click', () => {
	categoriesHolder.classList.toggle('categories-show');
	filterText.innerHTML = categoriesHolder.classList.contains('categories-show')
		? '<i class="far fa-plus-square"></i>'
		: '<i class="far fa-minus-square"></i>';
});

// <i class="far fa-plus-square"></i> for filter
