"use server";

import connectToDb from "@/db";
import User from "@/models/users.model";
import { revalidatePath } from "next/cache";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";

//Add new user actions
export const addNewUserActions = async (formData, pathToRevelidate) => {
  await connectToDb();
  try {
    const newUser = await User.create(formData);
    if (newUser) {
      revalidatePath(pathToRevelidate);
      return {
        success: true,
        message: "User added successfully",
      };
    } else {
      return {
        success: false,
        message: "Some error occured! Please try again",
      };
    }
  } catch (error) {
    return {
      success: false,
      message: ErrorBoundary.message,
    };
  }
};

//get all users
export const fetchAllUsers = async () => {
  try {
    await connectToDb();

    const allUsers = await User.find({});
    if (allUsers) {
      // revalidatePath(pathToRevelidate);
      return {
        success: true,
        message: "User added successfully",
        data: JSON.parse(JSON.stringify(allUsers)),
      };
    } else {
      return {
        success: false,
        message: "Some error occured! Please try again",
      };
    }
  } catch (error) {
    return {
      success: false,
      message: ErrorBoundary.message,
    };
  }
};

//edit a user action
export async function editUserAction(currentUserID, formData, pathToRevalidate) {
  await connectToDb();

  try {
    const { firstName, lastName, email, address } = formData;

    const updatedUser = await User.findOneAndUpdate(
      {
        _id: currentUserID,
      },
      { firstName, email, lastName, address },
      { new: true }
    );
    if (updatedUser) {
      revalidatePath(pathToRevalidate);
      return {
        success: true,
        message: "User updated successfully",
      };
    } else {
      return {
        success: false,
        message: "Not able to update the user! Please try again",
      };
    }
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "Some error occured! Please try again",
    };
  }
}
