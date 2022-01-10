import { lazy } from 'solid-js';

export default [
    {
        path: '/profile',
        component: lazy(() => import('@/pages/profile'))
    }
];
