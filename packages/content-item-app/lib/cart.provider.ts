import { rpcProvider } from './rpc.connector';

const ChangeCartAction = 'changeCartState';
const GetCurrentCartAction = 'currentCartState';

interface CartValue {
  productIds: string[]
}

let cart;
rpcProvider.registerRpcHandler(GetCurrentCartAction, () => cart);

export class CartProvider {
  static setCartProducts(value: CartValue): void {
    cart = value;
  }

  static updateCart(value: CartValue): void {
    cart = value;
    rpcProvider.rpc<CartValue>(ChangeCartAction, value)
      .then(console.info.bind(console))
      .catch(console.error.bind(console));
  }
}
