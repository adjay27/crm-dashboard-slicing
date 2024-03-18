import Image from "next/image";
import LearnMore from "@/components/LearnMore-btn";

export default function Feature() {
  return (
    <main className="flex min-h-screen flex-col gap-8 items-center justify-center">
      <div className="flex h-[400px] flex-row items-center justify-center">
        <div className="flex-1 flex justify-items-center">
          <Image
            src="/feature-1.png"
            alt="feature-1"
            width={624}
            height={358}
          />
        </div>
        <div className=" flex-1 flex-col items-center  justify-center gap-y-5">
          <div className="max-w-xl ml-8 p-8 my-2">
            <h2 className="text-4xl font-medium">
              Effortless Customer Relationship Management
            </h2>
            <p className="text-gray-500 text-left max-w-lg my-2">
              Seamlessly organize, track, and access all customer information,
              interactions, and relationships in one user-friendly platform.
            </p>
            <LearnMore />
          </div>
        </div>
      </div>

      <div className="flex h-[400px] flex-row items-center justify-center">
        <div className="flex-1 flex-col items-center  justify-center gap-y-5">
          <div className="max-w-xl mx-auto p-8 my-2">
            <h2 className="text-4xl font-medium">
              Dynamic Email Integration Excellence
            </h2>
            <p className="text-gray-500 text-left max-w-lg my-2">
              Simplify your workflow with seamless email integration. Send,
              track, schedule follow-ups and insightful interactions for
              business expansion.
            </p>
            <LearnMore />
          </div>
        </div>
        <div className="flex-1 flex justify-items-center">
          <Image
            src="/feature-2.png"
            alt="feature-2"
            width={624}
            height={358}
          />
        </div>
      </div>

      <div className="flex h-[400px] flex-row items-center justify-center">
        <div className="flex-1 flex justify-items-center">
          <Image
            src="/feature-3.png"
            alt="feature-3"
            width={624}
            height={358}
          />
        </div>
        <div className=" flex-1 flex-col items-center  justify-center gap-y-5">
          <div className="max-w-xl ml-8 p-8 my-2">
            <h2 className="text-4xl font-medium">
            Enhanced Team Collaboration
            </h2>
            <p className="text-gray-500 text-left max-w-lg my-2">
            Foster teamwork and seamless collaboration with our CRM-integrated hub for task assignment.
            </p>
            <LearnMore />
          </div>
        </div>
      </div>

      <div className="flex h-[400px] flex-row items-center justify-center">
        <div className="flex-1 flex-col items-center  justify-center gap-y-5">
          <div className="max-w-xl mx-auto p-8 my-2">
            <h2 className="text-4xl font-medium">
              Dynamic Email Integration Excellence
            </h2>
            <p className="text-gray-500 text-left max-w-lg my-2">
              Simplify your workflow with seamless email integration. Send,
              track, schedule follow-ups and insightful interactions for
              business expansion.
            </p>
            <LearnMore />
          </div>
        </div>
        <div className="flex-1 flex justify-items-center">
          <Image
            src="/feature-4.png"
            alt="feature-4"
            width={624}
            height={358}
          />
        </div>
      </div>
    </main>
  );
}
