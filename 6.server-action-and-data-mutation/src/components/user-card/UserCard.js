"use client";
import { deleteUserAction } from "@/actions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { UserContext } from "@/context/UserProbider";
import { useContext } from "react";
const UserCard = ({ user }) => {
  const { setOpenDialog, setUserFormData, setCurrentUserId } = useContext(UserContext);
  const handleEdit = () => {
    setOpenDialog(true);
    setUserFormData({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      address: user.address,
    });
    setCurrentUserId(user._id);
  };
  const handleDelete = async () => {
    const res = await deleteUserAction(user._id, "/manage-users");
    console.log(res);
  };
  return (
    <div>
      <Card className="bg-slate-200">
        <CardHeader>
          <CardTitle>
            {user.firstName} {user.lastName}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p>{user.email}</p>
          <p>{user.address}</p>
        </CardContent>
        <CardFooter>
          <Button onClick={handleEdit} className="bg-indigo-950 rounded-[5px] px-5 py-2 text-white hover:bg-indigo-900 mr-5">
            Edit
          </Button>
          <Button onClick={handleDelete} className="bg-red-600 rounded-[5px] px-5 py-2 text-white hover:bg-red-500">
            Delete
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default UserCard;
