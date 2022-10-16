import { Disclosure } from '@headlessui/react';
import classNames from 'classnames';
import { PropsWithChildren } from 'react';
import { Link } from '@remix-run/react';

const navigation = [
  { name: 'Introduction', href: '#', current: true },
  {
    name: 'Components',
    current: false,
    children: [
      { name: 'Button', href: '/components/button' },
      { name: 'Members', href: '#' },
      { name: 'Calendar', href: '#' },
      { name: 'Settings', href: '#' },
    ],
  },
  {
    name: 'Projects',
    current: false,
    children: [
      { name: 'Overview', href: '#' },
      { name: 'Members', href: '#' },
      { name: 'Calendar', href: '#' },
      { name: 'Settings', href: '#' },
    ],
  },
  {
    name: 'Calendar',
    current: false,
    children: [
      { name: 'Overview', href: '#' },
      { name: 'Members', href: '#' },
      { name: 'Calendar', href: '#' },
      { name: 'Settings', href: '#' },
    ],
  },
  {
    name: 'Documents',
    current: false,
    children: [
      { name: 'Overview', href: '#' },
      { name: 'Members', href: '#' },
      { name: 'Calendar', href: '#' },
      { name: 'Settings', href: '#' },
    ],
  },
  {
    name: 'Reports',
    current: false,
    children: [
      { name: 'Overview', href: '#' },
      { name: 'Members', href: '#' },
      { name: 'Calendar', href: '#' },
      { name: 'Settings', href: '#' },
    ],
  },
];

export default function MainLayout({ children }: PropsWithChildren) {
  return (
    <div className={'flex flex-row min-h-screen'}>
      <div className="flex flex-grow flex-col overflow-y-auto border-r border-gray-200 bg-white pt-5 pb-4 max-w-xs">
        <div className="flex flex-shrink-0 items-center px-4">
          <img
            className="h-8 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
        </div>
        <div className="mt-5 flex flex-grow flex-col">
          <nav className="flex-1 space-y-1 bg-white px-2" aria-label="Sidebar">
            {navigation.map(item =>
              !item.children ? (
                <div key={item.name}>
                  <Link
                    to={item.href}
                    className={classNames(
                      item.current
                        ? 'bg-gray-100 text-gray-900'
                        : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                      'group w-full flex items-center pl-7 pr-2 py-2 text-sm font-medium rounded-md',
                    )}
                  >
                    {item.name}
                  </Link>
                </div>
              ) : (
                <div key={item.name} className="space-y-1">
                  <div
                    className={classNames(
                      item.current
                        ? 'bg-gray-100 text-gray-900'
                        : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                      'group w-full pl-7 flex items-center pr-2 py-2 text-left text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500',
                    )}
                  >
                    {item.name}
                  </div>
                  <div className="space-y-1">
                    {item.children.map(subItem => (
                      <Link
                        key={subItem.name}
                        to={subItem.href}
                        className="group flex w-full items-center rounded-md py-2 pl-10 pr-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ),
            )}
          </nav>
        </div>
      </div>

      <main className={'p-12 flex-1'}>{children}</main>
    </div>
  );
}
