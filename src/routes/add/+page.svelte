<script>
	// @ts-nocheck

	import { enhance } from '$app/forms';
	import { error } from '@sveltejs/kit';
	let input;
	let image;
	let showImage = false;

	function onChange() {
		const file = input.files[0];

		if (file) {
			showImage = true;

			const reader = new FileReader();
			reader.addEventListener('load', function (loadevent) {
				image.setAttribute('src', reader.result);
				//   console.log(loadevent.target.result.length);
			});
			reader.readAsDataURL(file);
			return;
		}
		showImage = false;
	}

	const toBase64 = file => new Promise((resolve, reject) => {
		const reader = new FileReader()
		reader.readAsDataURL(file)
		reader.onload = () => resolve(reader.result)
		reader.onerror = error => reject(error)
	})

	('#jsonConvert').click(function() {
		const uploadedFile = document.querySelector('#fileUpload').files[0]
		toBase64(uploadedFile)
		.then(res => {
			console.log(res);
		})
		.catch(err => {
			console.log(err);
		})
	})
</script>

<div class="grid h-fit">
	<p class="font-semibold py-5 text-lg text-center">Add New Product</p>
	<div class="flex m-auto">
		<form class="" method="POST" action="?/add" use:enhance enctype="multipart/form-data">
			<div class="mb-8">
				<label class="block font-normal text-[1rem]" for="title">Product Name*</label>
				<input
					class="w-[28.3rem] h-[2.8rem] rounded-lg border-2"
					type="text"
					id="title"
					name="title"
				/>
			</div>
			<div class="mb-8">
				<label class="block font-normal text-[1rem]" for="price">Price*</label>
				<input
					class="w-[28.3rem] h-[2.8rem] rounded-lg border-2"
					type="text"
					id="price"
					name="price"
				/>
			</div>
			<div class="mb-8">
				<label class="block font-normal text-[1rem]" for="tags">Tags*</label>
				<input
					class="w-[28.3rem] h-[2.8rem] rounded-lg border-2"
					type="text"
					id="tags"
					name="tags"
				/>
			</div>
			<div class="mb-5">
				<label class="block font-normal text-[1rem]" for="description">Description*</label>
				<textarea
					class="w-[28.3rem] h-[9rem] rounded-lg border-2"
					id="description"
					name="description"
				/>
			</div>

			<div class="mb-8">
				<label class="block font-normal text-[1rem]" for="images">Product Images*</label>

				<div class="flex justify-start gap-8">
					{#if !showImage}
						<label class="label" for="image0" />
						<input
							class="hidden"
							id="image0"
							bind:this={input}
							on:change={onChange}
							type="file"
							name="image0"
						/>
					{:else}
						<img src="" bind:this={image} alt="" />
					{/if}
				</div>

				<div>
					<input type="file" id="fileInput">
				</div>
			</div>
			<button type="submit" class="place float-right font-semibold w-[18rem] h-[3rem] rounded"
				>Add New Product</button
			>
		</form>
	</div>
</div>

<style>
	.label {
		width: 96px;
		height: 68px;
		margin-top: 5px;
		border: 1px solid black;
	}

	img {
		width: 96px;
		height: 68px;
		object-fit: cover;
		border: 1px solid black;
	}

	.place {
		color: white;
		background: #392FAF;
		margin-bottom: 20px;
	}
</style>
