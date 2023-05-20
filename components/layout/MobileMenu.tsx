'use client'
import React from 'react'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import Link from 'next/link'

export default function MobileMenu() {
  return (
    <NavigationMenu.Root className="relative z-10 justify-end w-screen block md:hidden">
      <NavigationMenu.List className="m-0 p-1 justify-end">
        <NavigationMenu.Item className="flex items-center justify-end">
          <NavigationMenu.Trigger className="group flex select-none px-3 py-2 outline-none">
            <HamburgerMenuIcon className="relative h-6 w-6" aria-hidden />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight absolute top-0 left-0 w-full sm:w-auto">
            <div className="divide-y w-full">
              <Link
                href="/#about-us"
                className="hover:text-[#247B38] px-4 py-2 block"
              >
                Về chúng tôi
              </Link>
              <Link
                href="/#our-services"
                className="hover:text-[#247B38] px-4 py-2 block"
              >
                Dịch vụ
              </Link>
              <Link
                href="/products"
                className="hover:text-[#247B38] px-4 py-2 block"
              >
                Sản phẩm
              </Link>
              <Link
                href="/#projects"
                className="hover:text-[#247B38] px-4 py-2 block"
              >
                Dự án tiêu biểu
              </Link>
              <Link
                href="/news"
                className="hover:text-[#247B38] px-4 py-2 block"
              >
                Tin tức & Khuyến mãi
              </Link>

              <Link
                href="/faq"
                className="hover:text-[#247B38] px-4 py-2 block"
              >
                Câu hỏi thường gặp
              </Link>
              <Link
                href="/#contact-us"
                className="hover:text-[#247B38] px-4 py-2 block"
              >
                Liên hệ
              </Link>
            </div>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Indicator className="data-[state=visible]:animate-fadeIn data-[state=hidden]:animate-fadeOut top-full z-[1] flex h-[10px] items-end justify-center overflow-hidden transition-[width,transform_250ms_ease]">
          <div className="relative top-[70%] h-[10px] w-[10px] rotate-[45deg] rounded-tl-1 bg-white" />
        </NavigationMenu.Indicator>
      </NavigationMenu.List>

      <div className="perspective-[2000px] absolute top-full left-0 flex w-full justify-center">
        <NavigationMenu.Viewport className="data-[state=open]:animate-scaleIn data-[state=closed]:animate-scaleOut relative mt-[10px] h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-[6px] bg-white transition-[width,_height] duration-300 sm:w-[var(--radix-navigation-menu-viewport-width)]" />
      </div>
    </NavigationMenu.Root>
  )
}
