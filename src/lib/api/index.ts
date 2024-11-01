import { type AppType } from '../../api';
import { hc } from 'hono/client';

export const apiClient = hc<AppType>('http://localhost:8787/');
