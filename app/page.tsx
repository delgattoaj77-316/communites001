import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center bg-black text-gray-200">

      {/* +JMJ+ Top Center */}
      <div className="absolute top-4 text-sm tracking-widest text-gray-400">
        +JMJ+
      </div>

      {/* Future Logo Placeholder */}
      <div className="mb-8 flex items-center justify-center">
        <div className="h-24 w-24 rounded-full border-2 border-[#800000] flex items-center justify-center text-gray-500">
          LOGO
        </div>
      </div>

      {/* Main Title */}
      <h1 className="text-7xl font-extrabold tracking-tight text-[#800000] mb-4">
        Communites
      </h1>

      {/* Subtitle */}
      <p className="text-xl text-gray-400 mb-10">
        Your people. Your map.
      </p>

      {/* Big Button */}
      <Link href="/map">
  <button className="...">
    Enter
  </button>
</Link>

    </main>
  );
}