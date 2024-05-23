export const getAllBlogs = async () => {
  const res = await fetch("http://localhost:3000/api/get-blogs", {
    cache: "no-store",
  });
  const data = await res.json();
  return data.data;
};
