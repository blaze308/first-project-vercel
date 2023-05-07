import { writable } from "svelte/store";
import { cart } from "./cart";

export let order: any = writable([])

