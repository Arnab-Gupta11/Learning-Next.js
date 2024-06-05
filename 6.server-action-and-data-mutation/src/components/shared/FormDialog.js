"use client";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { UserContext } from "@/context/UserProbider";
import { userFormControls, userFormInitialState } from "@/utils/userFormControl.utils";
import { useContext } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import SaveUser from "../save-user/SaveUser";

const FormDialog = () => {
  const { openDialog, setOpenDialog, userFormData, setUserFormData } = useContext(UserContext);
  return (
    <div>
      <Dialog
        open={openDialog}
        onOpenChange={() => {
          setOpenDialog(false);
          setUserFormData(userFormInitialState);
        }}
      >
        <DialogContent className="bg-slate-200 ">
          <DialogTitle className="mb-5 text-2xl font-bold">Add New User</DialogTitle>

          <DialogDescription>
            <form>
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
              <SaveUser />
            </form>
          </DialogDescription>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default FormDialog;
