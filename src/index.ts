import { Commands, Context, Route, Router } from '@vaadin/router';
import './app';
import './analytics/analytics';
import { authGuard, AuthGuard } from './shared/auth/auth-guard';

const routes: Route[] = [
  {
    path: '/',
    component: 'lit-app',
    children: [
      {
        path: 'blog',
        component: 'lit-blog',
        action: async () => {
          await import('./blog/blog');
        },
        children: [
          {
            path: '',
            redirect: '/blog/posts',
          },
          {
            path: 'posts',
            component: 'lit-blog-posts',
            action: async () => {
              await import('./blog/blog-posts');
            },
          },
          {
            path: 'posts/:id',
            component: 'lit-blog-post',
            action: async () => {
              await import('./blog/blog-post');
            },
          },
        ],
      },
      {
        path: 'about',
        component: 'lit-about',
        action: async () => {
          await import('./about/about');
        },
      },
      {
        path: 'admin/:section',
        component: 'lit-admin',
        action: async () => {
          await import('./admin/admin');
        },
      },
      {
        path: 'admin/:section',
        component: 'lit-admin',
        action: async () => {
          await import('./admin/admin');
        },
      },
      {
        path: 'analytics',
        component: 'lit-analytics',
        action: async (context: Context, commands: Commands) => {
          return await new AuthGuard().pageEnabled(context, commands, '/blog');
        },
        // action: authGuard,
        children: [
          {
            path: '/',
            component: 'lit-analytics-home',
            action: async () => {
              await import('./analytics/analytics-home');
            },
          },
          {
            path: ':period',
            component: 'lit-analytics-period',
            action: async () => {
              await import('./analytics/analytics-period');
            },
          },
        ],
      },
    ],
  },
];

const outlet = document.getElementById('outlet');
export const router = new Router(outlet);
router.setRoutes(routes);
