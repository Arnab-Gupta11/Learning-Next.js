"use client";
import { userFormInitialState } from "@/utils/userFormControl.utils";
import { createContext, useState } from "react";

export const UserContext = createContext(null);
const UserProbider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [userFormData, setUserFormData] = useState(userFormInitialState);
  const [currentUserId, setCurrentUserId] = useState(null);

  const userManageInfo = { loading, setLoading, openDialog, setOpenDialog, userFormData, setUserFormData, currentUserId, setCurrentUserId };
  return <UserContext.Provider value={userManageInfo}>{children}</UserContext.Provider>;
};

export default UserProbider;
