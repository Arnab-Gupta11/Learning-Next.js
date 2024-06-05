"use client";
import { userFormInitialState } from "@/utils/userFormControl.utils";
import { createContext, useState } from "react";

export const UserContext = createContext(null);
const UserProbider = ({ children }) => {
  const [loading, setloading] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [userFormData, setUserFormData] = useState(userFormInitialState);
  const [cusrrentUserId, setCurrentUserId] = useState(null);

  const userManageInfo = { loading, setloading, openDialog, setOpenDialog, userFormData, setUserFormData, cusrrentUserId, setCurrentUserId };
  return <UserContext.Provider value={userManageInfo}>{children}</UserContext.Provider>;
};

export default UserProbider;
