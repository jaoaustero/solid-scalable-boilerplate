import { lazy } from 'solid-js';

export default [
    {
        path: '/login',
        component: lazy(() => import('@/pages/login'))
    }
];
