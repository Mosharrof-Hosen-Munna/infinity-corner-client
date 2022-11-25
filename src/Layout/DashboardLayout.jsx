import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import Loading from "../Pages/Shared/Loading/Loading";

const DashboardLayout = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <section className="bg-slate-100 min-h-screen">
      <div className="">
        <div className="md:flex">
          <div className="md:w-1/4  bg-white min-h-screen">
            <nav className="py-4">
              <h1 className="text-4xl ml-3 font-semibold mb-4 text-sky-600">
                Dashboard
              </h1>
              <ul className="">
                {user?.databaseUser?.role === "buyer" && (
                  <li className="my-1 ">
                    <NavLink
                      to={`/dashboard/my-orders`}
                      className={({ isActive }) =>
                        isActive
                          ? "border-red-400 border-l-8 text-white bg-sky-500 p-4 my-1 inline-block w-full  cursor-pointer shadow-md    font-semibold text-lg"
                          : "p-4 my-1 inline-block w-full bg-white cursor-pointer shadow-md hover:bg-sky-500 hover:border-l-8 border-red-400 hover:text-white duration-300 font-semibold text-lg"
                      }
                    >
                      My Orders
                    </NavLink>
                  </li>
                )}

                {user?.databaseUser?.role === "seller" && (
                  <>
                  <li className="my-1 ">
                    <NavLink
                      to={`/dashboard/add-product`}
                      className={({ isActive }) =>
                        isActive
                          ? "border-red-400 border-l-8 text-white bg-sky-500 p-4 my-1 inline-block w-full  cursor-pointer shadow-md    font-semibold text-lg"
                          : "p-4 my-1 inline-block w-full bg-white cursor-pointer shadow-md hover:bg-sky-500 hover:border-l-8 border-red-400 hover:text-white duration-300 font-semibold text-lg"
                      }
                    >
                     Add A Product
                    </NavLink>
                  </li>
                  <li className="my-1 ">
                    <NavLink
                      to={`/dashboard/my-products`}
                      className={({ isActive }) =>
                        isActive
                          ? "border-red-400 border-l-8 text-white bg-sky-500 p-4 my-1 inline-block w-full  cursor-pointer shadow-md    font-semibold text-lg"
                          : "p-4 my-1 inline-block w-full bg-white cursor-pointer shadow-md hover:bg-sky-500 hover:border-l-8 border-red-400 hover:text-white duration-300 font-semibold text-lg"
                      }
                    >
                     My Products
                    </NavLink>
                  </li></>
                )}
                {user?.databaseUser?.role === "admin" && (
                  <>
                  <li className="my-1 ">
                    <NavLink
                      to={`/dashboard/all-sellers`}
                      className={({ isActive }) =>
                        isActive
                          ? "border-red-400 border-l-8 text-white bg-sky-500 p-4 my-1 inline-block w-full  cursor-pointer shadow-md    font-semibold text-lg"
                          : "p-4 my-1 inline-block w-full bg-white cursor-pointer shadow-md hover:bg-sky-500 hover:border-l-8 border-red-400 hover:text-white duration-300 font-semibold text-lg"
                      }
                    >
                     All Sellers
                    </NavLink>
                  </li>
                  <li className="my-1 ">
                    <NavLink
                      to={`/dashboard/all-buyers`}
                      className={({ isActive }) =>
                        isActive
                          ? "border-red-400 border-l-8 text-white bg-sky-500 p-4 my-1 inline-block w-full  cursor-pointer shadow-md    font-semibold text-lg"
                          : "p-4 my-1 inline-block w-full bg-white cursor-pointer shadow-md hover:bg-sky-500 hover:border-l-8 border-red-400 hover:text-white duration-300 font-semibold text-lg"
                      }
                    >
                     All Buyers
                    </NavLink>
                  </li>
                  <li className="my-1 ">
                    <NavLink
                      to={`/dashboard/reported-product`}
                      className={({ isActive }) =>
                        isActive
                          ? "border-red-400 border-l-8 text-white bg-sky-500 p-4 my-1 inline-block w-full  cursor-pointer shadow-md    font-semibold text-lg"
                          : "p-4 my-1 inline-block w-full bg-white cursor-pointer shadow-md hover:bg-sky-500 hover:border-l-8 border-red-400 hover:text-white duration-300 font-semibold text-lg"
                      }
                    >
                     Reported Product
                    </NavLink>
                  </li></>
                )}
              </ul>
            </nav>
          </div>
          <div className="md:w-full md:ml-8 mt-8 md:mt-0">
            <Outlet />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardLayout;


/***
 * Product Name,
 * Price,
 * Condition(excellent,good,fair)
 * mobile number,
 * location,
 * category,
 * description,
 * year of purchase,
 * */