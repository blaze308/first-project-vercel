<script lang="ts">
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { loginUser, user } from '$lib/stores/user';
	import type { ActionData } from './$types';

	export let showModal: any;
	let dialog: any;

	$: if (dialog && showModal) dialog.showModal();

	let current = true;

	function toggleTrue() {
		current = true;
	}
	function toggleFalse() {
		current = false;
	}
	export let form: ActionData;

	let username: any;
	let password: any;
	let email: any;
	async function getUserData() {
		const resUsers = await fetch('https://ecommerce-task-api-v1.onrender.com/users', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ username, password, email })
		})
			.then((res) => res.json())
			.catch((error) => console.log(error));
	}

	function PlaceOrder() {
		// $order = $cart
		goto('/account');
	}
	
	if(form?.user) {
			console.log(form.user)
			loginUser(form.user.user)
			goto("/account")
		}
</script>

<div class="grid grid-cols-2">
	<div class="grid col-span-1">
		<p class="font-bold mt-10 ml-10 text-4xl">Checkout Order</p>

		<!-- {#if !$page.data.user} -->
		<!-- login detail -->
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<dialog
		class="m-auto overflow-hidden"
			bind:this={dialog}
			on:close={() => (showModal = false)}
			on:click|self={() => dialog.close()}
		>
			<!-- <button autofocus on:click={() => dialog.close()}>close</button> -->

			<div class="">
				<div class="flex flex-col rounded-sm shadow-lg shadow-slate-300 h-[28rem] w-[34rem]">
					<!-- button div for switch -->
					<div class="flex justify-between w-full h-10">
						<button on:click={toggleTrue} class="loginBtn h-14 rounded-tl-sm w-full"
							><p>Login</p></button
						>
						<button on:click={toggleFalse} class="signupBtn h-14 rounded-tr-sm w-full"
							><p>Signup</p>
						</button>
					</div>

					<!-- form div -->
					{#if current === true}
						<div class="p-10 flex">
							<form class="" method="POST" action="?/login" use:enhance>
								<div class="mb-10">
									<label class="block font-normal text-[1rem]" for="login_email"
										>Username / Email Address*</label
									>
									<input
										bind:value={username}
										class="w-[28.3rem] h-[2.8rem] rounded-lg border-2"
										type="text"
										id="login_email"
										name="login_email"
										required
									/>
								</div>

								<div class="">
									<label class="block font-normal text-[1rem]" for="login_password">Password*</label
									>
									<input
										bind:value={password}
										class="w-[28.3rem] h-[2.8rem] rounded-lg border-2"
										type="password"
										id="login_password"
										name="login_password"
										required
									/>
								</div>

								<div class="flex flex-col">
								<a href="/reset" class="reset inline-block mt-2.5 ml-auto hover:underline"
									>Forgot Password?</a
								>
								<button
								on:click={() => {
									if(form?.user.user) {
										goto("/account")

									}
								}}
									type="submit"
									class="bg-white hover:shadow-2xl hover:shadow-slate-400 h-14 rounded-lg shadow-lg border-2 text-[1.7rem] font-semibold shadow-slate-300 mt-8 w-[25rem] m-auto"
									>Portal Access</button
								>
								<p class="m-auto pt-5">
									Not a User?
									<button on:click={toggleFalse} class="reset hover:underline"
										>Create Account</button
									>
								</p>
							</div>
							</form>
						</div>
					{:else}
						<div class="p-8 flex">
							<form class="" method="POST" action="?/signup" use:enhance>
								<div class="mb-2">
									<label class="block font-normal text-[1rem]" for="signup_username"
										>Username*</label
									>
									<input
										bind:value={username}
										class="w-[28.3rem] h-[2.8rem] rounded-lg border-2"
										type="text"
										id="signup_username"
										name="signup_username"
										required
									/>
								</div>
								<div class="mb-2">
									<label class="block font-normal text-[1rem]" for="signup_email"
										>Email Address*</label
									>
									<input
										bind:value={email}
										class="w-[28.3rem] h-[2.8rem] rounded-lg border-2"
										type="email"
										id="signup_email"
										name="signup_email"
										required
									/>
								</div>

								<div class="">
									<label class="block font-normal text-[1rem]" for="signup_password"
										>Password*</label
									>
									<input
										bind:value={password}
										class="w-[28.3rem] h-[2.8rem] rounded-lg border-2"
										type="password"
										id="signup_password"
										name="signup_password"
										required
									/>
								</div>

								<!-- <div class="flex flex-col">
								<button
									type="submit"
									class="bg-white hover:shadow-2xl hover:shadow-slate-400 h-14 rounded-lg shadow-lg border-2 text-[1.7rem] font-semibold shadow-slate-300 mt-8 w-[25rem] m-auto"
									>Create My Account</button
								>
								<p class="m-auto pt-5">
									Already a User?
									<button on:click={toggleTrue} class="reset hover:underline">Login</button>
								</p>
							</div> -->
							</form>
						</div>
					{/if}
				</div>
			</div>
		</dialog>
		<!-- {:else} -->
		<div class="m-auto">
			<img
				class="w-[37rem] h-[30rem] object-cover"
				src="https://images.unsplash.com/photo-1605902711834-8
					b11c3e3ef2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY
					2h8NXx8ZWNvbW1lcmNlfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=500&q=60"
				alt="logo_image"
			/>
		</div>
		<!-- {/if} -->

		<div class="flex flex-col ml-10">
			<p class="text-xl font-semibold">Payment Method</p>
			<p>Cash on delivery with 5% shipping fee</p>
		</div>
	</div>
	<div class="col-span-1 m-10">
		<p class="font-semibold py-5 text-lg">Shipping Address</p>
		<div class="flex">
			<form class="" method="POST" action="?/order" use:enhance>
				<div class="mb-10">
					<label class="block font-normal text-[1rem]" for="address">Address*</label>
					<input
						class="w-[28.3rem] h-[2.8rem] rounded-lg border-2"
						type="text"
						id="address"
						name="address"
						required
					/>
				</div>
				<div class="mb-10">
					<label class="block font-normal text-[1rem]" for="state">State/Region/Province*</label>
					<input
						class="w-[28.3rem] h-[2.8rem] rounded-lg border-2"
						type="text"
						id="state"
						name="state"
						required
					/>
				</div>
				<div class="mb-10">
					<label class="block font-normal text-[1rem]" for="country">Country*</label>
					<input
						class="w-[28.3rem] h-[2.8rem] rounded-lg border-2"
						type="text"
						id="country"
						name="country"
						required
					/>
				</div>
				<div class="mb-10">
					<label class="block font-normal text-[1rem]" for="country">Order Note</label>
					<textarea
						class="w-[28.3rem] h-[10rem] rounded-lg border-2"
						id="order"
						name="order"
						required
					/>
				</div>
				{#if !$page.data.user}
					<button
						on:click={() => {
							showModal = true;
							if ($page.data.user){
								PlaceOrder()
							}
						}}
						type="submit"
						class="place float-right text-white font-semibold w-[18rem] h-[3rem] rounded"
						>Place Order Now</button
					>
				{:else}
					<button
						on:click={PlaceOrder}
						type="submit"
						class="place float-right text-white font-semibold w-[18rem] h-[3rem] rounded"
						>Place Order Now</button
					>
				{/if}
			</form>
		</div>
	</div>
</div>

<style>
	.loginBtn {
		background-color: #69f26e;
	}
	.loginBtn > p {
		font-size: 24px;
	}

	.loginBtn:hover {
		background-color: #4ce451;
	}
	.signupBtn > p {
		color: white;
		font-size: 24px;
	}
	.signupBtn {
		background-color: #ea6a6a;
	}
	.signupBtn:hover {
		background-color: #f34949;
	}
	/* .reset {
		color: #60279a;
		font-size: 15px;
	} */
	.place {
		background-color: #392faf;
	}
	dialog[open] {
		animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
	}
	@keyframes zoom {
		from {
			transform: scale(0.95);
		}
		to {
			transform: scale(1);
		}
	}
	dialog[open]::backdrop {
		animation: fade 0.2s ease-out;
	
		
	}
	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
	

</style>
