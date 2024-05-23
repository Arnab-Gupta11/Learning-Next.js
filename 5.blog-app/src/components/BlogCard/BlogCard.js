import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "../ui/button";
const BlogCard = ({ blog }) => {
  //   console.log(blog.title);
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
          <Button className="text-green-700 bg-slate-50 hover:bg-slate-100 hover:scale-105">
            <FaRegEdit size={25} />
          </Button>
          <Button className="text-red-700 bg-slate-50 hover:bg-slate-100 hover:scale-105">
            <MdDeleteOutline size={25} />
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default BlogCard;
