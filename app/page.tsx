import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white px-6">

      <p className="absolute top-6 text-sm text-gray-500">
        +JMJ+
      </p>

      <h1 className="text-6xl font-bold text-[#800000] mb-4">
        Communites
      </h1>

      <p className="text-gray-300 text-lg mb-8 text-center">
        Benedicitne College Class of 2029
      </p>

      <Link
        href="/map"
        className="bg-[#800000] hover:bg-[#660000] transition-all duration-200 px-6 py-3 rounded-xl font-semibold"
      >
        Enter
      </Link>

    </main>
  );
}
