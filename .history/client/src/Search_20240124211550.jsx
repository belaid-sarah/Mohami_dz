import React from "react";

const Search = () => {
  return (
    <div className="">
      <div className=" flex flex-col">
        <h2 className=" recursive">Trouver Un Avocat</h2>

        <div className="relative">
  <div className="bg-primary p-4 relative inline-block">
    Rechercher +
  </div>
  {/* Adding a horizontal line hanging outside the parent */}
  <span className="absolute top-1/2 right-0 transform -translate-y-1/2 h-1 w-8 bg-gray-500"></span>
</div>

      </div>
    </div>
  );
};

export default Search;
