import { fail, redirect,  } from '@sveltejs/kit';
import type { Action, Actions, PageServerLoad } from './$types';
// import { db } from '$lib/database';

// export const load: PageServerLoad = async ({ locals }) => {
// 	if (!locals.user) {
// 		throw redirect(302, '/');
// 	}
// };


// const edit: Action = async ({ request }) => {
  // 	const data = await request.formData();
  // 	const username = data.get('username');
  // 	const email = data.get('email');
  // 	const password = data.get('password');
  // 	const address = data.get('address');
  
  //     if (
    //         typeof username !== 'string' ||
    //         typeof password !== 'string' ||
    //         typeof email !== 'string' ||
    //         typeof address !== "string" ||
//         !username || !password
//       ) {
//         return fail(400, { fail: true })
//       }

//       const user = await db.user.findUnique({
//         where: {username}
//       })

//       if (!user) {
  //         return fail(400, {fail: true})
  //       }
  
  //       await db.user.update({
    //         where: {
//             username
//         },
//         data: {
//             username,
//             passwordHash: password
//         }
//       }) 

//       throw redirect(302, "/account")
// };

// export const load: PageServerLoad = async ({ locals }) => {
//   if (!locals.user) {
//     throw redirect(302, '/');
//   }
// };

const del: Action = async ({request}) => {
    const data = await request.formData()
    await fetch("https://ecommerce-task-api-v1.onrender.com/products", {
      method: "DELETE",
      headers: {
        "Content-Type":"application/json"
      }
    }).catch((err) => {
      console.log(err);
      
    })

}

export const actions: Actions = {  }
