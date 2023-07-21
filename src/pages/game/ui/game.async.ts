import { lazy } from 'react';

export const GameAsync = lazy(async () => import('./game'));
