import type { MetaFunction } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import styles from './tailwind.css';
import MainLayout from '~/layouts/main-layout';
import { YogiProvider } from 'yogi-ui';
import { TestContext } from '~/ctx';

export function links() {
  return [
    { rel: 'stylesheet', href: styles },
    {
      rel: 'stylesheet',
      href: 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/styles/github-dark.min.css',
    },
  ];
}

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Yogi UI',
  viewport: 'width=device-width,initial-scale=1',
});

export default function App() {
  return (
    <html lang="en" className={'h-full bg-gray-100'}>
      <head>
        <Meta />
        <Links />
      </head>
      <body className={'h-full'}>
        <YogiProvider>
          <TestContext.Provider value={'abcd'}>
            <MainLayout>
              <Outlet />
            </MainLayout>
          </TestContext.Provider>
        </YogiProvider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
