import Image from "next/image";

export default function SocialProof() {
  return (
    <main className="flex min-h-60 flex-row items-center justify-center top-0">
      <div className="flex-1 flex-col items-center  justify-center gap-y-5">
        <div className="max-w-xl mx-auto">
          <h2 className="text-5xl font-medium">Trusted by Many Established Companies</h2>
          <p className="text-gray-500 text-left max-w-sm">
            20+ Businesses and Companies uses Converge for theirs CRM Platform
          </p>
        </div>
      </div>
      <div className="flex-1 flex">
        <Image src="/social-proof.png" alt="social-proof" width={578} height={128} />
      </div>
    </main>
  );
}
