"use client";
import Profile from "@components/Profile";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";

const ProfilePage = () => {
  const [myPosts, setMyPosts] = useState([]);
  const { data: session } = useSession();
  const handleEdit = () => {};
  const handleDelete = () => {};

  useEffect(() => {
    const fetchMyPosts = async () => {
      const response = await fetch(`/api/users/${session?.user.id}/posts`);
      const data = await response.json();
      setMyPosts(data);
    };
    if (session?.user.id) fetchMyPosts();
  }, []);

  return (
    <Profile
      name="my"
      data={myPosts}
      desc="welcome to your personized profile page"
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};

export default ProfilePage;
