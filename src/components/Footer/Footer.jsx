import { Button } from '@/components/ui/button'; // Adjust the path based on your project structure
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-10">
            <div className="container mx-auto text-center">
                <h2 className="text-2xl font-bold mb-4">Stay Connected</h2>
                <p className="mb-6">Subscribe to our newsletter for the latest updates and offers!</p>

                {/* Subscription Form */}
                <div className="flex justify-center flex-wrap gap-2 mb-6">
                    <input type="email" placeholder="Enter your email" className="p-2 rounded-md dark:text-gray-300 text-black" />
                    <Button className="bg-blue-600 hover:bg-blue-700 rounded-r-md">Subscribe</Button>
                </div>

                {/* Links Section */}
                <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6 mb-6">
                    <Link href="#" className="hover:underline">
                        About Us
                    </Link>
                    <Link href="#" className="hover:underline">
                        Contact
                    </Link>
                    <Link href="#" className="hover:underline">
                        Privacy Policy
                    </Link>
                    <Link href="#" className="hover:underline">
                        Terms of Service
                    </Link>
                </div>

                {/* Social Media Icons */}
                <div className="flex justify-center flex-wrap space-x-4 mb-6">
                    <a href="#" target="blank" className="text-blue-400 hover:text-blue-500">
                        Facebook
                    </a>
                    <a href="#" target="blank" className="text-blue-400 hover:text-blue-500">
                        Twitter
                    </a>
                    <a href="#" target="blank" className="text-blue-400 hover:text-blue-500">
                        Instagram
                    </a>
                    <a href="#" target="blank" className="text-blue-400 hover:text-blue-500">
                        LinkedIn
                    </a>
                </div>

                {/* Copyright Section */}
                <div className="text-sm mb-4">
                    <p>&copy; {new Date().getFullYear()} BlogNits. All rights reserved and Developed by Nitin with ❤︎</p>
                </div>
            </div>
        </footer>
    );
}
