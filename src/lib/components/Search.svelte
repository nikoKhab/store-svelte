<script>
let { products } = $props();
let filtered = products.filter((product) = product.title.includes(keyword))
let keyword = $state()
</script>

<main>
<input type="text" bind:value={keyword} name="" id="">
</main>