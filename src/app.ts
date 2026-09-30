import './style.css';
import { createRouter, applyTheme } from '@diniz/webcomponents';

const router = createRouter([
 
  { path: '/', component: 'login-page', load: () => import('./pages/login/login') },
  { path: '/signup', component: 'signup-page', load: () => import('./pages/signup/signup') },
]);
applyTheme('shadcn');
await router();
