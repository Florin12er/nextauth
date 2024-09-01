import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});
interface TitleProps {
  title: string;
  className?: string;
}

export const Title = ({ title, className }: TitleProps) => (
  <h1 className={cn(className, poppins.className)}>{title}</h1>
);
