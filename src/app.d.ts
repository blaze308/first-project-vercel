// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			user: {
				name: string;
				role: string;
			};
		}
		// interface PageData {}
		// interface Platform {}
	}
}

declare class Product {
	id: string;
	userId: string;
	title: string;
	description: string;
	price: number;
	category: string;
	images: string[];
}

declare class Order {
	id: number;
	total: number;
	orderItems: [
		{
			price: number;
			quantity: number;
		}
	];
	userId : number
}

export { Product, Locals , Order};
