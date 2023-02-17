import React from "react";
import { useRef, useState } from "react";
import useClickOutside from "./clickOutside";

export default function Filter({
  locations,
  moveInDates,
  propertyTypes,
  locat,
  setLocat,
  dat,
  setDat,
  ptype,
  setUpperPrice,
  setLowerPrice,
  setPtype,
  upperPrice,
  lowerprice,
  handleSubmit,
}) {
  const [isActivefirst, setIsActivefirst] = useState(false);
  const [isActivesec, setIsActivesec] = useState(false);
  const [isActivethird, setIsActivethird] = useState(false);

  const dpone = useRef(null);
  const dptwo = useRef(null);
  const dpthree = useRef(null);

  const handleClick = (event) => {
    event.preventDefault();
    if (event.currentTarget.id === "1") {
      setIsActivefirst((current) => !current);
    } else if (event.currentTarget.id === "2") {
      setIsActivesec((current) => !current);
    } else if (event.currentTarget.id === "3") {
      setIsActivethird((current) => !current);
    }
  };
  useClickOutside(dpone, () => {
    setIsActivefirst(false);
  });
  useClickOutside(dptwo, () => {
    setIsActivesec(false);
  });
  useClickOutside(dpthree, () => {
    setIsActivethird(false);
  });

  const handleLocation = (e, loc) => {
    e.preventDefault();
    setLocat(loc);
    setIsActivefirst(false);
  };
  const handleType = (e, type) => {
    e.preventDefault();
    setPtype(type);
    setIsActivethird(false);
  };
  const handleDate = (e, dat) => {
    e.preventDefault();
    setDat(dat);
    setIsActivesec(false);
  };
  const handleLower = (e) => {
    // if (e.target.value < 0) {
    //   toast("Please enter vailid price!");
    //   return;
    // }
    // if (e.target.value > upperPrice) {
    //   toast.error("Please enter price lower than upper price.");
    //   return;
    // }

    setLowerPrice(e.target.value);
  };
  const handleUpper = (e) => {
    setUpperPrice(e.target.value);
  };

  return (
    <>
      {" "}
      <div className="filter_cont">
        <div className="f1">
          <div className="filterheading">Location</div>
          <div className="filt_icon">
            <div className="dropdown w-dropdown">
              <div
                className="dropdowntgl w-dropdown-toggle"
                id={1}
                onClick={(e) => handleClick(e)}
              >
                <br></br>
                <div className="w-icon-dropdown-toggle">⌄</div>
                <div className="txtblock">
                  {locat}
                  <br />‍
                </div>
              </div>
              <nav
                ref={dpone}
                className={`dropdowncont w-dropdown-list ${
                  isActivefirst && "w--open"
                }`}
              >
                {locations.map((loc, index) => {
                  return (
                    <button
                      key={index}
                      className="dropitems w-button"
                      onClick={(e) => handleLocation(e, loc)}
                    >
                      {loc}
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>
        </div>
        <div className="f1">
          <div className="filterheading">When</div>
          <div className="filt_icon">
            <div data-hover="false" data-delay="0" className="w-dropdown">
              <div
                className="dropdowntgl w-dropdown-toggle"
                id={2}
                onClick={(e) => handleClick(e)}
              >
                <br></br>
                <div className="w-icon-dropdown-toggle">⌄</div>
                <div className="txtblock">
                  {dat}
                  <br />‍
                </div>
              </div>
              <nav
                className={`dropdowncont w-dropdown-list ${
                  isActivesec && "w--open"
                }`}
                ref={dptwo}
              >
                {moveInDates.map((val, id) => {
                  return (
                    <button
                      key={id}
                      className="dropitems w-button"
                      onClick={(e) => handleDate(e, val)}
                    >
                      {val}
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>
        </div>
        <div className="f1">
          <div className="filterheading">Property Type</div>
          <div className="filt_icon">
            <div className="w-dropdown">
              <div
                className="dropdowntgl w-dropdown-toggle"
                id={3}
                onClick={(e) => handleClick(e)}
              >
                <br></br>
                <div className="w-icon-dropdown-toggle">⌄</div>
                <div className="txtblock">
                  {ptype}
                  <br />‍
                </div>
              </div>
              <nav
                className={`dropdowncont w-dropdown-list ${
                  isActivethird && "w--open"
                }`}
                ref={dpthree}
              >
                {propertyTypes.map((val, index) => {
                  return (
                    <button
                      key={index}
                      className="dropitems w-button"
                      onClick={(e) => handleType(e, val)}
                    >
                      {val}
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>
        </div>

        <div className="f1">
          <div className="filterheading">Price</div>

          <div className="filt_icon">
            <div className="form-block w-form">
              <div className="formdiv">
                <input
                  className="inputprice w-input"
                  type="number"
                  maxLength="256"
                  min="0"
                  value={lowerprice}
                  onChange={handleLower}
                />
                <div className="text-block">-</div>
                <input
                  className="inputprice w-input"
                  type="number"
                  value={upperPrice}
                  onChange={handleUpper}
                />
                <div className="dollar">$</div>
              </div>
            </div>
          </div>
        </div>
        <div className="f1">
          <button className="btn w-button" onClick={(e) => handleSubmit(e)}>
            Search
          </button>
        </div>
      </div>
    </>
  );
}
