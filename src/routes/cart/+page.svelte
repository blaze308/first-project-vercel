<script>
	import { goto } from '$app/navigation';
	import { cart } from '../../cart';
	import { totalCart } from '../cartFunc';
	
	let total = totalCart()
	$:total

	function Checkout() {
		goto("/checkout")
	}

</script>

<div>
	<p class="font-bold m-10 text-4xl">My Cart</p>

	{#each $cart as item}
		<div class="grid grid-cols-5 pl-10 pb-10 gap-5">
			<img class="w-40 h-36 object-cover" src={item.images} alt="" />
			<button on:click={() => {item = 0}} class="bg-green-400 hover:bg-green-500 w-10 h-10 absolute mt-[6.5rem]">X</button>

			<p class="font-semibold text-left overflow-hidden w-[15rem] capitalize">{item.title}</p>

			<p class="font-bold text-lg text-lime-500">GHC {item.price}</p>
			
			<input
			class="bg-violet-400 w-12 h-[1.9rem] rounded p-0.5 text-center"
			type="number"
			name="cart_input"
			id="cartinput"
			bind:value={item.quantity}
			/>
			<p class="font-bold text-lg text-lime-500">GHC {(item.price * item.quantity).toFixed(2)}</p>
		</div>
	{/each}
</div>

<div class="flex total w-[50rem] ml-auto mr-20 h-[6rem] gap-28">
	<p class="overflow-hidden w-[15rem] text-lg text-center my-auto capitalize">Total Amount for Item in Your Cart</p>
	<p class="font-bold text-lg text-lime-500 my-auto m-auto" >GHC {(total).toFixed(2)}</p>
</div>
<button on:click={() => {Checkout()}} class="bg-green-400 hover:bg-green-500 m-10 font-semibold w-[18rem] h-[3rem] rounded">Proceed to Checkout</button>

<style>
	input[type='number']::-webkit-inner-spin-button {
		padding: 0.5px;
		-webkit-appearance: value;
		opacity: 1;
		height: 1.6rem;
	}

	.total {
		background-color: #79FF7E66;
	}
</style>
