import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
const PostBlogForm = ({ openBlogForm, setOpenBlogForm, blogFormData, setBlogFormData, loading, handleBlogSubmit }) => {
  return (
    <div>
      <Dialog
        open={openBlogForm}
        onOpenChange={() => {
          setOpenBlogForm(false);
          setBlogFormData({
            title: "",
            description: "",
          });
        }}
      >
        <DialogContent className=" bg-slate-200">
          <DialogHeader>
            <DialogTitle className="text-center text-2xl text-violet-950 font-bold">Add New Blog</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right font-semibold">Title</Label>
              <Input
                name="title"
                placeholder="Enter blog title"
                value={blogFormData.title}
                onChange={(event) =>
                  setBlogFormData({
                    ...blogFormData,
                    title: event.target.value,
                  })
                }
                id="title"
                className="col-span-3 focus-within:outline-none focus:border-none"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              <Label className="text-right font-semibold">Description</Label>
              <Textarea
                name="description"
                placeholder="Enter blog description"
                value={blogFormData.description}
                onChange={(event) =>
                  setBlogFormData({
                    ...blogFormData,
                    description: event.target.value,
                  })
                }
                id="description"
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button
              onClick={handleBlogSubmit}
              className="bg-gradient-to-r from-slate-600 to-violet-950 text-sm hover:bg-gradient-to-l text-white font-semibold py-2 px-6 rounded-full"
              type="button"
            >
              {loading ? "Saving..." : "Save changes"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PostBlogForm;
