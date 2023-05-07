// import type { Handle } from '@sveltejs/kit';
// import { db } from '$lib/database';

import type { Handle } from '@sveltejs/kit';

// export const handle: Handle = async ({ event, resolve }) => {
//     const session = event.cookies.get("session")

//     if(!session){
//         return await resolve(event)
//     }

//     const user = await db.user.findUnique({
//         where: { userAuthToken: session},
//         select: {username: true, role: true}
//     })

//     if (user) {
//         event.locals.user = {
//             name: user.username,
//             role: user.role.name
//         }
//     }
//     return await resolve(event)
// };

export const handle: Handle = async ({ event, resolve }) => {
	const session = event.cookies.get('session');

	if (!session) {
		return await resolve(event);
	}

	const res = await fetch('https://ecommerce-task-api-v1.onrender.com/users', {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json'
		}
	});
	const resData = await res.json();

	// const userEmail = resData.users[resData.users.length - 1].email;	
	// event.locals.user = userEmail;

	return await resolve(event);
};
