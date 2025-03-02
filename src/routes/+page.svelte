<script>
	let { data } = $props()
    console.log(data)
    // products = data.data
    console.log(data.data)
    const products = data.data
</script>
<main>
    <ul>
        {#each products as product}
        <article class="product-card">
            <img class="product-image" src={product.image} alt="">
            <h2 class="product-title">{product.title}</h2>
            <p class="product-price">${product.price}</p>
            <a href={`/product/${product.id}`}><button class="product-button">view more</button></a>
        </article>
            
        {/each}
    </ul>
</main>

<style scoped>
    *{
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    }
    ul{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    .product-card{
        width: 500px;
        height: 600px;
        background-color: azure;
        border: 2px solid grey;
        padding: 10px;
        margin: 20px;
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .product-image{
        width: 300px;
        height: auto;
        max-height: 60%;
        max-width: 50%;
    }
    .product-price{
        opacity: 0.7;
    }
    .product-title{
        opacity: 0.7;
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    }
    .product-button{
        width: 110px;
        height: 50px;
        background-color: rgba(0, 0, 255, 0.826);
        font-size: 20px;
        border: none;
        border-radius: 10px;
    }
    .product-button:hover{
        background-color: rgba(0, 0, 255, 0.457);
    }
</style>