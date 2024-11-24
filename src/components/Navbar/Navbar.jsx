'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Themebtn } from './ThemeBtn';
import { useRouter } from 'next/navigation';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { PopoverPortal } from '@radix-ui/react-popover';
import { useState } from 'react';

const Navbar = () => {
    const router = useRouter();
    const isAuth = true;
    const [isOpen, setIsOpen] = useState(false);
    const closeSheet = () => {
        setIsOpen(false);
    };
    const [isOpenDropdown, setIsOpenDropdown] = useState(false);
    const closeDropdown = () => {
        setIsOpenDropdown(false);
    };

    return (
        <nav className="px-6 py-4 bg-background/50 sticky z-50 top-0 border-b backdrop-blur">
            <div className="container mx-auto flex items-center justify-between">
                {/* Logo */}
                <div className="text-2xl font-bold">
                    <Link href="/">BlogNits</Link>
                </div>

                {/* Nav Links */}
                <div className="hidden md:flex space-x-6 items-center">
                    <Link href="/" className="hover:text-gray-400 transition-colors duration-300">
                        Home
                    </Link>
                    <Link href="/blogs" className="hover:text-gray-400 transition-colors duration-300">
                        Blogs
                    </Link>
                    <Link href="/about" className="hover:text-gray-400 transition-colors duration-300">
                        About
                    </Link>
                    <Link href="/contact" className="hover:text-gray-400 transition-colors duration-300">
                        Contact
                    </Link>
                    <Themebtn />
                    {isAuth ? (
                        <>
                            <Popover open={isOpenDropdown} onOpenChange={setIsOpenDropdown}>
                                <PopoverTrigger>
                                    <Avatar>
                                        <AvatarImage src="https://github.com/shadcn.png" />
                                        <AvatarFallback>A</AvatarFallback>
                                    </Avatar>
                                </PopoverTrigger>
                                <PopoverPortal>
                                    <PopoverContent className="shadow-lg rounded-md p-4">
                                        <ul className="space-y-2">
                                            <li>
                                                <Link href={'/dashboard'} className="block" onClick={closeDropdown}>
                                                    Dashboard
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href={'/profile'} className="block" onClick={closeDropdown}>
                                                    Profile
                                                </Link>
                                            </li>
                                            <li>
                                                <Button variant="outline" onClick={closeDropdown} className="w-full hover:bg-red-500 hover:text-white transition-colors duration-200">
                                                    Logout
                                                </Button>
                                            </li>
                                        </ul>
                                    </PopoverContent>
                                </PopoverPortal>
                            </Popover>
                        </>
                    ) : (
                        <>
                            <Button variant="secondary" onClick={() => router.push('/login')}>
                                Login
                            </Button>
                            <Button variant="outline" onClick={() => router.push('/register')}>
                                Signup
                            </Button>
                        </>
                    )}
                </div>

                {/* Mobile Menu */}
                <div className="md:hidden flex items-center">
                    <span className="mx-2">
                        <Themebtn />
                    </span>
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger className="border rounded-sm p-1">
                            {/* Hamburger Icon */}
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </SheetTrigger>
                        <SheetContent>
                            <SheetHeader>
                                <SheetTitle className="font-bold text-left my-3">BlogNits</SheetTitle>
                                <SheetDescription></SheetDescription>
                            </SheetHeader>
                            <div className="flex flex-col space-y-6 items-center">
                                <Link href="/" className="hover:text-gray-400 transition-colors duration-300" onClick={closeSheet}>
                                    Home
                                </Link>
                                <Link href="/blogs" className="hover:text-gray-400 transition-colors duration-300" onClick={closeSheet}>
                                    Blogs
                                </Link>
                                <Link href="/about" className="hover:text-gray-400 transition-colors duration-300" onClick={closeSheet}>
                                    About
                                </Link>
                                <Link href="/contact" className="hover:text-gray-400 transition-colors duration-300" onClick={closeSheet}>
                                    Contact
                                </Link>
                                {!isAuth && (
                                    <>
                                        {' '}
                                        <Button variant="outline" onClick={closeSheet}>
                                            Login
                                        </Button>
                                        <Button variant="outline" onClick={closeSheet}>
                                            Signup
                                        </Button>
                                    </>
                                )}
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
