<script>
    import { page } from "$app/state";
let { data } = $props()
</script>

<main>
<ul>
    {#each data as product }
        <h1>{product.title}</h1>
    {/each}
</ul>
</main>

<style scoped>
    
</style>