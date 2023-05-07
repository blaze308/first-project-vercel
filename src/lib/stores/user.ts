import { writable } from "svelte/store";

export const user = writable(null)

export const loginUser = (u: any) => {
    user.set(u)
}