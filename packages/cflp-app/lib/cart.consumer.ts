import { rpcProvider } from './rpc.connector';
import { EventSubject } from './event.subject';

const ChangeCartAction = 'changeCartState';
const GetDefaultCartAction = 'defaultCartState';

export interface CartValue {
    productIds: string[]
}

const subs = new EventSubject<CartValue>();
export class CartConsumer {
    static cartChanged(callback: (value: CartValue) => void): void {
        subs.subscribe(callback);
    }

    static getCartProducts(callback: (value: CartValue) => void): void  {
        rpcProvider.rpc<void, CartValue>(GetDefaultCartAction).then(callback);
    }
}
rpcProvider.registerRpcHandler(ChangeCartAction, (payload: CartValue) => subs.emit(payload));
