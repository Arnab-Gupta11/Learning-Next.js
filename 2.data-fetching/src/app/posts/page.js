import Link from "next/link";
import React from "react";

const PostsPage = async () => {
  const res = await fetch("http://localhost:5000/posts", {
    // cache: "force-cache", //"force-cache" means create the html file in build time. By default its set to force-cache.
    /* 
    //Revalidation is the process of purging the Data Cache and re-fetching the latest data.utomatically revalidate data after a certain amount of time has passed. In this code after 5sec.It is for production.If I not use this it will not change fetching data without build.(SSG- static site generation)
    next: {
          revalidate: 5,
     },
     */

    cache: "no-store", //server site rendering When user request for a route or make change in data.It make the html content in server and send it for rendering. It will not make the html for content in build time.
  });
  const posts = await res.json();
  console.log(posts.length);
  return (
    <div className="max-w-lg mx-auto">
      <h2 className="text-3xl font-bold my-10 text-center">Total Posts: {posts.length}</h2>
      {posts.map((post) => {
        return (
          <div key={post.id} className="card w-full bg-blue-100 shadow-xl mx-auto mt-5">
            <div className="card-body">
              <h2 className="card-title">{post.title}</h2>
              <p>{post.description}</p>
              <p>Likes: {post.likes_count}</p>
              <div className="card-actions justify-end">
                <Link href={`/posts/${post.id}`}>
                  <button className="btn bg-emerald-400">See more</button>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PostsPage;
