import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import Kobodrop from "../assets/logos/kobodrop_logo.svg";


function Nav() {
  return (<Disclosure as ="nav">
    {({ open}) => (
        <>
        <div className="flex h-[15vh] items-center max-w-7xl px-8 justify-between">
            <div className="flex items-center">
              <a href="#">
                <img src={Kobodrop} alt="Kobodrop logo"/>
              </a>
              <div className="ml-4 sm:flex items-center space-x-4 hidden">
                <a className="text-gray-500 hover:text-gray-900 active:text-gray-400" href="#features">Features</a>
                <a className="text-gray-500 hover:text-gray-900 active:text-gray-400" href="#partners">Partners</a>
                <a className="text-gray-500 hover:text-gray-900 active:text-gray-400" href="#reviews">Reviews</a>
              </div>
            </div>
              <a href="https://play.google.com" target="_blank" className="bg-gray-800 text-white rounded-xl px-5 py-3 hover:bg-gray-900 active:bg-gray-600 hidden sm:flex">Install Kobodrop</a>
            <Disclosure.Button className="rounded-md p-2 text-gray-500 hover:bg-gray-700 hover:text-white sm:hidden">
                {open ? (
                    <XMarkIcon className="block h-6 w-6"/>
                ) : <Bars3Icon className="block h-6 w-6"/>}
            </Disclosure.Button>
        </div>
        <Disclosure.Panel className="space-y-1">
            <Disclosure.Button className="block" as="a" href="#features">Features</Disclosure.Button>
            <Disclosure.Button className="block" as="a" href="#partners">Partners</Disclosure.Button>
            <Disclosure.Button className="block" as="a" href="#reviews">Reviews</Disclosure.Button>
        </Disclosure.Panel>
        </>
    )}
    </Disclosure>
  );
}

export default Nav