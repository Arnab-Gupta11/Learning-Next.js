"use client";
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
          <Button className="bg-red-600 rounded-[5px] px-5 py-2 text-white hover:bg-red-500">Delete</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default UserCard;
