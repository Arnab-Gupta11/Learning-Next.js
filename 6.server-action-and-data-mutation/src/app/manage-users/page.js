import AddNewUser from "@/components/AddNewUser/AddNewUser";

const ManageUsersPage = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="flex justify-between items-center my-10">
        <h2 className="text-3xl font-semibold">Manage Users</h2>
        <AddNewUser />
      </div>
    </div>
  );
};

export default ManageUsersPage;
