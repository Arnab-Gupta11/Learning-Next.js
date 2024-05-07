import React from "react";

const PostsPage = async () => {
  const res = await fetch("http://localhost:5000/posts");
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
                <button className="btn bg-emerald-400">See more</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PostsPage;
