// ********** set date ************
// select span
const date = (document.getElementById(
  "date"
).innerHTML = new Date().getFullYear());

// ********** nav toggle ************
// select button and links
const navBtn = document.getElementById("nav-toggle");
const sideMenu = document.getElementById("side-menu");
const sideMenuCloseBtn = document.getElementById("drawer-close");

const cartDrawerBtn = document.getElementById("cart-drawer-open");
const cartDrawer = document.getElementById("side-cart");
const cartDrawerCloseBtn = document.getElementById("cart-drawer-close");

const toggleFilterBt = document.getElementById("toggle-category-filters");
const categoriesHolder = document.getElementById("categories-holder");
const filterText = document.getElementById("filter-btn-span");

//Drawers Menu and Site-Cart
navBtn.addEventListener("click", () => {
  sideMenu.classList.add("open");
});

sideMenuCloseBtn.addEventListener("click", () => {
  sideMenu.classList.remove("open");
});

cartDrawerBtn.addEventListener("click", () => {
  cartDrawer.classList.add("cart-open");
});

cartDrawerCloseBtn.addEventListener("click", () => {
  cartDrawer.classList.remove("cart-open");
});

//Toggle Filter Options Main page
toggleFilterBt.addEventListener("click", () => {
  categoriesHolder.classList.toggle("categories-show");
  document.getElementById("remove-filters-btn")
    ? '<i class="far fa-plus-square"></i>'
    : '<i class="far fa-minus-square"></i>';
});

// local STORAGE List for development
const products = [
  {
    id: 1,
    productName: "Strawberry Basil",
    productImgURL:
      "https://cdn.shopify.com/s/files/1/0274/3641/7123/products/Cherry_Pop_Still_4K_Front-CherryPop.png?v=1588713373",
    type: ["all", "berries", "citrusy", "fancy"],
    price: 5.5,
  },
  {
    id: 2,
    productName: "Sour Blueberry",
    productImgURL:
      "https://cdn.shopify.com/s/files/1/0274/3641/7123/products/SourBlueBerry_Still_4K_Front-SourBlueberry.png?v=1588713584",
    type: ["sour", "berries"],
    price: 4,
  },
  {
    id: 3,
    productName: "Blackberry Jam",
    productImgURL:
      "https://cdn.shopify.com/s/files/1/0274/3641/7123/products/BlackBerry_Jam_Still_4K_Front-BlackberryJam.png?v=1595035965",
    type: ["berries"],
    price: 10,
  },
  {
    id: 4,
    productName: "Orange Nectarine",
    productImgURL:
      "https://cdn.shopify.com/s/files/1/0274/3641/7123/products/Orange_Nectarine_Still_4K_Front-OrangeNectarine.png?v=1588713522",
    type: ["citrusy", "fancy", "juicy"],
    price: 6,
  },
  {
    id: 5,
    productName: "Lemon Verbena",
    productImgURL:
      "https://cdn.shopify.com/s/files/1/0274/3641/7123/products/Lemon_Verbena_Still_4K_Front-LemonVerbena.png?v=1588713474",
    type: ["citrusy", "classic", "floral"],
    price: 4.5,
  },
  {
    id: 6,
    productName: "Extra Peach",
    productImgURL:
      "https://cdn.shopify.com/s/files/1/0274/3641/7123/products/ExtraPeach_Still_4K_Front-ExtraPeach.png?v=1588713411",
    type: ["juicy"],
    price: 8.5,
  },
  {
    id: 7,
    productName: "Young Mango",
    productImgURL:
      "https://cdn.shopify.com/s/files/1/0274/3641/7123/products/Young_Mango_Still_4K_Front-YoungMango.png?v=1588713866",
    type: ["juicy"],
    price: 6.5,
  },
  {
    id: 8,
    productName: "Cherry Pop",
    productImgURL:
      "https://cdn.shopify.com/s/files/1/0274/3641/7123/products/Cherry_Pop_Still_4K_Front-CherryPop.png?v=1588713373",
    type: ["classic"],
    price: 7.5,
  },
  {
    id: 9,
    productName: "Pear Elder-Flower",
    productImgURL:
      "https://cdn.shopify.com/s/files/1/0274/3641/7123/products/Pear_Elderflower_Still_4K_Front-PearElderflower.png?v=1588713554",
    type: ["classic", "floral"],
    price: 8,
  },
  {
    id: 10,
    productName: "Toasted Coconut",
    productImgURL:
      "https://cdn.shopify.com/s/files/1/0274/3641/7123/products/Toasted_Coconut_Still_4K_Front-ToastedCoconut.png?v=1588713760",
    type: ["fancy"],
    price: 7,
  },
  {
    id: 11,
    productName: "White Grape",
    productImgURL:
      "https://cdn.shopify.com/s/files/1/0274/3641/7123/products/White_Grape_Still_4K_Front-WhiteGrape.png?v=1588713834",
    type: ["classic", "jazzy"],
    price: 5,
  },
  {
    id: 12,
    productName: "Gingery Ale",
    productImgURL:
      "	https://cdn.shopify.com/s/files/1/0274/3641/7123/products/Ginger_Ale_Still_4K_Front-GinergyAle.png?v=1588713442",
    type: ["classic"],
    price: 6,
  },
];

class SideCartDrawer {
  cartProducts = [];

  constructor() {
    // Getting access to the cart item template template from the HTML
    this.cartElTemplateAccess = document.getElementById("item-cart-template");
    // Connection with the CheckOut Btn
    this.connectingCheckOutBtn();
  }

  connectingCheckOutBtn() {
    document.querySelector(".checkout-drawer").addEventListener("click", () => {
      alert(`Thank you for visiting my demo page. Your order is
			${this.cartProducts.map(
        (p) =>
          ` ${p.productName} - quantity ${p.qty} * ${p.price} = ${
            p.qty * p.price
          }`
      )} - Total Price = ${this.totalCartValue}`);
      window.dataLayer.push({ order_Value: this.totalCartValue });
    });
  }

  get totalCartValue() {
    const total = this.cartProducts
      .map((prod) => prod.qty * prod.price)
      .reduce((prev, current) => prev + current);
    return total;
  }

  totalCartQty() {
    const totalQty =
      this.cartProducts.length === 0
        ? 0
        : this.cartProducts
            .map((prod) => prod.qty)
            .reduce((prev, current) => prev + current);
    document.getElementById("cart-items-counter").textContent = totalQty;
    // This if statements display the checkout btns conditionally, depending on total quantity:
    if (totalQty >= 1) {
      document.getElementById("cart-footer").classList.add("show-footer");
      document.getElementById("initial-message").style.display = "none";
    } else {
      document.getElementById("cart-footer").classList.remove("show-footer");
      document.getElementById("initial-message").style.display = "block";
    }
  }

  totalInCart() {
    document.getElementById(
      "total-cart"
    ).textContent = `£ ${this.totalCartValue}`;
    document.get;
  }

  removeItemFromCartBtnHandler(id, event) {
    const itemInCartIndex = this.cartProducts.findIndex(
      (item) => item.id === id
    );
    this.cartProducts.splice(itemInCartIndex, 1);
    event.target.parentElement.parentElement.parentElement.remove();
    document.getElementById("total-cart").textContent =
      this.cartProducts.length === 0 ? 0 : `£ ${this.totalCartValue}`;
    this.totalCartQty();
  }

  moreOrLessQtyBtnHandler = (prod, qtyCalculation) => {
    if (qtyCalculation == "more") {
      prod.qty++;
    } else {
      prod.qty--;
    }

    document
      .getElementById(`cart-${prod.id}`)
      .querySelector("span").textContent = prod.qty;
    this.totalCartQty();
    this.totalInCart();
  };

  addProduct(product) {
    const cartProduct = this.cartProducts.find(
      (prod) => prod.id === product.id
    );
    const productTemplateEl = document.importNode(
      this.cartElTemplateAccess.content,
      true
    );
    const cartList = document.getElementById("cart-items-list");
    const cartEl = productTemplateEl.querySelector(".cart-item");

    if (cartProduct) {
      product.qty++;
      // Adding a new quantity creates a duplicate so I'm removing it by manipulating the DOM
      document.getElementById(`cart-${product.id}`).remove();
    } else {
      product.qty = 1;
      const updatedItems = [...this.cartProducts];
      updatedItems.push(product);
      this.cartProducts = updatedItems;
    }

    this.cartProducts.forEach((prod) => {
      cartEl.id = `cart-${prod.id}`;
      cartEl.querySelector("h3").textContent = prod.productName;
      cartEl.querySelector("p").textContent = `£ ${prod.price}`;
      cartEl.querySelector("span").textContent = prod.qty;
    });
    // Single Product Btn Handlers and Connectors
    const itemBtns = cartEl.querySelectorAll("button");
    const deleteItemBtn = itemBtns[0];
    const lessQtyBtn = itemBtns[1];
    const moreQtyBtn = itemBtns[2];
    deleteItemBtn.addEventListener("click", (event) => {
      this.removeItemFromCartBtnHandler(product.id, event);
    });

    lessQtyBtn.addEventListener("click", () => {
      this.moreOrLessQtyBtnHandler(product);
      lessQtyBtn.disabled = product.qty > 1 ? false : true;
    });

    moreQtyBtn.addEventListener("click", () => {
      this.moreOrLessQtyBtnHandler(product, "more");
      lessQtyBtn.disabled = product.qty > 1 ? false : true;
    });

    cartList.append(cartEl);
    this.totalCartQty();
    //toggles the 'More' btn
    lessQtyBtn.disabled = product.qty > 1 ? false : true;
    this.totalInCart(product.qty, product.price);
  }

  renderCart() {
    let cartEl = document.createElement("section");
    let cartInitTitle = document.createElement("h2");
    cartEl.className = "cart-items-list";
    cartEl.id = "cart-items-list";
    cartInitTitle.id = "initial-message";
    cartInitTitle.textContent = "Cart Is Empty";

    cartEl.append(cartInitTitle);

    return cartEl;
  }
}

//Single product rendering

class SingleProductRendering {
  constructor(productDetails) {
    this.product = productDetails;
    // Getting access to the single product template template from the HTML
    this.productElementTemplate = document.getElementById("item-main-template");
  }

  addProductToCartBtnHandler = () => {
    // Static method created to enable us to tigger a method from the cart class in the singleproduct class where the action happens
    App.addProductToCart(this.product);
  };

  render() {
    const productTemplateEl = document.importNode(
      this.productElementTemplate.content,
      true
    );
    const productEl = productTemplateEl.querySelector(".single-product");
    productEl.id = this.product.id;
    productEl.querySelector("img").src = this.product.productImgURL;
    productEl.querySelector("h2").textContent = this.product.productName;

    const btn = productEl.querySelector("button");
    btn.addEventListener("click", () => {
      // SetTimeout allows
      btn.textContent = "added!";
      setTimeout(() => {
        btn.textContent = "add to cart";
      }, 1000);
      this.addProductToCartBtnHandler();
    });

    return productEl;
  }
}

//Product List Rendering

class ProductList {
  constructor() {
    this.fetchProducts();
    this.connectingFiltersButtons();
  }

  fetchProducts() {
    this.products = products;
  }

  filterCategories(userFilters) {
    if (userFilters.length === 0) {
      const products = this.products.map((p) => p.id);
      products.forEach(
        (p) => (document.getElementById(p).style.display = "block")
      );
      document.getElementById("remove-filters-btn").style.display = "none";
    } else {
      const filters = userFilters.filter((filter, index) => {
        return userFilters.indexOf(filter) === index;
      });
      this.products
        .filter((prod) => {
          return !prod.type.some((prodType) => filters.includes(prodType));
        })
        .map((p) => p.id)
        .forEach((p) => (document.getElementById(p).style.display = "none"));

      this.products
        .filter((prod) => {
          return prod.type.some((prodType) => filters.includes(prodType));
        })
        .map((p) => p.id)
        .forEach((p) => (document.getElementById(p).style.display = "block"));
    }
  }

  filtersBtnCreatorHandler(id, filterValues) {
    document.getElementById(id).addEventListener("click", (event) => {
      if (filterValues.find((f) => f === event.target.value)) {
        event.target.classList.remove("filter-btn-active");
        const btnIndex = filterValues.findIndex((f) => {
          return f === event.target.value;
        });
        filterValues.splice(btnIndex, 1);
        this.filterCategories(filterValues);
      } else {
        filterValues.push(event.target.value);
        event.target.classList.add("filter-btn-active");
        this.filterCategories(filterValues);
        document.getElementById("remove-filters-btn").style.display = "block";
      }
    });
  }

  connectingFiltersButtons() {
    let filterValues = [];
    this.filtersBtnCreatorHandler("berries-btn", filterValues);
    this.filtersBtnCreatorHandler("citrusy-btn", filterValues);
    this.filtersBtnCreatorHandler("classic-btn", filterValues);
    this.filtersBtnCreatorHandler("fancy-btn", filterValues);
    this.filtersBtnCreatorHandler("floral-btn", filterValues);
    this.filtersBtnCreatorHandler("jazzy-btn", filterValues);
    this.filtersBtnCreatorHandler("juicy-btn", filterValues);
    this.filtersBtnCreatorHandler("sour-btn", filterValues);
    document
      .getElementById("remove-filters-btn")
      .addEventListener("click", (event) => {
        filterValues.splice(0, filterValues.length);
        this.clearFilters(event);
      });
  }

  clearFilters(event) {
    this.products
      .map((p) => p.id)
      .forEach((p) => (document.getElementById(p).style.display = "block"));
    event.target.style.display = "none";
    document
      .getElementById("categories-holder")
      .querySelectorAll("button")
      .forEach((e) => e.classList.remove("filter-btn-active"));
  }

  render() {
    const productListEl = document.createElement("section");
    productListEl.className = "products-holder";
    productListEl.id = "product-holder";
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
    const renderHookProductList = document.getElementById("app");
    const cartHook = document.getElementById("cart-items-hook");

    const productList = new ProductList();
    const productListRendered = productList.render();
    // turning the cartItemDrawer instantiation as a property in shop so I can use it in the app class when I instatiate the shop class
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
    // Using this static Method to be able to use it on the single product class
    this.cartItemDrawer.addProduct(product);
  }
}

App.init();
