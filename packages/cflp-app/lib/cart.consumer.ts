import { rpcProvider } from './rpc.connector';
import { EventSubject } from './event.subject';

const ChangeCartAction = 'changeCartState';
const GetCurrentCartAction = 'currentCartState';

export interface CartValue {
    productIds: string[]
}

const subs = new EventSubject<CartValue>();
export class CartConsumer {
    static cartChanged(callback: (value: CartValue) => void): void {
        subs.subscribe(callback);
    }

    static getCartProducts(callback: (value: CartValue) => void): void  {
        rpcProvider.rpc<void, CartValue>(GetCurrentCartAction).then(callback);
    }
}
rpcProvider.registerRpcHandler(ChangeCartAction, (payload: CartValue) => subs.emit(payload));
