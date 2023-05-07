import type { PageServerLoad } from './$types.js';

export const load: PageServerLoad = async ({ locals }) => {
	// if (!locals.user) {
	// 	throw redirect(302, '/');
	// }
	// if (locals.user) {
	// 	throw redirect(302, '/add');
	// }
};

export const actions = {
	add: async ({ request, cookies }: any) => {
		cookies.get('session');
		const data = await request.formData();
		const title = data.get('title');
		const price = data.get('price');
		const images = data.get('image');
		const category = data.get('tags');
		const description = data.get('description');

		console.log(images);

		// const images: any = [
		// "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG5pa2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
		// "https://images.unsplash.com/photo-1556906781-9a412961c28c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bmlrZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
		// "https://images.unsplash.com/photo-1612821745127-53855be9cbd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fG5pa2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
		// "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fG5pa2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
		// ];

		const res = await fetch('https://ecommerce-task-api-v1.onrender.com/users', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		});

		const resData = await res.json();
		const userId = resData.users[resData.users.length - 1].id;
		const cook = cookies.get("session")

		await fetch('https://ecommerce-task-api-v1.onrender.com/products', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: cook
					// 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvaG5kb2VAZ21haWwuY29tIiwicGFzc3dvcmQiOiIxMjM0NSIsImlhdCI6MTY4MzMxMDU5NSwiZXhwIjoxNjgzMzE0MTk1fQ.2Ub6pTC_8ME6ddUUI3SFYZZunpNzuwuWPwU00sxR5BM'
			},
			body: JSON.stringify({ title, price, description, category, images, userId })
		})
			.then((res) => res.json())
			.then(() => {
				return {
					success: true
				};
			})
			.catch((error) => {
				console.log(error);
			});
	}
};
