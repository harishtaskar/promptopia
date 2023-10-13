"use client";
import Profile from "@components/Profile";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const ProfilePage = () => {
  const router = useRouter();
  const [myPosts, setMyPosts] = useState([]);
  const { data: session } = useSession();

  useEffect(() => {
    const fetchMyPosts = async () => {
      const response = await fetch(`/api/users/${session?.user.id}/posts`);
      const data = await response.json();
      setMyPosts(data);
    };
    if (session?.user.id) fetchMyPosts();
  }, [session?.user.id]);

  const handleEditEvent = (post) => {
    router.push(`/update-prompt?id=${post._id}`);
  };
  const handleDelete = async (post) => {
    const hasConfirmed = confirm("Are you sure you want to delete this post?");
    if (hasConfirmed) {
      try {
        await fetch(`/api/prompt/${post._id.toString()}`, { method: "DELETE" });
        const filteredPost = myPosts.filter((p) => {
          return p._id !== post._id;
        });

        setMyPosts(filteredPost);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <Profile
      name="my"
      data={myPosts}
      desc="welcome to your personized profile page"
      handleEdit={handleEditEvent}
      handleDelete={handleDelete}
    />
  );
};

export default ProfilePage;
