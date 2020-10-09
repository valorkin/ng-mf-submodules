// static imports do currently not work with shared libs,
// hence the dynamic one inside an async IIFE below
import * as rxjs from 'rxjs';

class Microfrontend1 extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }

    async connectedCallback() {
        const styleText = require('!raw-loader!./styles.css');

        this.shadowRoot.innerHTML = `
            <style>${styleText.default}</style>
            <h3>Login</h3>
            <div>
                <input type="text" placeholder="User ID">
            </div>
            <div>
                <input type="text" placeholder="Password">
            </div>
            <div>
                <button id="forgotPasswd">Forgot Password</button>
                <button id="Login">Login</button>
            </div>
        `;
    }
}

const elementName = 'fds-login-form';
customElements.define(elementName, Microfrontend1);

export {elementName};
