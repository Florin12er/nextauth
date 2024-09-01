import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { CardWrapper } from "./CardWrapper";

export const LoginForm = () => {
  return (
    <CardWrapper
      headerLabel="Welcome back"
      backButtonLabel="Don't have an account?"
      backButtonHref="/auth/register"
      showSocial
    >
      <form className="flex flex-col gap-4">
        <div>
          <Label>Email</Label>
          <Input placeholder="type your email" type="email" required />
        </div>
        <div>
          <Label>Password</Label>
          <Input placeholder="type your password" type="password" required />
        </div>
        <Button type="submit">Login</Button>
      </form>
    </CardWrapper>
  );
};
