import React from "react";
import { Link } from "react-router-dom";
import bannerBg from "../../../images/top-banner.jpg";

const Banner = () => {
  return (
    <section className="" style={{ background: `url(${bannerBg})`,backgroundSize:'cover',backgroundRepeat:'no-repeat',backgroundAttachment:'fixed' }}>
      <div className="container mx-auto">
        <div className="text-center py-48">
          <h1 className="text-5xl text-white font-semibold">All You Need Is Here & Classified</h1>
          <p className="text-lg text-white my-8 mb-10">
            Browse from more than 15,000,000 adverts while new ones come on
            daily bassis
          </p>
          <Link>
            <button
              className="inline-block  bg-infinity px-8 py-4 text-white font-medium text-lg leading-tight uppercase rounded shadow-md  hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out  mb-3"
              type="submit"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
            >
              BROWSE PRODUCTS
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Banner;
