"use client";
import React, { useEffect, useState } from "react";
import styles from "./Users.module.css";
import useSWR from "swr";
const fetcher = (...args) => fetch(...args).then((res) => res.json());
const Users = () => {
  // const [users, setUsers] = useState([]);
  // const fetchUser = async () => {
  //   const res = await fetch("https://jsonplaceholder.typicode.com/users");
  //   const data = await res.json();
  //   setUsers(data);
  // };
  // useEffect(() => {
  //   fetchUser();
  // }, []);

  const { data, error, isLoading } = useSWR("https://jsonplaceholder.typicode.com/users", fetcher);
  // console.log("🚀 ~ Users ~ data:", data);
  if (error) {
    console.log(error);
  }

  return (
    <>
      {isLoading ? (
        <h1>Loading....</h1>
      ) : (
        <div className="max-w-lg mx-auto">
          <h2 className={styles.header_text}>Total Users: {data.length}</h2>
          {data?.map((user) => {
            return (
              <div key={user.id} className="card w-full bg-emerald-200 shadow-xl mx-auto mt-5">
                <div className="card-body">
                  <h2 className="card-title">{user.name}</h2>
                  <p>Email: {user.email}</p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Users;
