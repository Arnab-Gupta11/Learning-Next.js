import Counter from "@/components/Couter/Counter";

import Link from "next/link";
function HomePage() {
  // throw new Error();
  return (
    <div>
      <h1>Home header</h1>
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
        <Link href={"/account"}>
          <li>Account</li>
        </Link>
        <Link href={"/cart?type=electronics&price=500"}>
          <li>Cart</li>
        </Link>
      </div>
      HomePage
      <Counter />
      <h1>Home Footer</h1>
    </div>
  );
}

export default HomePage;
