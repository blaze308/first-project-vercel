<script lang="ts">
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';
	import { loginUser } from '$lib/stores/user';
	import type { ActionData } from './$types';

	let current = true;

	function toggleTrue() {
		current = true;
	}
	function toggleFalse() {
		current = false;
	}
	export let form: ActionData;

	$: {
		// if (form?.error === "user redirect"){
		// 	goto("/")
		// }
		console.log(form)
		if(form?.user) {
			console.log(form.user)
			loginUser(form.user.user)
			goto("/products")
		}
	}
</script>

<div class="main flex w-full items-center justify-center gap-16">
	<div class="image-div mt-5 h-screen">
		<img
			class="w-[36rem] h-[39rem] object-cover"
			src="https://images.unsplash.com/photo-1605902711834-8b11c3e3ef2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZWNvbW1lcmNlfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=500&q=60"
			alt="logo_image"
		/>
	</div>
	<!-- second -->
	<div class="flex flex-col pt-10">
		<div class="flex flex-col rounded-sm shadow-lg shadow-slate-300 h-[32rem] w-[34rem]">
			<!-- button div for switch -->
			<div class="flex justify-between w-full h-14">
				<button on:click={toggleTrue} class="loginBtn h-14 rounded-tl-sm w-full"
					><p>Login</p></button
				>
				<button on:click={toggleFalse} class="signupBtn h-14 rounded-tr-sm w-full"
					><p>Signup</p>
				</button>
			</div>

			<!-- {#if form?.user}
				<p class="text-red-600">Username is taken</p>
			{/if}

			{#if form?.invalid}
				<p class="text-red-600">Username and EMail required</p>
			{/if}

			{#if form?.credentials}
				<p class="text-red-600">Invalid Credentials</p>
			{/if}
			{#if form?.success}
				<p class="text-red-600">Account Created</p>
			{/if} -->

			<!-- form div -->
			{#if current === true}
				<div class="p-10 flex">
					<form class="" method="POST" action="?/login" use:enhance>
						<div class="mb-10">
							<label class="block font-normal text-[1rem]" for="login_email"
								>Username / Email Address*</label
							>
							<input
								class="w-[28.3rem] h-[2.8rem] rounded-lg border-2"
								type="text"
								id="login_email"
								name="login_email"
								required
							/>
						</div>

						<div class="">
							<label class="block font-normal text-[1rem]" for="login_password">Password*</label>
							<input
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
								type="submit"
								class="bg-white hover:shadow-2xl hover:shadow-slate-400 h-14 rounded-lg shadow-lg border-2 text-[1.7rem] font-semibold shadow-slate-300 mt-8 w-[25rem] m-auto"
								>Portal Access</button
							>
							<p class="m-auto pt-5">
								Not a User?
								<button on:click={toggleFalse} class="reset hover:underline">Create Account</button>
							</p>
						</div>
					</form>
				</div>
			{:else}
				<div class="p-8 flex">
					<form class="" method="POST" action="?/signup" use:enhance>
						<div class="mb-6">
							<label class="block font-normal text-[1rem]" for="signup_username">Username*</label>
							<input
								class="w-[28.3rem] h-[2.8rem] rounded-lg border-2"
								type="text"
								id="signup_username"
								name="signup_username"
								required
							/>
						</div>
						<div class="mb-6">
							<label class="block font-normal text-[1rem]" for="signup_email"
								>Email Address*</label
							>
							<input
								class="w-[28.3rem] h-[2.8rem] rounded-lg border-2"
								type="email"
								id="signup_email"
								name="signup_email"
								required
							/>
						</div>

						<div class="">
							<label class="block font-normal text-[1rem]" for="signup_password">Password*</label>
							<input
								class="w-[28.3rem] h-[2.8rem] rounded-lg border-2"
								type="password"
								id="signup_password"
								name="signup_password"
								required
							/>
						</div>

						<div class="flex flex-col">
							<button
								type="submit"
								class="bg-white hover:shadow-2xl hover:shadow-slate-400 h-14 rounded-lg shadow-lg border-2 text-[1.7rem] font-semibold shadow-slate-300 mt-8 w-[25rem] m-auto"
								>Create My Account</button
							>
							<p class="m-auto pt-5">
								Already a User?
								<button on:click={toggleTrue} class="reset hover:underline">Login</button>
							</p>
						</div>
					</form>
				</div>
			{/if}
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
	.reset {
		color: #60279a;
		font-size: 15px;
	}
</style>
