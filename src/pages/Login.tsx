import { Link } from "react-router-dom";
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
import { FullscreenPage } from "@/components/ui/FullscreenPage";

function Login() {
  return (
    <FullscreenPage>
      <Card className="w-[400px]">
        <CardHeader>
          <CardTitle className="text-3xl">Welcome back</CardTitle>
          <CardDescription className="text-md">
            Don't have an account?{" "}
            <Button asChild variant={"link"} className="text-md px-0">
              <Link to="/signup">Create one</Link>
            </Button>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
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
            <span className="mr-3">Log in</span>
            <MoveRight />
          </Button>
        </CardContent>
      </Card>
    </FullscreenPage>
  );
}

export default Login;
