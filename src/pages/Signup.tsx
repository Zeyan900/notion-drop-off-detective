import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  BarChart3,
  Mail,
  Lock,
  User,
  Building,
  ArrowLeft,
  Github,
  Chrome
} from "lucide-react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="min-h-screen bg-notion-50 flex items-center justify-center p-6">
      <div className="w-full max-w-md space-y-6">
        
        {/* Header */}
        <div className="text-center space-y-2">
          <Link to="/dashboard" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Dashboard
          </Link>
          <div className="flex items-center justify-center gap-3">
            <div className="p-2 bg-gradient-primary rounded-lg">
              <BarChart3 className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-2xl font-semibold text-foreground">
              Onboarding Analytics
            </h1>
          </div>
          <p className="text-muted-foreground">
            Create your account to start analyzing user drop-offs
          </p>
        </div>

        {/* Sign Up Card */}
        <Card className="animate-fade-in">
          <CardHeader className="text-center">
            <CardTitle>Create Account</CardTitle>
            <CardDescription>
              Join thousands of teams optimizing their onboarding
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            
            {/* Social Sign Up */}
            <div className="grid grid-cols-2 gap-3">
              <Button variant="outline" className="w-full">
                <Github className="h-4 w-4 mr-2" />
                GitHub
              </Button>
              <Button variant="outline" className="w-full">
                <Chrome className="h-4 w-4 mr-2" />
                Google
              </Button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <Separator />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or continue with email
                </span>
              </div>
            </div>

            {/* Form */}
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First name</Label>
                  <Input 
                    id="firstName" 
                    placeholder="John" 
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last name</Label>
                  <Input 
                    id="lastName" 
                    placeholder="Doe" 
                    required 
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="john@company.com" 
                    className="pl-10"
                    required 
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="company">Company</Label>
                <div className="relative">
                  <Building className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input 
                    id="company" 
                    placeholder="Your Company" 
                    className="pl-10"
                    required 
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input 
                    id="password" 
                    type="password" 
                    placeholder="Create a strong password" 
                    className="pl-10"
                    required 
                  />
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox id="terms" required />
                <Label htmlFor="terms" className="text-sm">
                  I agree to the{" "}
                  <a href="#" className="underline hover:no-underline">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="#" className="underline hover:no-underline">
                    Privacy Policy
                  </a>
                </Label>
              </div>

              <Button type="submit" className="w-full">
                Create Account
              </Button>
            </form>

            <div className="text-center text-sm">
              Already have an account?{" "}
              <a href="#" className="underline hover:no-underline font-medium">
                Sign in
              </a>
            </div>
          </CardContent>
        </Card>

        {/* Features */}
        <Card className="animate-slide-up">
          <CardContent className="pt-6">
            <div className="text-center space-y-4">
              <h3 className="font-medium">Start analyzing in minutes</h3>
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div className="space-y-1">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                    <BarChart3 className="h-4 w-4 text-primary" />
                  </div>
                  <p className="font-medium">Real-time Analytics</p>
                </div>
                <div className="space-y-1">
                  <div className="w-8 h-8 bg-success/10 rounded-lg flex items-center justify-center mx-auto">
                    <User className="h-4 w-4 text-success" />
                  </div>
                  <p className="font-medium">User Journey Tracking</p>
                </div>
                <div className="space-y-1">
                  <div className="w-8 h-8 bg-warning/10 rounded-lg flex items-center justify-center mx-auto">
                    <Lock className="h-4 w-4 text-warning" />
                  </div>
                  <p className="font-medium">Enterprise Security</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
};

export default Signup;