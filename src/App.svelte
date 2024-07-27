<script lang="ts">
  import "./app.css";
  import type { CartProductDto } from "./lib/data/cart-product.dto";
  import type { ProductDto } from "./lib/dto/product.dto";
  import { productsData } from "./lib/data/products.data";

  // data
  let products: ProductDto[] = [];
  const categories = Array.from(
    new Set(productsData.map((product) => product.category))
  );

  // filter
  let categoriesFilter: string[] = [...categories];

  // cart
  let cartProducts: CartProductDto[] = [];
  let cartTotal = 0;

  // logging
  $: console.log(`Cart current products count ${cartProducts.length}`);

  // formatter
  $: formattedCurrency = (price: number) => `$${price.toFixed(2)}`;

  // total calculation
  $: {
    cartTotal = cartProducts.reduce(
      (total, product) => (total += product.quantity * product.product.price),
      0
    );
  }

  // products filter
  $: products = productsData.filter((product) =>
    categoriesFilter.includes(product.category)
  );

  function handleFilterClick(categoryToToggle: string): void {
    const isCategoryExist = categoriesFilter.includes(categoryToToggle);

    categoriesFilter = isCategoryExist
      ? categoriesFilter.filter((category) => category !== categoryToToggle)
      : [...categoriesFilter, categoryToToggle];
  }

  function handleAddToCartClick(product: ProductDto): void {
    const existingCartProduct = cartProducts.find(
      (cartProduct) => cartProduct.product.name === product.name
    );
    if (existingCartProduct) {
      existingCartProduct.quantity++;
    } else {
      cartProducts.push({ product, quantity: 1 });
    }
    cartProducts = [...cartProducts];
  }

  function handleRemoveFromCartClick(product: ProductDto): void {
    const existingCartProduct = cartProducts.find(
      (cartProduct) => cartProduct.product.name === product.name
    );
    if (existingCartProduct?.quantity > 1) {
      existingCartProduct.quantity--;
      cartProducts = [...cartProducts];
    } else {
      cartProducts = cartProducts.filter(
        (cartProduct) => cartProduct.product.name !== product.name
      );
    }
  }

  function handleClearCartClick(): void {
    cartProducts = [];
  }
</script>

<main class="app">
  <!-- products -->
  <section class="products">
    <!-- title -->
    <h3 class="products__title">Check our products</h3>

    <!-- products categories -->
    <div class="product__categories">
      {#each categories as category}
        <button
          class="product__category"
          class:product__category-active={categoriesFilter.includes(category)}
          on:click={() => handleFilterClick(category)}>{category}</button
        >
      {/each}
    </div>

    <!-- products grid -->
    <div class="products__grid">
      {#each products as product}
        <div class="productCard">
          <img
            class="productCard__img"
            alt={product.name}
            src={product.img}
            on:error={(e) => (e.srcElement.src = "public/default-product.png")}
          />
          <div class="productCard__details">
            <h5 class="productCard__name">{product.name}</h5>
            <p class="productCard__price">{formattedCurrency(product.price)}</p>
          </div>
          <button
            class="productCard__button"
            on:click={() => handleAddToCartClick(product)}>Add to Cart</button
          >
        </div>
      {:else}
        <p class="products__empty">No result, please select a category</p>
      {/each}
    </div>
  </section>

  <!-- cart -->
  <section class="cart">
    <div class="cart__container">
      <!-- title -->
      <h3 class="cart__title">Cart</h3>

      <!-- cart products list -->
      <ul class="cart__products">
        {#each cartProducts as cartProduct}
          <li class="cartProduct">
            <div class="cartProduct__details">
              <img
                class="cartProduct__img"
                alt={cartProduct.product.name}
                src={cartProduct.product.img}
                on:error={(e) =>
                  (e.srcElement.src = "public/default-product.png")}
              />
              <h5 class="cartProduct__name">{cartProduct.product.name}</h5>
            </div>
            <span class="cartProduct__price">
              {formattedCurrency(
                cartProduct.product.price * cartProduct.quantity
              )}
            </span>
            <div class="cartProduct__actions">
              <button
                class="cartProduct__actionBtn"
                on:click={() => handleRemoveFromCartClick(cartProduct.product)}
              >
                -
              </button>
              <span>{cartProduct.quantity}</span>
              <button
                class="cartProduct__actionBtn"
                on:click={() => handleAddToCartClick(cartProduct.product)}
              >
                +
              </button>
            </div>
          </li>
        {:else}
          <li class="cart__empty">No items added yet</li>
        {/each}
      </ul>

      <!-- total -->
      <div class="cart__total">
        <span class="cart__totalPrice">{formattedCurrency(cartTotal)}</span>
        <button
          class="cart__totalClear"
          on:click={handleClearCartClick}
          disabled={!cartProducts.length}
        >
          Clear
        </button>
      </div>
    </div>
  </section>
</main>

<style>
  /* custom scrollbar */
  ::-webkit-scrollbar {
    width: 20px;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--color-text-primary);
    border-radius: 20px;
    border: 8px solid transparent;
    background-clip: content-box;
  }

  .app {
    position: relative;
  }

  .products {
    padding: 30px 50px;
    flex-grow: 1;
    width: calc(100vw - 400px);
  }

  .cart {
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 400px;
    background-color: var(--color-bg-secondary);
  }

  .products__title {
    font-size: 1.5rem;
    font-weight: 600;
    letter-spacing: 0.1rem;
    margin-bottom: 2rem;
  }

  .product__categories {
    display: flex;
    gap: 1rem;
    margin-bottom: 2rem;
  }

  .product__category {
    background-color: transparent;
    border: 1px solid var(--color-btn-secondary);
    border-radius: 4px;
    padding: 0.25rem 0.5rem;
    font-size: 0.9rem;
    font-weight: 600;
  }

  .product__category-active {
    background-color: var(--color-btn-secondary);
  }

  .products__grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 1rem;
  }

  .products__empty {
    text-align: center;
  }

  .productCard {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
    border-radius: 4px;
    padding: 15px 20px;
    box-shadow:
      rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
      rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
  }

  .productCard__img {
    max-width: auto;
    height: 100px;
    object-fit: cover;
    border-radius: 20px;
  }

  .productCard__details {
    text-align: center;
  }

  .productCard__name {
    font-size: 1.2rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
  }

  .productCard__price {
    font-size: 0.9rem;
    font-weight: 400;
  }

  .productCard__button {
    width: 100%;
    padding: 5px 10px;
    background-color: var(--color-btn-primary);
    color: var(--color-text-secondary);
    border: 1px solid var(--color-btn-primary);
    border-radius: 2px;
  }

  .cart__container {
    position: relative;
    height: 100%;
    padding: 30px 15px 0 15px;
  }

  .cart__title {
    color: var(--color-text-secondary);
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: 1rem;
  }

  .cart__empty {
    color: var(--color-text-secondary);
  }

  .cart__products {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-height: calc(100vh - 150px);
    overflow-y: auto;
  }

  .cartProduct {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .cartProduct__details {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    flex: 2;
  }

  .cartProduct__img {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    border: px solid var(--color-text-secondary);
    object-fit: cover;
  }

  .cartProduct__name {
    color: var(--color-text-secondary);
    font-size: 0.8rem;
    font-weight: 400;
  }

  .cartProduct__price {
    color: var(--color-text-secondary);
    font-size: 0.7rem;
    width: 30px;
    flex: 1;
  }

  .cartProduct__actions {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
    flex: 1;
  }

  .cartProduct__actionBtn {
    width: 24px;
    background-color: var(--color-btn-secondary);
    border: 1px solid var(--color-btn-secondary);
  }

  .cart__total {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    display: flex;
    height: 50px;
  }

  .cart__totalPrice {
    flex: 1;
    background-color: var(--color-btn-secondary);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .cart__totalClear {
    flex: 1;
    background-color: var(--color-btn-primary);
    color: var(--color-text-secondary);
    border: 1px solid var(--color-btn-primary);
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
