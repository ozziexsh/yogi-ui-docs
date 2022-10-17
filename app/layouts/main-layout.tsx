import classNames from 'classnames';
import { PropsWithChildren } from 'react';
import { Link, useLocation } from '@remix-run/react';
import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const navigation = [
  { name: 'Introduction', href: '/' },
  { name: 'Installation', href: '/installation' },
  { name: 'How it works', href: '/how-it-works' },
  {
    name: 'Components',
    children: [
      { name: 'Alert', href: '/components/alert' },
      { name: 'Avatar', href: '/components/Avatar' },
      { name: 'Button', href: '/components/button' },
      { name: 'Badge', href: '/components/badge' },
      { name: 'Checkbox', href: '/components/checkbox' },
      { name: 'Drawer', href: '/components/drawer' },
      { name: 'Form', href: '/components/form' },
      { name: 'Heading', href: '/components/heading' },
      { name: 'Icon Button', href: '/components/icon-button' },
      { name: 'Input', href: '/components/input' },
      { name: 'Link', href: '/components/link' },
      { name: 'Modal', href: '/components/modal' },
      { name: 'Radio', href: '/components/radio' },
      { name: 'Select', href: '/components/select' },
      { name: 'Spinner', href: '/components/spinner' },
      { name: 'Switch', href: '/components/switch' },
      { name: 'Table', href: '/components/table' },
      { name: 'Textarea', href: '/components/textarea' },
    ],
  },
];

export default function MainLayout({ children }: PropsWithChildren) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 md:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-white">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 right-0 -mr-12 pt-2">
                      <button
                        type="button"
                        className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="h-0 flex-1 overflow-y-auto pt-5 pb-4">
                    <div className="flex flex-shrink-0 items-center px-4 text-4xl">
                      🧘‍♀️
                    </div>
                    <nav className="mt-5 space-y-1 px-2">
                      {navigation.map(item =>
                        item.children ? (
                          <div key={item.name}>
                            <div
                              className={classNames(
                                'text-gray-600',
                                'group flex items-center px-2 py-2 text-base font-medium rounded-md',
                              )}
                            >
                              {item.name}
                            </div>
                            {item.children.map(subItem => (
                              <a
                                key={subItem.name}
                                href={subItem.href}
                                className={classNames(
                                  location.pathname === subItem.href
                                    ? 'bg-gray-100 text-gray-900'
                                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                                  'pl-4 group flex items-center pr-2 py-2 text-base font-medium rounded-md',
                                )}
                              >
                                {subItem.name}
                              </a>
                            ))}
                          </div>
                        ) : (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              location.pathname === item.href
                                ? 'bg-gray-100 text-gray-900'
                                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                              'group flex items-center px-2 py-2 text-base font-medium rounded-md',
                            )}
                          >
                            {item.name}
                          </a>
                        ),
                      )}
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
              <div className="w-14 flex-shrink-0">
                {/* Force sidebar to shrink to fit close icon */}
              </div>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex min-h-0 flex-1 flex-col border-r border-gray-200 bg-white overflow-auto">
            <div className="flex flex-shrink-0 items-center px-4 text-6xl">
              🧘‍♀️
            </div>
            <div className="mt-5 flex flex-grow flex-col">
              <nav
                className="flex-1 space-y-1 bg-white px-2"
                aria-label="Sidebar"
              >
                {navigation.map(item =>
                  !item.children ? (
                    <div key={item.name}>
                      <Link
                        to={item.href}
                        className={classNames(
                          location.pathname === item.href
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
                          'bg-white text-gray-600',
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
                            className={classNames(
                              location.pathname === subItem.href
                                ? 'bg-gray-100 text-gray-900'
                                : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                              'group flex w-full items-center rounded-md py-2 pl-10 pr-2 text-sm font-medium',
                            )}
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
        </div>
        <div className="flex flex-1 flex-col md:pl-64">
          <div className="sticky top-0 z-10 bg-gray-100 pl-1 pt-1 sm:pl-3 sm:pt-3 md:hidden">
            <button
              type="button"
              className="-ml-0.5 -mt-0.5 inline-flex h-12 w-12 items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <main className="flex-1">
            <div className="py-6">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
                {children}
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
