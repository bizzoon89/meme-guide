import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from '@heroui/navbar';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const navigation = [
  { name: 'Table View', href: '/' },
  { name: 'List View', href: '/list' },
];

export function AppNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      maxWidth='xl'
    >
      <NavbarBrand>
        <span className='text-lg'>Meme Guide</span>
      </NavbarBrand>

      <NavbarContent
        className='hidden lg:flex gap-6'
        justify='end'
      >
        {navigation.map(item => {
          const isActive = location.pathname === item.href;
          return (
            <NavbarItem key={item.href}>
              <Link
                to={item.href}
                className={`transition-colors duration-200 ${isActive ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-700 hover:text-blue-500'}`}
              >
                {item.name}
              </Link>
            </NavbarItem>
          );
        })}
      </NavbarContent>

      <NavbarMenuToggle className='md:hidden' />

      <NavbarMenu className='lg:hidden'>
        {navigation.map(item => {
          const isActive = location.pathname === item.href;
          return (
            <NavbarMenuItem key={item.href}>
              <Link
                to={item.href}
                className={`block w-full py-2 text-right ${isActive ? 'text-blue-600 font-medium' : 'text-gray-800 hover:text-blue-500'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            </NavbarMenuItem>
          );
        })}
      </NavbarMenu>
    </Navbar>
  );
}
