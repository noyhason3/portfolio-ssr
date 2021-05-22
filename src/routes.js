import Homepage from './pages/Homepage';
import Recipes from './pages/Recipes';

const routes = [
  {
    path: '/',
    component: Homepage,
  },
  {
    path: '/recipes',
    component: Recipes,
  },
];

export default routes;