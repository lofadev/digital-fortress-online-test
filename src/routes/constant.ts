import AuthLayout from '~/layouts/auth';
import Login from '~/pages/auth/signin';
import Home from '~/pages/home';
import NotFound from '~/pages/not-found';
import { TRoute } from '~/types/route';

export const ROUTER_PATH = {
  HOME: '/',
  AUTH: {
    LOGIN: '/sign-in',
  },
  NOTFOUND: '*',
};

export const PUBLIC_ROUTES: TRoute[] = [
  {
    path: ROUTER_PATH.HOME,
    component: Home,
  },
  {
    path: ROUTER_PATH.AUTH.LOGIN,
    component: Login,
    layout: AuthLayout,
  },
];

export const PRIVATE_ROUTES: TRoute[] = [];

export const GLOBAL_ROUTES: TRoute[] = [
  {
    path: ROUTER_PATH.NOTFOUND,
    component: NotFound,
  },
];
