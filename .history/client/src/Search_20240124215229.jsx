import React from "react";
import SearchContainer from "./components/SearchContainer";

const Search = () => {
  return (
    <div className="flex  w-full">
      <div className=" flex flex-col mx-6 w-[90%]">
        <h2 className=" recursive">Trouver Un Avocat</h2>

        {/* <div className="bg-primary p-4 relative inline-block">
            Rechercher +
          </div> */}
        <div className="flex w-[90%] justify-center">
          {" "}
          <SearchContainer />
        </div>
      </div>
    </div>
  );
};

export default Search;
