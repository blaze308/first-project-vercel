<script>
	let open = false;

	function toggle() {
		open = !open;
	}

	let current = 0;
</script>

<div class="navbar shadow-lg">
	<a href="/" class="logo">
		<svg
			style="color: rgb(120, 53, 38);"
			xmlns="http://www.w3.org/2000/svg"
			width="32"
			height="32"
			fill="currentColor"
			class="bi bi-shop inline-block"
			viewBox="0 0 18 25"
		>
			<path
				d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zM4 15h3v-5H4v5zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3zm3 0h-2v3h2v-3z"
				fill="#783526"
			/>
		</svg>
		<h1 class="text-2xl text-amber-900 inline-block font-semibold">Awesome Store</h1></a
	>

	<nav class:open>
		<ul>
			<li on:keydown on:click={() => (open = false)}>
				<a class:current={current === 0} on:click={() => (current = 0)} href="/">Home</a>
			</li>
			<li on:keydown on:click={() => (open = false)}>
				<a class:current={current === 2} on:click={() => (current = 2)} href="/cart">Cart</a>
			</li>
			<li on:keydown on:click={() => (open = false)}>
				<a class:current={current === 3} on:click={() => (current = 3)} href="/login">Login</a>
			</li>

			<!-- <li class="sign-in-btn"><a class:current={current === 4} href="/log">button</a></li> -->
		</ul>
	</nav>

	<button class="burger" on:click={toggle}>
		<div class="bar-1" />
		<div class="bar-2" />
		<div class="bar-3" />
	</button>
</div>

<style>
	.navbar {
		height: 3.5rem;
		/* background-color: blue; */
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: relative;
		width: 100%;
	}

	.logo {
		margin-left: 7vw;
	}

	.current {
		position: relative;
	}

	.current::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 2px;
		background-color: rgb(76, 92, 20);
	}

	@media only screen and (max-width: 767px) {
		nav {
			display: none;
		}

		.current::after {
			background-color: rgb(189, 221, 74);
		}

		nav.open {
			display: block;
			position: absolute;
			top: 100%;
			left: 0;
			background-color: rgb(120, 53, 38);
			width: 100%;
		}
		li {
			color: wheat;
		}
	}
	nav {
		margin-right: 5vw;
	}
	li {
		font-size: 20px;
		font-weight: 700;
		line-height: 20px;
		padding: 2px;
	}

	/* li:nth-child(4) {
		margin-right: 6vw;
	} */

	ul {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		gap: 5vh;
		margin-top: 2vh;
		margin-bottom: 3vh;
		list-style: none;
		font-size: 1.1rem;
	}
	/* .sign-in-btn {
        background-color: aquamarine;
        padding: 0.4rem 1rem;
        border-radius: 10px;
        font-weight: 500;
    } */

	.burger {
		height: 28px;
		aspect-ratio: 1;
		border: 2px solid rgb(100, 100, 98);
		background-color: transparent;
		border-radius: 5px;
		margin-right: 6vw;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.burger > div {
		height: 2px;
		width: 14px;
		position: absolute;
		background-color: rgb(48, 94, 3);
	}
	.bar-1 {
		transform: translateY(-5px);
	}

	.bar-3 {
		transform: translateY(5px);
	}

	@media only screen and (min-width: 768px) {
		.logo {
			margin-left: 3vw;
		}
		.burger {
			display: none;
		}
		nav {
			display: block;
			position: relative;
		}
		ul {
			margin: 0;
			flex-direction: row;
			gap: 2vw;
		}
	}
</style>
