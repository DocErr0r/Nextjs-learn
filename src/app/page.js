'use client'
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";





export default function Home() {
  <style jsx>{`
  .animate-spin-slow {
    animation: spin 8s linear infinite;
  }
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`}</style>
  return (
    <>
      <section className="relative py-20">
        <div className="container sm:px-4 mx-auto flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-12">

          {/* Text Content */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-bounce">
              Welcome to <span className="text-blue-400">BlogNits</span>
            </h1>
            <p className="text-lg md:text-2xl mb-6 animate-fade-in">
              Discover amazing content, stories, and insights from around the world.
            </p>
            <div className="space-x-4">
              <Button className="">
                Get Started
              </Button>
              <Button variant="outline" className="text-blue-600 border-blue-600">
                Learn More
              </Button>
            </div>
          </div>

          {/* Animated Image */}
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="relative md:w-80 md:h-80 max-sm:hidden">
              <img
                src='res.jpg'
                alt="Animated Hero Image"
                className="w-full h-full object-cover rounded-lg shadow-lg animate-spin-slow"
              />
              {/* Optional Animation Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-600 opacity-60 mix-blend-multiply rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>
      <section className="border-t-4">
        {/* Pricing Section */}
        <div className="py-20">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Pricing Plans</h2>
            <div className="flex flex-col max-sm:m-2 md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-6">

              {/* Free Plan - Highlighted */}
              <Card className="rounded-lg bg-background/90 shadow-lg md:w-1/4 border-2 border-blue-600 transform transition-transform duration-300 hover:scale-105">
                <CardHeader>
                  <CardTitle className="text-xl">Free Plan</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl mb-4">Free</p>
                  <p className="mb-6">Access to limited features.</p>
                  <ul className="text-left">
                    <li>✔️ Basic Content Access</li>
                    <li>❌ Premium Content</li>
                    <li>❌ Support</li>
                    <li>❌ Custom Solutions</li>
                  </ul>
                </CardContent>
                <CardFooter className="flex justify-center">
                  <Button variant="outline" className="text-blue-600 border-blue-600">
                    Choose Plan
                  </Button>
                </CardFooter>
              </Card>

              {/* Basic Plan */}
              <Card className="rounded-lg bg-background/90 shadow-lg md:w-1/4 transform transition-transform duration-300 hover:scale-105">
                <CardHeader>
                  <CardTitle className="text-xl">Basic Plan</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl mb-4">$10/month</p>
                  <p className="mb-6">Access to basic features and content.</p>
                  <ul className="text-left">
                    <li>✔️ Basic Content Access</li>
                    <li>✔️ Premium Content</li>
                    <li>❌ Support</li>
                    <li>❌ Custom Solutions</li>
                  </ul>
                </CardContent>
                <CardFooter className="flex justify-center">
                  <Button variant="solid" className="bg-blue-600 hover:bg-blue-700">
                    Choose Plan
                  </Button>
                </CardFooter>
              </Card>

              {/* Pro Plan */}
              <Card className="rounded-lg bg-background/90 shadow-lg md:w-1/4 transform transition-transform duration-300 hover:scale-105">
                <CardHeader>
                  <CardTitle className="text-xl">Pro Plan</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl mb-4">$20/month</p>
                  <p className="mb-6">Access to all features, premium content, and support.</p>
                  <ul className="text-left">
                    <li>✔️ Basic Content Access</li>
                    <li>✔️ Premium Content</li>
                    <li>✔️ Support</li>
                    <li>❌ Custom Solutions</li>
                  </ul>
                </CardContent>
                <CardFooter className="flex justify-center">
                  <Button variant="solid" className="bg-blue-600 hover:bg-blue-700">
                    Choose Plan
                  </Button>
                </CardFooter>
              </Card>

            </div>
          </div>
        </div>
      </section>
      <section className="border-t-4 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Features</h2>
          <p className="mb-12 text-lg">Discover the amazing features that make our service unique.</p>
          <div className="flex flex-col max-sm:m-2 md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-6">

            {/* Feature Card 1 */}
            <Card className="rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
              <CardHeader>
                <CardTitle className="text-xl">Feature One</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Description of feature one. It provides great benefits and enhances user experience.</p>
                <Button variant="outline" className="text-blue-600 border-blue-600">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            {/* Feature Card 2 */}
            <Card className="rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
              <CardHeader>
                <CardTitle className="text-xl">Feature Two</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Description of feature two. It is designed to simplify processes and save time.</p>
                <Button variant="outline" className="text-blue-600 border-blue-600">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            {/* Feature Card 3 */}
            <Card className="rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
              <CardHeader>
                <CardTitle className="text-xl">Feature Three</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Description of feature three. This feature enhances collaboration and connectivity.</p>
                <Button variant="outline" className="text-blue-600 border-blue-600">
                  Learn More
                </Button>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>
      <section className="py-20 border-t-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Top Blogs</h2>
          <p className="mb-12 text-lg">Explore our most popular blog posts that you won’t want to miss!</p>
          <div className="flex flex-col max-sm:m-2 md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-6">

            {/* Blog Post Card 1 */}
            <Card className="rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
              <CardHeader>
                <CardTitle className="text-xl">Blog Post Title One</CardTitle>
              </CardHeader>
              <CardContent>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5tnPlNlDi986Uzn--HzegxX8VmJlH3bseqg&s"
                  alt="Blog Post One"
                  className="mb-4 w-full h-52 object-cover rounded-lg"
                />
                <p className="mb-4">A brief description of the blog post that highlights its main points and engages readers.</p>
                <Button variant="outline" className="text-blue-600 border-blue-600">
                  Read More
                </Button>
              </CardContent>
            </Card>

            {/* Blog Post Card 2 */}
            <Card className="rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
              <CardHeader>
                <CardTitle className="text-xl">Blog Post Title Two</CardTitle>
              </CardHeader>
              <CardContent>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1SFCqy1ptCjPglUIoWuV8jUZmjBGcV2SkVg&s"
                  alt="Blog Post Two"
                  className="mb-4 w-full h-52 object-cover rounded-lg"
                />
                <p className="mb-4">A brief description of the blog post that highlights its main points and engages readers.</p>
                <Button variant="outline" className="text-blue-600 border-blue-600">
                  Read More
                </Button>
              </CardContent>
            </Card>

            {/* Blog Post Card 3 */}
            <Card className="rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
              <CardHeader>
                <CardTitle className="text-xl">Blog Post Title Three</CardTitle>
              </CardHeader>
              <CardContent>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5tnPlNlDi986Uzn--HzegxX8VmJlH3bseqg&s"
                  alt="Blog Post Three"
                  className="mb-4 w-full h-52 object-cover rounded-lg"
                />
                <p className="mb-4">A brief description of the blog post that highlights its main points and engages readers.</p>
                <Button variant="outline" className="text-blue-600 border-blue-600">
                  Read More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}