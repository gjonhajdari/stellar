import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { MoveRight } from "lucide-react";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="flex h-screen items-center justify-center">
      <Card className="w-[400px]">
        <CardHeader>
          <CardTitle className="text-3xl">Create an account</CardTitle>
          <CardDescription className="text-md">
            Have an account already?{" "}
            <Button asChild variant={"link"} className="text-md px-0">
              <Link to="/login">Log in</Link>
            </Button>
          </CardDescription>
        </CardHeader>

        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input type="text" placeholder="Full name" id="name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input type="email" placeholder="Email address" id="email" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input type="password" placeholder="Password" id="password" />
            </div>
          </div>

          <Button size={"lg"} className="mt-6 w-full">
            <span className="mr-3">Create account</span>
            <MoveRight />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default Signup;
