<script lang="ts">
  import "./app.css";
  import { productsData } from "./lib/data/products.data";

  const products = productsData;
</script>

<main>
  <section class="products">
    <!-- title -->
    <h3 class="products__title">Check our products</h3>

    <!-- products -->
    <div class="products__grid">
      {#each products as product}
        <div class="products__card">
          <img
            class="products__cardImg"
            alt={product.name}
            src={product.img}
            on:error={(e) => (e.srcElement.src = "public/default-product.png")}
          />
          <div class="products__cardDetails">
            <h5 class="products__cardName">{product.name}</h5>
            <p class="products__cardPrice">${product.price.toFixed(2)}</p>
          </div>
          <button class="products__cardButton">Add to Cart</button>
        </div>
      {/each}
    </div>
  </section>
</main>

<style>
  .products {
    padding: 30px 50px;
  }

  .products__title {
    font-size: 1.5rem;
    font-weight: 600;
    letter-spacing: 0.1rem;
    margin-bottom: 2rem;
  }

  .products__grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 1rem;
  }

  .products__card {
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

  .products__cardImg {
    max-width: auto;
    height: 100px;
    object-fit: cover;
    border-radius: 20px;
  }

  .products__cardDetails {
    text-align: center;
  }

  .products__cardName {
    font-size: 1.2rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
  }

  .products__cardPrice {
    font-size: 0.9rem;
    font-weight: 400;
  }

  .products__cardButton {
    width: 100%;
    padding: 5px 10px;
    background-color: var(--color-btn-primary);
    color: var(--color-text-secondary);
    border: 1px solid var(--color-btn-primary);
    border-radius: 2px;
    cursor: pointer;
  }

  .products__cardButton:hover {
    opacity: 0.9;
  }
</style>
