import '@diniz/webcomponents';
import './login.css';
import template from './login.html?raw';
import { getFormValues, http, UIButton, UIToast, validateForm } from '@diniz/webcomponents';
import { getFirstValidationError } from '../shared/formValidation';


export class LoginPage extends HTMLElement {
    connectedCallback() {
        this.innerHTML = template;
        const form = this.querySelector('#loginForm') as HTMLFormElement | null;
        const toast = this.querySelector('#loginToast') as UIToast;
        const submitBtn = this.querySelector('#submitBtn') as UIButton;
       

        if (!form) return;

        const showError = (msg: string) => {           
           toast.error(msg);
        };

        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            const validation = validateForm(form);
            if (!validation.isValid) {
                showError(getFirstValidationError(validation.errors));
                return;
            }

            const { email, password } = getFormValues(form);

            if (!email || !password) {
                showError('Email and password are required.');
                return;
            }

            if (submitBtn) submitBtn.isProcessing = true;
            try {
                const result = await http.post<{ success: boolean }>('/.netlify/functions/signup', { email, password });
                if (result.success) {
                    toast.success('Account created! Redirecting...');
                    setTimeout(() => { window.location.href = '/'; }, 1200);
                } else {
                    showError('Signup failed. Please try again.');
                }
            } catch (error) {
                showError(error instanceof Error ? error.message : 'Something went wrong. Please try again.');
            } finally {
                if (submitBtn) submitBtn.isProcessing = false;
            }
        });
    }
}

customElements.define('login-page', LoginPage);