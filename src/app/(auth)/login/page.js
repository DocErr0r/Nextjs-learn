'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { loginwithEmail } from "@/lib/ReduxToolkit/slices/userSlice";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import gicon from './gicon.png';


const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const router = useRouter();
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector((state) => state.user);
  const { toast } = useToast();

  // Handle Input Change
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCredentials({ ...credentials, [name]: value });
  };

  // Handle Login with Email
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await dispatch(loginwithEmail(credentials)).unwrap();
      toast({
        title: "Login Successful",
        // description: `Welcome, ${result.email}`,
        duration: 2000
      });
      router.push("/");
    } catch (err) {
      toast({ title: "Login Failed", description: err.message, variant: "destructive", duration: 3000 });
    }
  };

  return (
    <div className="sm:max-w-md mx-auto sm:my-10 p-6 border rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="email">Email</Label>
          <Input type="email" name="email" id="email" placeholder="Enter your email" value={credentials.email} onChange={handleInputChange} required />
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              value={credentials.password}
              onChange={handleInputChange}
              placeholder="Enter your password"
              required
            />
            <button
              type="button"
              className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>
        {error && <div className="text-sm text-red-600">{error}</div>}
        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </Button>
      </form>


      <div className="flex items-center my-2">
        <div className="flex-grow border-b border-gray-300"></div>
        <span className="mx-2 text-sm text-gray-500 ">or sign in with</span>
        <div className="flex-grow border-b border-gray-300"></div>
      </div>

      <Button type="button" className="w-full mt-4 text-white b bg-transparent border hover:bg-gray-900">
        <img src={gicon.src} alt="G" width={24} />
        Sign in with Google
      </Button>
    </div>
  );
};

export default LoginPage;