import './style.css';
import { createRouter, applyTheme } from '@diniz/webcomponents';

const router = createRouter([
 
  { path: '/', component: 'signup-page', load: () => import('./pages/signup/signup') },

]);
applyTheme('shadcn');
await router();
alert('Router initialized');
console.log('Router initialized');