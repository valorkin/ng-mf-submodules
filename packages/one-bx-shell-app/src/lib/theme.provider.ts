// todo: move to app-shell
import {rpcProvider} from './rpc.connector';

const ChangeThemeAction = 'changeTheme';
const GetDefaultThemeAction = 'getDefaultTheme';

interface ThemeValue {
  id: string;
  name: string;
  url: string;
}

let defaultTheme;
rpcProvider.registerRpcHandler(GetDefaultThemeAction, () => defaultTheme);
export class ThemeProvider {
  static setCurrentTheme(value: ThemeValue): void {
    defaultTheme = value;
  }

  static changeTheme(value: ThemeValue): void {
    defaultTheme = value;
    rpcProvider.rpc<ThemeValue>(ChangeThemeAction, value)
      // todo: when moved to app-shell should be replaced with Logger
      .then(console.info.bind(console))
      .catch(console.error.bind(console));
  }
}
