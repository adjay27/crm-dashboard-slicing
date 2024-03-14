import { Button } from "@/components/ui/button";
import Image from "next/image";
import { GlobeIcon } from "@radix-ui/react-icons";

export default function HeroSection() {
  return (
    <main className="flex min-h-screen flex-row items-center justify-center">
      <div className="flex-1 flex-col items-center justify-center">
        <div className="items-center justify-items-center justify-end max-w-xl px-10 mx-auto">
          <div className="flex">
            <h1 className="text-7xl font-medium text-wrap">
              Revoluzioned Customer Relationship
            </h1>
          </div>
          <div className="mt-2">
            <h6 className="text-gray-500 ">
              Streamline Operations, Boost Efficiency, and Drive Growth
            </h6>
          </div>
          <div className="flex flex-col gap-y-5">
            <div className="mt-4 flex gap-4">
              <Button>Get Started</Button>
              <Button variant="outline" className="border-gray-700">
                Learn More
              </Button>
            </div>
            <div className="flex gap-1 align-middle">
              <p className="text-sm text-gray-500">Used and helping over more <strong className="text-black">200+ Companies </strong></p>
              <GlobeIcon className="h-4 w-4 my-auto" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 flex  justify-center">
        <Image
          src="/hero-dashboard.jpg"
          alt="hero-img"
          width={894}
          height={625}
          priority
        />
      </div>
    </main>
  );
}
