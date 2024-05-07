import Counter from "@/components/Couter/Counter";

import Link from "next/link";
function HomePage() {
  // throw new Error();
  return (
    <div>
      <div className="flex gap-5 mx-10 list-none my-5">
        <Link href={"/about"}>
          <li>About</li>
        </Link>
        <Link href={"/contact"}>
          <li>Contact</li>
        </Link>
        <Link href={"/news"}>
          <li>News</li>
        </Link>
      </div>
      HomePage
      <Counter />
    </div>
  );
}

export default HomePage;
