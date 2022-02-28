/* eslint-disable no-irregular-whitespace */
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const WrapperHeader = ({ children }) => {
  const router = useRouter()
  const { pathname } = router

  return (
    <div className="h-screen drawer w-full">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="flex flex-col drawer-content">

        <div className="navbar bg-base-300">
          <div className="w-full max-w-[1360px] mx-auto justify-between">

            <div className="flex">
              <div className="flex-none md:hidden">
                <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </label>
              </div>
              <Link href="/compra" passHref>
                <a className="flex flex-column items-center">
                  <Image src="/potencia.png" alt="Paradis Recycle" width="50" height="50" />
                  <h3 className="normal-case text-xl ml-2">Paradis Recycle</h3>
                </a>
              </Link>
            </div>

            <ul className="menu menu-horizontal p-0 hidden md:flex">
              <li className={`${pathname === '/compra' && 'text-primary font-bold'}`}>
                <Link href="/compra">
                  <a>
                    Compra
                  </a>
                </Link>
              </li>
              <li className={`${pathname === '/venda' && 'text-primary font-bold'}`}>
                <Link href="/venda">
                  <a>
                    Venda
                  </a>
                </Link>
              </li>
              <li className={`${pathname === '/meta' && 'text-primary font-bold'}`}>
                <Link href="/meta">
                  <a>
                    Meta
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {children}
      </div>

      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="overflow-y-auto menu w-60 bg-base-100 menu">
          <div className="flex w-full p-2 justify-between">
            <Link href="/compra" passHref>
              <a className="flex flex-column items-center">
                <Image src="/potencia.png" alt="Paradis Recycle" width="25" height="25" />
                <h3 className="normal-case text-lg ml-2">Paradis Recycle</h3>
              </a>
            </Link>
            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
              <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>
            </label>
          </div>
          <li className={`${pathname === '/compra' && 'bordered'}`}>
            <Link href="/compra">
              <a>
                Compra
              </a>
            </Link>
          </li>
          <li className={`${pathname === '/venda' && 'bordered'}`}>
            <Link href="/venda">
              <a>
                Venda
              </a>
            </Link>
          </li>
          <li className={`${pathname === '/meta' && 'bordered'}`}>
            <Link href="/meta">
              <a>
                Meta
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default WrapperHeader
