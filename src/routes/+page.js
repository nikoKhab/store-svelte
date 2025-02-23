// src/routes/+page.js
export async function load({ fetch }) {
	const response = await fetch('https://fakestoreapi.com/products');
	const data = await response.json();

	return {
		data
	};
}
