import React from "react";

export default function Search({ searchQuery, setSearchQuery }) {
  return (
    <div className="search_cont">
      <h1 className="heding">Search Properties to rent</h1>
      <div>
        <input
          type="text"
          className="search_input w-input"
          name="search"
          data-name="search"
          placeholder="Search by name or location"
          id="search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
    </div>
  );
}
