import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { faLaptop } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const CategoryLayout = () => {
  return (
    <div>
      <div className="container mx-auto py-12 px-4">
        <div className="md:flex">
          <div className="md:w-1/3 px-4">
            <nav>
              <h1 className="text-2xl font-semibold mb-4 text-infinity">
                Category List
              </h1>
              <ul className="">
                <CategoryItem categoryName='Dell'/>
                <CategoryItem categoryName='Macbook'/>
                <CategoryItem categoryName='Asus'/>
                <CategoryItem categoryName='Hp'/>
              </ul>
            </nav>
          </div>
          <div className="md:w-full md:ml-8 mt-8 md:mt-0">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

const CategoryItem = ({categoryName})=>{
    return (
        <li className="my-1 ">
                  <NavLink
                    to={`/category/${categoryName.toLowerCase()}`}
                    className={({ isActive }) =>
                      isActive
                        ? "border-cyan-700 border-l-8 text-white bg-infinity p-3 my-1 inline-block w-full  cursor-pointer shadow-md    font-semibold text-lg"
                        : "p-3 my-1 inline-block w-full bg-white cursor-pointer shadow-md hover:bg-infinity hover:border-l-8 border-cyan-700 hover:text-white duration-300 font-semibold text-lg"
                    }
                  >
      <div className="flex items-center">  <FontAwesomeIcon className="text-xl mr-2" icon={faLaptop} />
                    {categoryName}</div>
                  </NavLink>
                </li>
    )
}

export default CategoryLayout;
