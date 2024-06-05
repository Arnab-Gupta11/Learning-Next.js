"use client";
import { useContext } from "react";
import { Button } from "../ui/button";
import { UserContext } from "@/context/UserProbider";
import FormDialog from "../shared/FormDialog";

const AddNewUser = () => {
  const { setOpenDialog } = useContext(UserContext);

  return (
    <div>
      <Button onClick={() => setOpenDialog(true)} className="bg-indigo-950 rounded-[5px] px-5 py-2 text-white hover:bg-indigo-900">
        Add User
      </Button>
      <FormDialog />
    </div>
  );
};

export default AddNewUser;
