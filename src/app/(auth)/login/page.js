'use client'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { auth } from "@/lib/firebase/firebaseconfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [creadentials, setCreadentials] = useState({ email: '', password: '' });
  const [error, setError] = useState(null);
  const route=useRouter()

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCreadentials({ ...creadentials, [name]: value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const formData= new FormData(e.target);
    // const email= formData.get('email');
    // console.log(creadentials);
    try {
      const response = await signInWithEmailAndPassword(auth, creadentials.email, creadentials.password);
      console.log(response);
      route.push('/')
    } catch (error) {
      console.error(error);
      if (error.code === 'auth/invalid-credential') {
        setError('Invaild email and pasword try again.');
      }
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="email">Email</Label>
          <Input type="email" name='email' id='email' placeholder="Enter your email" value={creadentials.email} onChange={handleInputChange} required />
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              name="password"
              value={creadentials.password}
              onChange={handleInputChange}
              placeholder="Enter your password"
              required
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
        </div>
        {error && <div className="text-sm text-red-600">{error}</div>}
        <Button type="submit" className="w-full">Login</Button>
        <Button type="button" className="w-full mt-4 bg-red-500 text-white" onClick={() => alert('Google Login')}>
          Login with Google
        </Button>
      </form>
    </div>
  );
};

export default LoginPage;