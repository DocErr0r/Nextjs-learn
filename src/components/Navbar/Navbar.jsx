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
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '@/lib/ReduxToolkit/slices/userSlice';

const Navbar = () => {
    const { user, loading } = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const router = useRouter();
    const isAuth = user
    const [isOpen, setIsOpen] = useState(false);
    const closeSheet = () => {
        setIsOpen(false);
    };
    const [isOpenDropdown, setIsOpenDropdown] = useState(false);
    const closeDropdown = () => {
        setIsOpenDropdown(false);
    };

    const handleLogout = async () => {
        try {
            await dispatch(logout()).unwrap();
            router.push('/');
        } catch (error) {
            console.error(error);
        }
    };
    // console.log(loading);
    

    // if (loading) return (
    //     <div>Loading...</div>
    // );

    return (
        <nav className="px-6 py-4 bg-background/50 sticky z-50 top-0 border-b backdrop-blur">
            <div className="container mx-auto flex items-center justify-between">
                <div className="flex">
                    {/* Mobile Menu */}
                    <div className="md:hidden flex items-center">
                        <Sheet open={isOpen} onOpenChange={setIsOpen}>
                            <SheetTrigger className="border rounded-sm p-1 mr-1">
                                {/* Hamburger Icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" fill='currentColor' stroke='currentColor' className='h-6 w-6' viewBox="0 0 48 48">
                                    <path strokeLinecap='round' d="M6 12h36v4H6zm0 10h36v4H6zm0 10h36v4H6z" />
                                </svg>
                            </SheetTrigger>
                            <SheetContent side="left">
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
                                            <Button variant="outline" onClick={() => router.push('/login')}>
                                                Admin Login
                                            </Button>
                                            {/* <Button variant="outline" onClick={closeSheet}>
                                            Signup
                                        </Button> */}
                                        </>
                                    )}
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                    {/* Logo */}
                    <div className="text-2xl font-bold">
                        <Link href="/">BlogNits</Link>
                    </div>
                </div>

                {/* Nav Links */}
                <div className="flex md:space-x-6 space-x-2 items-center">
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
                    </div>
                    <div className="md:hidden flex items-center space-x-2"></div>
                    <Themebtn />
                    {isAuth ? (
                        <>
                            <Popover open={isOpenDropdown} onOpenChange={setIsOpenDropdown}>
                                <PopoverTrigger>
                                    <Avatar className="w-8 h-8">
                                        <AvatarImage src="https://github.com/shadcn.png" />
                                        <AvatarFallback>A</AvatarFallback>
                                    </Avatar>
                                </PopoverTrigger>
                                <PopoverPortal>
                                    <PopoverContent className="shadow-lg rounded-md p-4 mx-4">
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
                                                <Button
                                                    variant="outline"
                                                    onClick={() => {
                                                        handleLogout();
                                                        closeDropdown();
                                                    }}
                                                    className="w-full hover:bg-red-500 hover:text-white transition-colors duration-200">
                                                    Logout
                                                </Button>
                                            </li>
                                        </ul>
                                    </PopoverContent>
                                </PopoverPortal>
                            </Popover>
                        </>
                    ) : (
                        <div className="hidden md:flex space-x-4">
                            <Button variant="secondary" onClick={() => router.push('/login')}>
                                Admin Login
                            </Button>
                            {/* <Button variant="outline" onClick={() => router.push('/register')}>
                                Signup
                            </Button> */}
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
