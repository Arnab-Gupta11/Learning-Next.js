"use client";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { UserContext } from "@/context/UserProbider";
import { userFormControls, userFormInitialState } from "@/utils/userFormControl.utils";
import { useContext } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { addNewUserActions, editUserAction } from "@/actions";

const FormDialog = () => {
  const { openDialog, setOpenDialog, userFormData, setUserFormData, loading, setLoading, currentUserId, setCurrentUserId } = useContext(UserContext);
  const handleUserAction = async () => {
    try {
      setLoading(true);
      const res = currentUserId
        ? await editUserAction(currentUserId, userFormData, "/mange-users")
        : await addNewUserActions(userFormData, "/manage-users");
      console.log(res);
      setOpenDialog(false);
      setUserFormData(userFormInitialState);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <Dialog
        open={openDialog}
        onOpenChange={() => {
          setOpenDialog(false);
          setUserFormData(userFormInitialState);
          setCurrentUserId(null);
        }}
      >
        <DialogContent className="bg-slate-200 ">
          <DialogTitle className="mb-5 text-2xl font-bold">{currentUserId ? "Edit User Info" : "Add New User"}</DialogTitle>

          <DialogDescription>
            <form action={handleUserAction}>
              {userFormControls?.map((formControl) => {
                return (
                  <div className="mb-5 font-semibold" key={formControl.name}>
                    <Label>{formControl.label}</Label>
                    <Input
                      className="bg-gray-200 text-gray-600"
                      name={formControl.name}
                      type={formControl.type}
                      placeholder={formControl.placeholder}
                      value={userFormData[formControl.name]}
                      onChange={(e) => {
                        setUserFormData({
                          ...userFormData,
                          [formControl.name]: e.target.value,
                        });
                      }}
                    />
                  </div>
                );
              })}
              {currentUserId ? (
                <Button className="bg-indigo-950 rounded-[5px] px-5 py-2 text-white hover:bg-indigo-900">
                  {loading ? "Changing user Info..." : "Change user Info"}
                </Button>
              ) : (
                <Button className="bg-indigo-950 rounded-[5px] px-5 py-2 text-white hover:bg-indigo-900">
                  {loading ? "Saving user..." : "Save user"}
                </Button>
              )}
            </form>
          </DialogDescription>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default FormDialog;
