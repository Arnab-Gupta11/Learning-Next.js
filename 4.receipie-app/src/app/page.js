import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full">
      <h1 className="text-4xl font-bold pl-1 mt-10 mb-8 mx-3 lg:mx-0 text-center">Find Your Favourite Recipe 😋</h1>
      <div className="flex justify-center">
        <Link href={"/recipe-list"}>
          <span className="text-lg bg-black text-white px-4 py-2 rounded-md font-medium">Recipes</span>
        </Link>
      </div>
    </div>
  );
}
