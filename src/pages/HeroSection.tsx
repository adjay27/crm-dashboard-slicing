import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HeroSection() {
    return (
        <main className="flex min-h-screen flex-row items-center justify-center">
            <div className="flex-1 flex-col items-center justify-center ">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Hero TXT</h1>
                </div>
                <div className="text-center">
                    <p>hero desc</p>
                </div>
                <div className="text-center">
                    <Button>Get Started</Button>
                </div>
            </div>
            <div className="flex-1 flex  justify-center">
                <Image src="/hero-dashboard.jpg" alt="hero-img" width={894} height={625} priority />
            </div>
        </main>
    )
}