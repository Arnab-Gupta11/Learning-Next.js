import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="min-h-screen flex justify-center items-center">
        <div className="flex flex-col items-center">
          <h1 className="text-5xl font-bold mb-5">Manage Your Users In a better way.🙂</h1>
          <Button className="bg-indigo-950 rounded-[5px] px-5 py-2 text-white hover:bg-indigo-900">
            <Link href={"/manage-users"}>Manage Users</Link>
          </Button>
        </div>
      </div>
    </>
  );
}
