import { Icon } from "@iconify/react";
import React, { useState } from "react";
import "../../Styles/CountryDropdown.css";

const countries = ["Nigeria"];

export default function CountryDropdown() {
  const [selectedCountry, setSelectedCountry] = useState("");

  return (
    <form action="" className="select-country ">
      <select
        value={selectedCountry}
        onChange={(e) => setSelectedCountry(e.target.value)}
        className=" rounded-md border-2 border-[#C5D8EA] bg-white p-3 outline-none w-full"
      >
        <option value="" disabled>
          Select a country
        </option>
        {countries.map((country) => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}

        <Icon icon="ic:baseline-arrow-drop-down" />
      </select>
    </form>
  );
}
