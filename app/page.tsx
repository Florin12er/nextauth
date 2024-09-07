import { Button } from "@/components/ui/button";
import { Title } from "./_components/Title";
import { LoginButton } from "@/components/auth/LoginButton";
export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-purple-500 to-violet-800">
      <div className="space-y-6 text-center">
        <Title
          className="text-5xl font-bold"
          size="large"
          title="🔐Auth"
          color="white"
        />
        <p className="text-white text-lg">A simple auth app</p>
      </div>
      <div>
        <LoginButton>
          <Button variant="secondary" size="lg">
            sign in
          </Button>
        </LoginButton>
      </div>
    </main>
  );
}
