import Link from "next/link";
import React from "react";

export async function generateStaticParams() {
  const res = await fetch("http://localhost:5000/posts");
  const posts = await res.json();
  const ids = posts.map((post) => {
    return {
      id: post.id,
    };
  });
  // console.log(ids);
  return ids;
}

const DetailsPage = async ({ params }) => {
  //In dynamic route SSR(server side rendering) used while fetching data.So, no need to add option.
  const res = await fetch(`http://localhost:5000/posts/${params.id}`);
  const post = await res.json();
  return (
    <div key={post.id} className="card max-w-lg bg-blue-100 shadow-xl mx-auto mt-5">
      <div className="card-body">
        <h2 className="card-title">{post.title}</h2>
        <p>{post.description}</p>
        <p>Likes: {post.likes_count}</p>
        <div className="card-actions justify-end">
          <Link href={`/posts`}>
            <button className="btn bg-emerald-400">Back</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
