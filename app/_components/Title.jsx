import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export const Title = ({ title }) => (
  <h1
    className={cn(
      "text-6xl font-semibold text-white drop-shadow-md",
      poppins.className,
    )}
  >
    {title}
  </h1>
);
