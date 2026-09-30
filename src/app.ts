import './assets/main.css';
import { createRouter, applyTheme } from '@diniz/webcomponents';

const router = createRouter([
 
  { path: '/signup', component: 'signup-page', load: () => import('./pages/signup/signup') },

]);
applyTheme('shadcn');
await router();