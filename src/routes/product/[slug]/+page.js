export const load = ({ params }) => {
	console.log(`params: ${params.slug}`);

	const fetchProduct = async (index) => {
		const response = await fetch(`https://fakestoreapi.com/products/${index}`);
		const data = await response.json();
		console.log(data);
		return data;
	};
	let product = fetchProduct(params.slug);
	if (product) {
		return product;
	}
};
