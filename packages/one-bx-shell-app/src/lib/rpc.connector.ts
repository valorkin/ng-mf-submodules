// todo: move to app-shell
import * as bus from 'framebus';
import {RpcProvider} from 'worker-rpc';

const rpcChannel = 'rpc-action';
export const rpcProvider = new RpcProvider(
  (message) => bus.emit(rpcChannel, message as unknown as Record<string, unknown>)
);
bus.on(rpcChannel, (event) => rpcProvider.dispatch(event));

