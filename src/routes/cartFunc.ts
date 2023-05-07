import { cart } from '../cart';

export const addtoCart = (product: any, quantity = 1) => {
	cart.update((value: any) => {
		for (let i = 0; i < value.length; i++) {
			console.log(i);
			let item: any = value[i];
			if (item.id === product.id) {
				item.quantity += quantity;
				value[i] = item;
				return value;
			}
		}
		return [...value, { ...product, quantity }];
	});
};

export const deleteFromCart = async (product: any, quantity = 1) => {
	cart.update((value: any) => {
		for (let i = 0; i < value.length; i++) {
			let item: any = value[i];
			if (item.id === product.id) {
                item.quantity -= quantity;
                value[i] = item;
                return value;
			}
		}
        return [...value, {...product, quantity}]
	});
};

export const totalCart = () => {
	let _cart: any = []
	cart.subscribe((items: any) => _cart = items)
	let total = _cart.reduce((sum: any, item: any) => sum + item.price * item.quantity, 0)
	return total
}




