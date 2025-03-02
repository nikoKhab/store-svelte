<script>
let {data: product } = $props()
console.log(product.id)
</script>

<main>
    <h1>{product.title}</h1>
    <br>
    <img src={product.image} alt={product.title}>
    <p>${product.price}</p>
    <article>
        {product.description}
    </article>
    <h3>rating:</h3>
    <p>rate: {product.rating.rate}</p>
    <p>count: {product.rating.count}</p>
    <a href="/"><button>go back</button></a>
</main>

<style scoped>
    *{
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        color: rgb(64, 77, 77);
    }
    img{
        width: 400px;
        border: 1px solid grey;
        border-radius: 20px;
        padding: 20px;
        
    }
    main{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    article{
        width: 700px;
        font-size: 20px;
    }
    button{
        width: 110px;
        height: 50px;
        background-color: rgba(0, 0, 255, 0.826);
        font-size: 20px;
        border: none;
        border-radius: 10px;
    }
    button:hover{
        background-color: rgba(0, 0, 255, 0.457);
    }
</style>