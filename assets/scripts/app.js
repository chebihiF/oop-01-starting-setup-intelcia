class Product {
  constructor(title, imageUrl, price, description) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.price = price;
    this.description = description;
  }
}

class Shop {
  render() {
    const renderHook = document.getElementById("app");
    const cart = new ShoppingCart();
    const cartItem = cart.render();
    const productList = new ProductList();
    const productItem = productList.render();
    renderHook.append(cartItem);
    renderHook.append(productItem);
  }
}

class ShoppingCart {
  static items = [];
  static totalOutput;

  static addItem(product) {
    ShoppingCart.items.push(product);
    const count = ShoppingCart.items.length;
    ShoppingCart.totalOutput.innerHTML = `<h2>Total: \$ ${count} </h2>`;
  }

  render() {
    const cartEl = document.createElement("section");
    cartEl.innerHTML = `
            <h2>Total: \$ ${0} </h2>
            <button>Order Now!</button>
        `;
    cartEl.className = "cart";
    ShoppingCart.totalOutput = cartEl.querySelector("h2");
    return cartEl;
  }
}

class ProductItem {
  constructor(product) {
    this.product = product;
  }

  addToCart() {
    console.log("adding to cart ...");
    console.log(this.product);
    ShoppingCart.addItem(this.product);
  }

  render() {
    //console.log(this.product);
    const prodElement = document.createElement("li");
    prodElement.className = "product-item";
    prodElement.innerHTML = `
                <div>
                    <img src="${this.product.imageUrl}" alt="${this.product.title}">
                    <div class='product-item__content'>
                        <h2>${this.product.title}</h2>
                        <h3>${this.product.price}</h3>
                        <p>${this.product.description}</p>
                        <button>Add to Cart</button>
                    </div>
                </div>
                `;
    const addCartButton = prodElement.querySelector("button");
    addCartButton.addEventListener("click", this.addToCart.bind(this));
    return prodElement;
  }
}

class ProductList {
  products = [
    new Product(
      "A pillow",
      "https://www.maxpixel.net/static/photo/2x/Soft-Pillow-Green-Decoration-Deco-Snuggle-1241878.jpg",
      19.99,
      "A soft pillow"
    ),
    new Product(
      "A Carpet",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Ardabil_Carpet.jpg/397px-Ardabil_Carpet.jpg",
      89.99,
      "A carpet wich you might like"
    ),
  ];
  render() {
    const prodList = document.createElement("ul");
    this.products.forEach((product) => {
      const prodElement = new ProductItem(product).render();
      prodList.append(prodElement);
    });
    return prodList;
  }
}

const shop = new Shop();
shop.render();
