import { Outlet } from '@remix-run/react';

export default function Components() {
  return (
    <div
      className={'prose prose-pre:bg-inherit prose-pre:p-0 mx-auto max-w-4xl'}
    >
      <Outlet />
    </div>
  );
}
