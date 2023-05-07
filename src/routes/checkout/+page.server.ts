// import { fail, redirect } from '@sveltejs/kit';
// import type { Action, Actions, PageServerLoad } from './$types';
// import bcrypt from 'bcrypt';

import { redirect } from "@sveltejs/kit";
import { cart } from "../../cart";
import type { Action, Actions } from "./$types";

// import { db } from '$lib/database';
// import { cart } from '../../cart';

// // using an enum for user roles to avoid typos
// // if you're not using TypeScript use an object
// enum Roles {
// 	ADMIN = 'ADMIN',
// 	USER = 'USER'
// }

// export const load: PageServerLoad = async () => {
// 	// todo
// };

// const signup: Action = async ({ request }) => {
// 	const data = await request.formData();
// 	const username = data.get('signup_username');
// 	const password = data.get('signup_password');

// 	if (typeof username !== 'string' || typeof password !== 'string' || !username || !password) {
// 		return fail(400, { fail: true });
// 	}

// 	const user = await db.user.findUnique({
// 		where: { username }
// 	});

// 	if (user) {
// 		return fail(400, { user: true });
// 	}

// 	await db.user.create({
// 		data: {
// 			username,
// 			passwordHash: await bcrypt.hash(password, 10),
// 			userAuthToken: crypto.randomUUID(),
// 			role: { connect: { name: Roles.USER } }
// 		}
// 	});
// 	throw redirect(303, '/account');
// };


// const login: Action = async ({ cookies, request }) => {
// 	const data = await request.formData();
// 	const username = data.get('login_username');
// 	const password = data.get('login_password');

// 	console.log({ username, password });

// 	if (typeof username !== 'string' || typeof password !== 'string' || !username || !password) {
// 		return fail(400, { fail: true });
// 	}

// 	const user = await db.user.findUnique({
// 		where: { username }
// 	});

// 	if (!user) {
// 		return fail(400, { credentials: true });
// 	}

// 	const userPassword = await bcrypt.compare(password, user.passwordHash);

// 	if (!userPassword) {
// 		return fail(400, { credentials: true });
// 	}

// 	//auth cookie
// 	const authUser = await db.user.update({
// 		where: { username: user.username },
// 		data: { userAuthToken: crypto.randomUUID() }
// 	});
// 	cookies.set('session', authUser.userAuthToken, {
// 		//send cookie for every page
// 		path: '/',
// 		//server-side only cookie to avoid document.cookie
// 		httpOnly: true,
// 		//only request from same site can send cookies
// 		// sameSite: "strict",
// 		//only sent over https to prodcution
// 		secure: process.env.NODE_ENV === 'production',
// 		//set cookie to expire after a month
// 		maxAge: 60 * 60 * 24 * 30
// 	});
// 	throw redirect(302, '/account');
  
// };




const signup: Action = async ({ request, cookies }) => {
	const data = await request.formData();
	const username = data.get('signup_username');
	const email = data.get('signup_email');
	const password = data.get('signup_password');
	const firstname = 'John';
	const lastname = 'Doe';

	const resUsers = await fetch('https://ecommerce-task-api-v1.onrender.com/users/signUp', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ email, password, firstname, lastname })
	})

	const usersData = await resUsers.json()
	cookies.set("session", usersData.token)
	console.log(usersData.token);
	return {
		user: usersData.user,
		token: usersData.token,
	}
};

const login: Action = async ({ request, cookies }) => {
	console.log('token',cookies.get('session'))
	const data = await request.formData();
	// const username = data.get('login_username');
	const email = data.get('login_email');
	const password = data.get('login_password');

	console.log({ email, password });
	
	const resUsers = await fetch('https://ecommerce-task-api-v1.onrender.com/users/signin', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ email, password })
	})

	const usersData = await resUsers.json()
	cookies.set("session", usersData.token)
	console.log(usersData.token);
	return {
		user: usersData.user,
		token: usersData.token,
	}
	// try {
	// 	throw redirect(302, '/')
	// } catch (error) {
	// 	return {
	// 		error: "user redirect",
	// 		message : "user not redirecteds"
	// 	}
	// }
	
};

export const actions: Actions = { signup, login };
