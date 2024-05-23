import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import DeleteBlog from "./DeleteBlog";
import UpdateBlog from "./UpdateBlog";
const BlogCard = ({ blog }) => {
  return (
    <div>
      <Card className="bg-slate-200">
        <CardHeader>
          <CardTitle>{blog?.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>{blog?.description}</CardDescription>
        </CardContent>
        <CardFooter className="flex justify-end gap-3">
          <UpdateBlog blog={blog} />
          <DeleteBlog blogId={blog._id} />
        </CardFooter>
      </Card>
    </div>
  );
};

export default BlogCard;
