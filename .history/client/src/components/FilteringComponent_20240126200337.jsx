import React, { useState } from "react";
import { Select, MenuItem } from "@mui/material";
import filter from "../assets/icons/filter.svg";

const FilteringComponent = ({ onFilter }) => {
  const [filters, setFilters] = useState({
    filterBy: "Filtrer par",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFilters({ ...filters, [name]: value });
    onFilter({ ...filters, [name]: value });
  };

  return (
    <div className="flex space-x-2 items-center">
      <div className="flex items-center bg-primary ">
        <Select
          name="filterBy"
          value={filters.filterBy}
          onChange={handleChange}
          placeholder="Filtrer"
          variant="standard"
          className="outline-none px-2"
        >
          <MenuItem value="Localisation">Localisation</MenuItem>
          <MenuItem value="Spécialité">Spécialité</MenuItem>
          <MenuItem value="Langue">Langue</MenuItem>
        </Select>
        <img src={filter} alt="filter icon" className="w-6 h-6 mr-2" />
      </div>
    </div>
  );
};

export default FilteringComponent;
