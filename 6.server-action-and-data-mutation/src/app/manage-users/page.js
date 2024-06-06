import { fetchAllUsers } from "@/actions";
import AddNewUser from "@/components/AddNewUser/AddNewUser";
import UserCard from "@/components/user-card/UserCard";

const ManageUsersPage = async () => {
  const users = await fetchAllUsers();
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="flex justify-between items-center my-10">
        <h2 className="text-3xl font-semibold">Manage Users</h2>
        <AddNewUser />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-5 lg:mx-0 my-10">
        {users?.data?.map((user) => (
          <UserCard key={user._id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default ManageUsersPage;
