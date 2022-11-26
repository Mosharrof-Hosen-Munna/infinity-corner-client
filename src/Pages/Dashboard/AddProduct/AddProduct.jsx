import axios from "axios";
import React, { useEffect, useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import useProduct from "../../../Hooks/useProduct";
import InputField from "./InputField";

const AddProduct = () => {
  const [productData, setProductData] = useState({category: 'macbook', condition:'excellent'});
  const [image, setImage] = useState(null);

  const {user} = useAuth()
  const {createProduct} = useProduct()

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newProductData = { ...productData };
    newProductData[field] = value;
    setProductData(newProductData);
  };

  const handleFormSubmit = (e) => {
    console.log('go ahead')
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image);

    let imageUrl = "";

    axios
      .post(
        `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_imgbb_api_key}`,
        formData
      )
      .then(async(res) => {
        imageUrl = res.data.data.url;
        const productObj = {
          ...productData,
          imageUrl,
          createdAt: new Date(),
          isAvailable: true,
          sellerName: user.displayName,
          sellerPhoto: user.photoUrl,
          sellerEmail: user.email,
          isVerified: user.databaseUser.isVerified,
          isAdvertise: false,
        }

        try{
          const data =await createProduct(productObj)
          if(data.insertedId){
            e.target.reset()
            setProductData({category: 'macbook', condition:'excellent'})
            setImage(null)
          }
          console.log(data)
        }catch(e){
          console.log(e)
        }
        
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <section className="my-8 ">
      <div className="mx-auto">
        <div className="card w-2/3 mx-auto bg-slate-50 p-4">
          <h1 className="text-center text-3xl font-semibold my-3 text-infinity">
            Add A New Product
          </h1>
          <form onSubmit={handleFormSubmit}>
            <InputField
              label="Product Name"
              placeholder="Product Name"
              type="text"
              handleOnChange={handleOnChange}
              name="productName"
            />
            <InputField
              label="Original Price"
              placeholder="Price $"
              type="text"
              name="originalPrice"
              handleOnChange={handleOnChange}
            />
            <InputField
              label="Resale Price"
              placeholder="Price $"
              type="text"
              name="resalePrice"
              handleOnChange={handleOnChange}
            />
            <InputField
              label="Mobile Number"
              placeholder="Your Number"
              type="tel"
              name="number"
              handleOnChange={handleOnChange}
            />
            <InputField
              label="Location"
              placeholder="Your Location"
              type="text"
              name="location"
              handleOnChange={handleOnChange}
            />
            <InputField
              label="Year of Purchase"
              placeholder="Year of Purchase"
              type="number"
              name="purchaseDate"
              handleOnChange={handleOnChange}
            />
            <InputField
              label="Years of use"
              placeholder="Years of use"
              type="number"
              name="yearsOfUse"
              handleOnChange={handleOnChange}
            />
            <div className="form-control mb-4">
              <label className="label">Select your product category</label>
              <select
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                name="category"
                onChange={handleOnChange}
                required
              >
                <option selected disabled>
                  Select a category
                </option>
                <option value="macbook">Macbook</option>
                <option value="hp">Hp</option>
                <option value="dell">Dell</option>
                <option value="asus">Asus</option>
              </select>
            </div>
            <div className="form-control mb-4">
              <label className="label">Product Condition</label>
              <select
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                name="condition"
                onChange={handleOnChange}
                required
              >
                <option selected disabled>
                  Select a Condition
                </option>
                <option value="excellent">Excellent</option>
                <option value="good">Good</option>
                <option value="fair">Fair</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="description">Product Description</label>
              <textarea
                type="textarea"
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="description"
                placeholder="Descriptions"
                name="descriptions"
                onChange={handleOnChange}
                rows={5}
                required
              />
            </div>
            <div class="flex items-center justify-center w-full mb-4">
              <label
                for="dropzone-file"
                class="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
              >
                <div class="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    aria-hidden="true"
                    class="w-10 h-10 mb-3 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    ></path>
                  </svg>
                  <p class="mb-2 text-sm text-gray-500 ">
                    <span class="font-semibold">Click to upload</span> your
                    profile picture
                  </p>
                </div>
                <input
                  id="dropzone-file"
                  type="file"
                  class="hidden"
                  onChange={(e) => setImage(e.target.files[0])}
                  name="image"
                  accept="image/*"
                  required
                />
              </label>
            </div>
            <div className="text-center">
              <button
                className="inline-block  bg-infinity px-6 py-2.5 text-white font-medium text-lg leading-tight uppercase rounded shadow-md  hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-1/2 mb-3"
                type="submit"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                Submit Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddProduct;

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
