<script lang="ts">
	import { onMount } from 'svelte';
	import ProductCard from '../../../components/productCard.svelte';
	import { cart } from '../../../cart';
	import { addtoCart } from '../../cartFunc';
	import type { Product } from '../../../app';

	let dialog;
	


	export let data;
	const { product } = data;

	let products: Product[] = [];

	onMount(async () => {
		let res = await filterProducts();
		products = res.products.filter((item: any) => item.category === product.category);

		console.log('filteredData', products);
	});

	let q = 1;

	export let total: number;
	$: {
		total = 0;
		$cart.map((item: any) => (total += item.quantity));
	}

	//filter
	const filterProducts = async () => {
		const res = await fetch('https://ecommerce-task-api-v1.onrender.com/products');
		const data = await res.json();

		return data;
	};
</script>

<div class="grid grid-cols-2 h-[30rem] w-full pt-8">
	<div class="col-span-1 flex flex-col gap-5 ml-10">
		<img class="w-[35rem] h-[22rem] object-cover" src={product.images[0]} alt="" />

		<div class="flex justify-start gap-10">
			<img class="w-[7rem] h-[5rem] object-cover" src={product.images[0]} alt="" />

			<img class="w-[7rem] h-[5rem] object-cover" src={product.images[1]} alt="" />

			<img class="w-[7rem] h-[5rem] object-cover" src={product.images[2]} alt="" />

			<img class="w-[7rem] h-[5rem] object-cover" src={product.images[3]} alt="" />
		</div>
	</div>
	<div class="col-span-1 w-full h-fit flex flex-col gap-5">
		<p class="font-semibold text-[2rem]">{product.title}</p>
		<p class="font-bold text-[2rem] text-lime-500">GHC {product.price}</p>
		<p class="w-[30rem] text-lg">{product.description}</p>

		<div class="flex mt-auto mx-auto gap-10 pr-[15rem]">
			<input
				class="bg-violet-400 w-12 h-[1.9rem] rounded p-0.5 text-center"
				type="number"
				name="cart_input"
				id="cartinput"
				bind:value={q}
			/>
			<button
				on:click={() => {
					const ans = confirm(`add ${q} item(s) added to cart?`);

					if (ans === true) {
						addtoCart(product, q);
					} else {
						$cart = $cart;
					}
				}}
				class="bg-green-400 hover:bg-green-500 font-semibold w-[12rem] h-[2rem] rounded"
				>Add to Cart</button
			>
		</div>
	</div>
</div>

<div class="flex mt-10 flex-col ml-5">
	<p class="font-bold md:ml-5 md:text-4xl sm:text-2xl sm:ml-4 mt-36 mb-10">
		Similar and Related Products
	</p>
	<!-- {total} -->

	<div>
		{#each products as product}
			<li class="inline">
				<ProductCard {product} />
			</li>
		{/each}
	</div>
</div>

<style>
	input[type='number']::-webkit-inner-spin-button {
		padding: 0.5px;
		-webkit-appearance: value;
		opacity: 1;
		height: 1.6rem;
	}
</style>
