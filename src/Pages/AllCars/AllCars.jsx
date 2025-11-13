import React, { useEffect, useState } from "react";
import MyTitle from "../../Components/Title/MyTitle";
import MyContainer from "../../Components/MyContainer/MyContainer";
import { axiosPublic } from "../../api/axiosPublic";
import CarCard from "../../Components/CarCard/CarCard";
import { motion } from "framer-motion";
import Spinner from "../../Components/Spinner/Spinner";
import { IoSearchSharp } from "react-icons/io5";
import { FaFilter, FaRegFaceSmile } from "react-icons/fa6";
import { FaSortAlphaUp } from "react-icons/fa";
import { Link } from "react-router";

const AllCars = () => {
  const [allCars, setAllCars] = useState([]);
  const [loader, setLoader] = useState(false);
  const [brand, setBrand] = useState("All");
  const [sort, setSort] = useState("Normal");
  const [search, setSearch] = useState("");
  console.log(search);

  useEffect(() => {
    setLoader(true);
    axiosPublic(`/cars?brand=${brand}&sort=${sort}&search=${search}`)
      .then((res) => {
        console.log(res);
        setAllCars(res.data);
        setLoader(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [brand, sort, search]);

  return (
    <MyContainer>
      {/* title */}
      <MyTitle>
        All <span className="text-primary border-b-2">Cars</span>
      </MyTitle>

      {/* all cars and filter section*/}
      <section className="flex flex-col md:flex-row gap-4">
        {/* filter, search, sort */}
        <div className="flex-1 w-full md:w-auto  flex flex-col justify-between items-center md:items-stretch md:border-r-4 border-r-gray-300 md:pr-3 sticky  md:top-18 self-start">
          {/* search cars */}
          <div className="flex items-center justify-between border border-gray-400 focus-within:border-primary rounded-full overflow-hidden">
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="my_input !rounded-none outline-none"
              placeholder="Search cars...."
            />
            <div className="my_bg py-3 px-2 w-12 flex items-center justify-center text-white">
              <IoSearchSharp />
            </div>
          </div>

          <div className="w-full flex flex-row md:flex-col justify-between">
            {/* filter */}
            <div className="mt-4">
              <div className="flex items-center gap-2">
                <div className="bg-gray-200 p-2 rounded-full text-primary">
                  <FaFilter size={20} />
                </div>
                <p className="text-lg font-medium">brand</p>
              </div>
              <select
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                name="brand"
                className="select select-md mt-2 outline-none  focus-within:border-primary "
              >
                <option>All</option>
                <option>Sedan</option>
                <option>SUV</option>
                <option>Hatchback</option>
                <option>Luxury</option>
                <option>Electric</option>
              </select>
            </div>

            {/* sorted */}
            <div className="mt-4 order-3">
              <div className="flex items-center gap-2">
                <div className="bg-gray-200 p-2 rounded-full text-primary">
                  <FaSortAlphaUp size={20} />
                </div>
                <p className="text-lg font-medium">sorted</p>
              </div>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                name="sorted"
                className="select select-md mt-2 outline-none  focus-within:border-primary"
              >
                <option>Normal</option>
                <option>Price High</option>
                <option>Price Low</option>
                <option>Newest</option>
                <option>Oldest</option>
              </select>
            </div>
          </div>
        </div>

        {/* all cars */}
        <div className="flex-3">
          {loader ? (
            <Spinner />
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
              {allCars.length === 0 ? (
                <div className="flex col-span-3 items-center justify-center mt-10">
                  <div className="flex flex-col max-w-80 items-center justify-center bg-white p-4 text-center rounded-2xl gap-2.5 shadow">
                    <FaRegFaceSmile className="text-3xl text-primary" />
                    <div>
                      <h5 className="text-3xl mb-1">Not found cars</h5>
                      <p className="text-gray-400">
                        Seller not added this Category cars. Please check
                        another category.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                allCars.map((car) => <CarCard key={car._id} car={car} />)
              )}
            </div>
          )}
        </div>
      </section>
    </MyContainer>
  );
};

export default AllCars;
