class Product {
  constructor(title, imageUrl, price, description) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.price = price;
    this.description = description;
  }
}

class ProductItem {
  constructor(product) {
    this.product = product;
  }

  render() {
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
    const renderHook = document.getElementById("app");
    const prodList = document.createElement("ul");
    this.products.forEach((product) => {
      const prodElement = new ProductItem(product).render();
      prodList.append(prodElement);
    });
    renderHook.append(prodList);
  }
}

new ProductList().render();
