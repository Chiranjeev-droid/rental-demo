import React, { useEffect, useState } from "react";
import data from "../data";
import "../index.css";
import Card from "./Card";
import Filter from "./Filter";
import Search from "./Search";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Home() {
  const [locat, setLocat] = useState(data.locations[0]);
  const [dat, setDat] = useState(data.moveInDates[0]);
  const [ptype, setPtype] = useState(data.propertyTypes[0]);
  const [priceMin, setPriceMin] = useState(0);
  const priceArr = data.properties.map((item) => {
    return item.price;
  });
  const [priceMax, setPriceMax] = useState(Math.max(...priceArr));
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [searchResults, setSearchResults] = useState(data.properties);
  const handleSubmit = (e) => {
    e.preventDefault();
    const results = searchResults.filter((property) => {
      const withinPriceRange =
        property.price >= priceMin && property.price <= priceMax;
      const matchesLocation = property.location === locat;
      const matchesDate = property.availability.some((available) => {
        const start = new Date(available.start);
        const end = new Date(available.end);
        const searchDate = new Date(dat);
        return searchDate >= start && searchDate <= end;
      });
      const matchesPropertyType = property.type === ptype;
      return (
        withinPriceRange &&
        matchesLocation &&
        matchesDate &&
        matchesPropertyType
      );
    });
    console.log(results);
    results.length === 0 &&
      toast.error("No results found for applied filters", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

    setFilteredProperties(results);
  };
  useEffect(() => {
    const filtered = data.properties.filter((property) => {
      const query = searchQuery.toLowerCase();
      return (
        property.name.toLowerCase().includes(query) ||
        property.location.toLowerCase().includes(query)
      );
    });

    setFilteredProperties(filtered);
  }, [searchQuery]);

  return (
    <>
      <div className="cont">
        <ToastContainer />
        <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <Filter
          locations={data.locations}
          locat={locat}
          setLocat={setLocat}
          upperPrice={priceMax}
          lowerprice={priceMin}
          ptype={ptype}
          dat={dat}
          handleSubmit={handleSubmit}
          setUpperPrice={setPriceMax}
          setLowerPrice={setPriceMin}
          setDat={setDat}
          setPtype={setPtype}
          moveInDates={data.moveInDates}
          propertyTypes={data.propertyTypes}
        ></Filter>
        <div className="cards_cont">
          {filteredProperties.length === 0
            ? data.properties.map((card) => (
                <Card
                  key={card.id}
                  id={card.id}
                  location={card.location}
                  price={card.price}
                  beds={card.beds}
                  bathrooms={card.bathrooms}
                  area={card.area}
                  name={card.name}
                  type={card.type}
                  availability={card.availability}
                  imgUrl={card.imgUrl}
                />
              ))
            : filteredProperties.map((card) => (
                <Card
                  key={card.id}
                  id={card.id}
                  location={card.location}
                  price={card.price}
                  beds={card.beds}
                  bathrooms={card.bathrooms}
                  area={card.area}
                  name={card.name}
                  type={card.type}
                  availability={card.availability}
                  imgUrl={card.imgUrl}
                />
              ))}
        </div>
      </div>
    </>
  );
}
