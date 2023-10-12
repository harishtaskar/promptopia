"use client";
import React, { useState } from "react";

const PromptCardList = ({ data, handleTagClick }) => {
  return <div className="mt-16 prompt_layout"></div>;
};

const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for tag or user"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input"
        />
      </form>
      <PromptCardList data={[]} handleTagClick={() => {}} />
    </section>
  );
};

export default Feed;
