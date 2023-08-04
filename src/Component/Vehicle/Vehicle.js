import React, { useContext, useEffect, useState } from "react";
import { FaChevronDown, FaDog, FaTimes } from "react-icons/fa";
import carIcon from "./img/car.png";
import { BsChevronDown, BsCurrencyDollar, BsFillBagFill } from "react-icons/bs";
import { MdAirlineSeatReclineNormal } from "react-icons/md";
import { Link } from "react-router-dom";
import { AiOutlineLeft } from "react-icons/ai";
import DataContext from "../../Context/BookingDataContex";
import perosnImg from "./img/person.png";
import childIm from "./img/child.png";
import bagImg from "./img/bag.png"
import luggegeImg from "./img/luggage.png"

function Vehicle() {
  const { setCategory } = useContext(DataContext);

  //bottom input
  const [showDropdown1, setShowDropdown1] = useState(false);

  const handleDropdownClick1 = () => {
    setShowDropdown1(prevState => !prevState);
  };
  const [showDropdown2, setShowDropdown2] = useState(false);

  const handleDropdownClick2 = () => {
    setShowDropdown2(prevState => !prevState);
  };

  const [isOpen3, setIsOpen3] = useState(false);
  const [AdultOption, setAdultOption] = useState("");
  const [smallChild, setSmallChild] = useState("");
  const [BigChild, setBigChild] = useState("");

  const handleAdultChange = event => {
    setAdultOption(event.target.value);
  };

  const handleSmallChildChange = event => {
    setSmallChild(event.target.value);
  };
  const handleBigChildChange = event => {
    setBigChild(event.target.value);
  };

  ///handel  bage
  const [bag, setBag] = useState("");
  const [laggege, setLagge] = useState("");

  const handleBagChange = event => {
    setBag(event.target.value);
  };

  const handleLaggeChange = event => {
    setLagge(event.target.value);
  };

  const handleToggle3 = () => {
    setIsOpen3(!isOpen3);
  };

  const handleClose3 = () => {
    setIsOpen3(false);
  };

  ///defoult car
  const [isloading, setIsloading] = useState(false);

  const [places, setPlaces] = useState([]);
  useEffect(() => {
    setIsloading(true);
    fetch(`${process.env.REACT_APP_API_URL}/car`)
      .then(res => res.json())
      .then(data => {
        setPlaces(data);
        setIsloading(false);
      });
  }, []);

  const defaultitem = places[0];
  const [currentItem, setCurrentItem] = useState(null);

  const handlePlaceSelect = place => {
    setCurrentItem(place);
  };

  useEffect(() => {
    setCategory(currentItem ? currentItem : defaultitem);
  }, [currentItem, defaultitem]);

  if (isloading) {
    return (
      <div className="flex justify-center items-center" role="status">
        <svg
          aria-hidden="true"
          class="inline text-center w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-green-500"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
      </div>
    );
  }

  return (
    <div>
      {/*  title*/}
      <div className="my-7">
        <h1 className="text-md capitalize  text-black  ">Select Car</h1>
        <span className="bg-orange-700  mt-3 w-14 h-[2px] block"></span>
      </div>

      <div className="flex justify-between flex-col lg:flex-row items-center">
        <div className="relative w-full ">
          <div className="border  flex items-center justify-center flex-row p-2 mb-2 ">
            <div className=" w-full flex justify-between items-center border-black">
              <div className="flex items-center justify-center">
                <span>
                  <img src={perosnImg} />
                </span>
                {AdultOption ? AdultOption : defaultitem?.seat}
              </div>

              {smallChild && (
                <div className="flex items-center text-black justify-center">
                  <span>
                    <img src={childIm} />
                  </span>
                  {smallChild}
                </div>
              )}
              {BigChild && (
                <div className="flex items-center text-black justify-center">
                  <span>
                    <img src={childIm} />
                  </span>
                  {BigChild}
                </div>
              )}
            </div>
            <div>
              <span
                className="text-black  font-black  cursor-pointer "
                onClick={handleDropdownClick1}
              >
                <BsChevronDown></BsChevronDown>
              </span>
            </div>
          </div>

          {showDropdown1 && (
            <div className="absolute top-0 left-0 mt-12 z-50 w-full border bg-white">
              <div className="p-3 ">
                <h1 className="text-black ">Passengers</h1>
                <div className="flex  justify-center  mt-3  items-center">
                  <div className="w-1/2 flex items-center ">
                    <span className="w-[40px] h-[40px]">
                      <img
                        className="w-full object-cover h-full"
                        src={perosnImg}
                      />
                    </span>
                    <label
                      for="countries"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    ></label>
                    <select
                      value={AdultOption}
                      onChange={handleAdultChange}
                      id="countries"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg     block w-full p-2.5     dark:focus:border-blue-500"
                    >
                      <option selected> {defaultitem?.seat}</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="0">9</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                      <option value="13">13</option>
                      <option value="14">14</option>
                      <option value="15">15</option>
                      <option value="16">16</option>
                      <option value="17">17</option>
                    </select>
                  </div>
                  <p className="text-black w-1/2     p-2"> Adults</p>
                </div>

                <div className="flex  justify-center  my-4 items-center">
                  <div className="w-1/2 flex justify-center   items-center ">
                    <span className="w-[40px] h-[40px]">
                      <img
                        className="w-full object-cover h-full"
                        src={childIm}
                      />
                    </span>
                    <label
                      for="countries"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    ></label>
                    <select
                      value={smallChild}
                      onChange={handleSmallChildChange}
                      id="countries"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg     block w-full p-2.5     dark:focus:border-blue-500"
                    >
                      <option selected>0</option>

                      <option value="1">1</option>
                      <option value="2">2</option>
                    </select>
                  </div>

                  <p className="text-black w-1/2 p-2">3-6 years (15-25kg)</p>
                </div>

                <div className="flex  justify-center  items-center">
                  <div className="w-1/2 flex justify-center  items-center">
                    <span className="w-[40px] h-[40px]">
                      <img
                        className="w-full object-cover h-full"
                        src={childIm}
                      />
                    </span>
                    <label
                      for="countries"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    ></label>
                    <select
                      value={BigChild}
                      onChange={handleBigChildChange}
                      id="countries"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg     block w-full p-2.5     dark:focus:border-blue-500"
                    >
                      <option selected>0</option>

                      <option value="1">1</option>
                      <option value="2">2</option>
                    </select>
                  </div>

                  <p className="text-black  w-1/2 p-2">6-12 years (22-36kg)</p>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="relative w-full">
          <div className="border  flex items-center justify-center flex-row p-2 mb-2 ">
            <div className=" flex justify-flex justify-between  items-center w-full">
              <div className="flex items-center text-black justify-center">
                <span>
                  <img src={bagImg} />
                </span>
                 {defaultitem?.bag}
              </div>
              <div className="flex items-center text-black justify-center">
                <span>
                  <img src={luggegeImg} />
                </span>
                {laggege ? laggege : defaultitem?.luggages}
              </div>
            </div>
            <div>
              <span
                className=" cursor-pointer text-black "
                onClick={handleDropdownClick2}
              >
                <BsChevronDown></BsChevronDown>
              </span>
            </div>
          </div>

          {showDropdown2 && (
            <div className="absolute top-0 left-0 mt-12 z-50 w-full border bg-white">
              <div className="p-3 ">
                <h1 className="text-black "> </h1>
                <div className="flex  justify-center   items-center">
                  <div className="w-1/2">
                    <label
                      for="countries"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    ></label>
                    <select
                      onChange={handleBagChange}
                      value={bag}
                      id="countries"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg     block w-full p-2.5     dark:focus:border-blue-500"
                    >
                      <option selected>bag</option>
                      <option value="0">0</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                  </div>
                  <p className="text-black w-1/2 p-2"> Bags</p>
                </div>

                <div className="flex  justify-center  items-center">
                  <div className="w-1/2">
                    <label
                      for="countries"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    ></label>
                    <select
                      value={laggege}
                      onChange={handleLaggeChange}
                      id="countries"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg     block w-full p-2.5     dark:focus:border-blue-500"
                    >
                      <option selected>luggage</option>
                      <option value="">0</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>
                  </div>

                  <p className="text-black w-1/2 p-2">luggage</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/*  bootom  input  */}
      <div className="relative w-full my-4">
        <button
          className="bg-gray-100 w-full text-black  font-semibold py-2 px-4 rounded justify-between  inline-flex items-center"
          onClick={handleToggle3}
        >
          {currentItem ? (
            <div className="">
              <div className="flex justify-start items-center ">
                <h1 className="text-center  flex justify-start items-center   text-black  text-md capitalize">
                  <span className="w-[20px] h-[20px] mr-1">
                    <img
                      className="w-full h-full object-contain  "
                      src={carIcon}
                    />
                  </span>{" "}
                  {currentItem && currentItem.carName}
                </h1>
                <div className="flex  justify-center items-center px-7">
                  <p className="mr-10 flex items-center">
                    {" "}
                    <span>
                      <MdAirlineSeatReclineNormal></MdAirlineSeatReclineNormal>
                    </span>
                    {currentItem && currentItem.seat}
                  </p>
                  <p className="mr-10 flex items-center  ">
                    <span className="mr-2">
                      <BsFillBagFill></BsFillBagFill>{" "}
                    </span>{" "}
                    {currentItem && currentItem.bag}
                  </p>
                  <p className="mr-10 flex items-center ">
                    {" "}
                    <span>
                      <BsCurrencyDollar></BsCurrencyDollar>
                    </span>{" "}
                    {currentItem && currentItem.price}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="">
              <div className="flex justify-between items-center ">
                <h1 className="text-center flex justify-center items-center  text-lg text-black capitalize">
                  <span className="w-[20px] h-[20px] mr-1">
                    <img
                      className="w-full h-full text-black object-contain  "
                      src={carIcon}
                    />
                  </span>{" "}
                  {defaultitem && defaultitem.carName}
                </h1>
                <div className="flex  justify-center items-center px-7">
                  <p className="mr-10 flex items-center">
                    {" "}
                    <span>
                      <MdAirlineSeatReclineNormal></MdAirlineSeatReclineNormal>
                    </span>
                    {defaultitem && defaultitem.seat}
                  </p>
                  <p className="mr-10 flex items-center text-black ">
                    <span className="mr-2">
                      <BsFillBagFill></BsFillBagFill>{" "}
                    </span>{" "}
                    {defaultitem && defaultitem.bag}
                  </p>
                  <p className="mr-10 flex text-black items-center ">
                    {" "}
                    <span>
                      <BsCurrencyDollar></BsCurrencyDollar>
                    </span>{" "}
                    {defaultitem && defaultitem.price}
                  </p>
                </div>
              </div>
            </div>
          )}
          <FaChevronDown className="ml-2" />
        </button>
        {isOpen3 && (
          <div className="absolute right-0 mt-2 py-2 w-full bg-white rounded-md shadow-xl z-10">
            <div className="flex justify-end px-4">
              <FaTimes className="cursor-pointer" onClick={handleClose3} />
            </div>

            <div className="h-56 overflow-y-scroll">
              {places?.map(item => (
                <div
                  onClick={() => {
                    handlePlaceSelect(item);
                    handleClose3();
                  }}
                  className="flex justify-between items-center    cursor-pointer border border-black bg-white   text-md px-5 my-5"
                  key={item._id}
                >
                  <img
                    className="w-10  rounded-lg h-10 object-cover"
                    src={item.carImg && item.carImg}
                    alt=""
                  />
                  <div className="flex  justify-center items-center px-7">
                    <p className="mr-10  text-black "> {item.carName}</p>
                    <p className="mr-10 flex text-black items-center">
                      {" "}
                      <span className="text-black">
                        <MdAirlineSeatReclineNormal></MdAirlineSeatReclineNormal>
                      </span>
                      {item.seat}
                    </p>
                    <p className="mr-10 flex items-center text-black ">
                      <span className="mr-2 text-black">
                        <BsFillBagFill></BsFillBagFill>{" "}
                      </span>{" "}
                      {item.bag}
                    </p>
                    <p className="mr-10 flex  text-black items-center ">
                      {" "}
                      <span>
                        <BsCurrencyDollar></BsCurrencyDollar>
                      </span>{" "}
                      {item.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <div>
        {/*car*/}

        {currentItem ? (
          <div>
            <div className="flex flex-col lg:flex-row h-48  border border-black ">
              <img
                src={currentItem && currentItem.carImg}
                alt="Img"
                className="w-full h-30   pb-[2px] object-cover lg:w-1/4"
              />

              {/*car title */}
              <div className="hidden lg:block lg:w-5/6">
                <div className="flex justify-between items-center p-5">
                  <h1 className="text-center   text-xl text-black capitalize">
                    {currentItem && currentItem.carName}
                  </h1>
                  <div className="flex  justify-center items-center px-7">
                    <p className="mr-10 flex text-black  items-center">
                      {" "}
                      <span>
                        <MdAirlineSeatReclineNormal></MdAirlineSeatReclineNormal>
                      </span>
                      {currentItem && currentItem.seat}
                    </p>
                    <p className="mr-10 flex items-center text-black ">
                      <span className="mr-2 text-black">
                        <BsFillBagFill></BsFillBagFill>{" "}
                      </span>{" "}
                      {currentItem && currentItem.bag}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex flex-col lg:flex-row h-30  border border-black ">
              <img
                src={defaultitem && defaultitem.carImg}
                alt="Img"
                className="w-full  h-48  pb-[2px] object-cover lg:w-1/4"
              />

              {/*car title */}
              <div className="hidden lg:block lg:w-5/6">
                <div className="flex justify-between items-center p-5">
                  <h1 className="text-center font-bold text-black text-2xl capitalize">
                    {defaultitem && defaultitem.carName}
                  </h1>
                  <div className="flex  justify-center text-black items-center px-7">
                    <p className="mr-10 flex items-center">
                      {" "}
                      <span className="text-black">
                        <MdAirlineSeatReclineNormal></MdAirlineSeatReclineNormal>
                      </span>
                      {defaultitem && defaultitem.seat}
                    </p>
                    <p className="mr-10 flex text-black items-center  ">
                      <span className="mr-2 text-black">
                        <BsFillBagFill></BsFillBagFill>{" "}
                      </span>{" "}
                      {defaultitem && defaultitem.bag}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="flex justify-end items-end mt-6">
        <Link to="/booking">
          <a className="flex justify-center items-center p-3 hover:underline">
            {" "}
            <span>
              <AiOutlineLeft />
            </span>{" "}
            Previous
          </a>
        </Link>
        <Link to="/booking/passenger">
          <button className="btn bg-green-950 w-36 hover:bg-green-950  text-white font-bold capitalize">
            NEXT
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Vehicle;
