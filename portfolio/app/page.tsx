"use client";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const navigation = [
  { name: "Resume", href: "/about", current: false },
  { name: "Skills", href: "/skills current: false" },
  { name: "Projects", href: "/projects", current: false },
];

function classNames(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Home() {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen font-sans bg-green-200 pt-4">
      <Disclosure
        as="nav"
        className="relative bg-white mx-4 rounded-xl after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-green-200"
      >
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            {/* Mobile menu button */}
            <div className="absolute inset-y-0 right-0 flex items-center justify-end sm:hidden">
              <DisclosureButton
                onClick={() => setOpen(!open)}
                className="group relative inline-flex items-right justify-right rounded-md p-2 text-black focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500"
              >
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <XMarkIcon
                    className="h-6 w-6 text-black"
                    aria-hidden="true"
                  />
                ) : (
                  <Bars3Icon
                    className="h-6 w-6 text-black"
                    aria-hidden="true"
                  />
                )}
              </DisclosureButton>
            </div>

            {/* Desktop menu */}
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      aria-current={item.current ? "page" : undefined}
                      className={classNames(
                        item.current
                          ? "bg-gray-950/50 text-black"
                          : "text-black hover:bg-green-200",
                        "rounded-md px-3 py-2 text-sm font-medium",
                      )}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <DisclosurePanel className="sm:hidden">
          <div className="space-y-1 px-2 pt-2 pb-3">
            {navigation.map((item) => (
              <DisclosureButton
                key={item.name}
                as="a"
                href={item.href}
                aria-current={item.current ? "page" : undefined}
                className={classNames(
                  item.current
                    ? "bg-gray-950/50 text-black"
                    : "text-black hover:bg-green-200",
                  "block rounded-md px-3 py-2 text-base font-medium",
                )}
              >
                {item.name}
              </DisclosureButton>
            ))}
          </div>
        </DisclosurePanel>
      </Disclosure>
    </div>
  );
}
