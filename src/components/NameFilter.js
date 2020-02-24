import React from "react";

export default function NameFilter({ value = "", onChange = () => {} }) {
  return (
    <div className="name-filter">
      <input
        className="name-filter-text"
        type="text"
        value={value}
        onChange={e => {
          onChange(e.target.value);
        }}
      />
      <input className="name-filter-button" type="button" value="Search" />
    </div>
  );
}
