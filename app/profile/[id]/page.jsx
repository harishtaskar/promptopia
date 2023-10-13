"use client";
import Profile from "@components/Profile";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const UserProfilePage = ({ params }) => {
  const [usersPosts, setUsersPosts] = useState([]);
  const searchParams = useSearchParams();
  const userName = searchParams.get("name");

  useEffect(() => {
    const fetchUsersPosts = async () => {
      const response = await fetch(`/api/users/${params?.id}/posts`, {
        method: "GET",
      });
      const data = await response.json();
      setUsersPosts(data);
    };
    fetchUsersPosts();
  }, []);

  return (
    <Profile
      name={userName}
      data={usersPosts}
      desc={`welcome to ${userName} personized profile page`}
      handleEdit={() => {}}
      handleDelete={() => {}}
    />
  );
};

export default UserProfilePage;
