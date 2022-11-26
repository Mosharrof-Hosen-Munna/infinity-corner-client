import React, { useState } from "react";
import welcomeImg from "../../images/welcome.svg";
import welcomeLogo from "../../images/welcome-logo.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import axios from "axios";
import { Dna } from "react-loader-spinner";

const Register = () => {
  const [registerData, setRegisterData] = useState({ role: "buyer" });
  const [image, setImage] = useState(null);
  const [error, setError] = useState({});

  const {
    handleGoogleSignIn,
    handleEmailPasswordRegister,
    setUser,
    setUserName,
    setLoading,
    user,
    loading,
    saveUserToDatabase,
    saveGoogleUserToDatabase,
  } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || "/";

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newRegisterData = { ...registerData };
    newRegisterData[field] = value;
    setRegisterData(newRegisterData);
  };

  // validate registration data
  const validationRegister = (name, password) => {
    const errorMessage = {};
    if (name.length < 5 || name.length > 25) {
      errorMessage.name = "Name Must be between 5 to 25 characters";
    }
    if (password.length < 6 || password.length > 14) {
      errorMessage.password = "Password Must be between 5 to 14 characters";
    }
    return errorMessage;
  };

  // handle email registration function
  const handleEmailRegistration = async (e) => {
    e.preventDefault();

    const errorMessage = validationRegister(
      registerData?.name,
      registerData?.password
    );

    if (errorMessage.name || errorMessage.password) {
      setError(errorMessage);
      setLoading(false);
      return;
    }

    if (!image) {
      console.log("image not found");
      setLoading(false);
      return;
    }
    setLoading(true);

    const formData = new FormData();
    formData.append("image", image);

    let imageUrl = "";

    axios
      .post(
        `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_imgbb_api_key}`,
        formData
      )
      .then((res) => {
        imageUrl = res.data.data.url;
        handleEmailPasswordRegister(
          registerData.email,
          registerData.password,
          registerData.name
        )
          .then(async (result) => {
            setUserName(registerData.name, imageUrl);
            const LoginUser = result.user;

            const newUser = {
              name: registerData?.name,
              email: result.user.email,
              uid: result.user.uid,
              photoUrl: imageUrl,
              role: registerData.role,
              isVerified: false,
            };
            // get jwt token
            await axios
              .post("http://localhost:5000/api/jwt", newUser)
              .then((res) => {
                localStorage.setItem("token", res.data.token);
              })
              .catch((err) => console.log(err));

            saveUserToDatabase(newUser);
            setUser(LoginUser);
            console.log(user);
            navigate(from, { replace: true });
            setError({});
          })
          .catch((e) => {
            setError({ email: "User already exits this email" });
          })
          .finally(() => setLoading(false));
      })
      .catch((err) => console.log(err));
  };

  // google signup
  const signInGoogle = () => {
    setLoading(true);
    handleGoogleSignIn()
      .then(async (result) => {
        const newUser = {
          name: result.user.displayName,
          email: result.user.email,
          uid: result.user.uid,
          photoUrl: result.user.photoURL,
          role: "buyer",
          isVerified: false,
        };
        // get jwt token
        await axios
          .post("http://localhost:5000/api/jwt", newUser)
          .then((res) => {
            localStorage.setItem("token", res.data.token);
          })
          .catch((err) => console.log(err));
        saveGoogleUserToDatabase(newUser);
        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error.message))
      .finally(() => setLoading(false));
  };

  if (loading) {
    return (
      <div className="container mx-auto ">
        <div className="flex justify-center items-center py-48">
          <Dna
            visible={true}
            height="250"
            width="250"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
          />
        </div>
      </div>
    );
  }

  return (
    <section className="gradient-form bg-slate-100 ">
      <div className="container py-12 px-6  mx-auto">
        <div className="flex justify-center  items-center flex-wrap h-full g-6 text-gray-800">
          <div className="xl:w-10/12">
            <div className="block bg-white shadow-lg rounded-lg">
              <div className="lg:flex lg:flex-wrap g-0">
                <div className="lg:w-6/12 px-4 md:px-0">
                  <div className="md:p-12 md:mx-6">
                    <div className="text-center">
                      <img
                        className="mx-auto w-48"
                        src={welcomeLogo}
                        alt="logo"
                      />
                      <h4 className="text-xl font-semibold mt-1 mb-12 pb-1">
                        We are Infinity Corner Team
                      </h4>
                    </div>
                    <form onSubmit={handleEmailRegistration}>
                      <p className="mb-4 text-2xl font-semibold">
                        Create a New Account
                      </p>
                      <div className="mb-4">
                        <input
                          type="text"
                          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          id="exampleFormControlInput1"
                          placeholder="Your Full Name"
                          name="name"
                          onChange={handleOnChange}
                        />
                      </div>
                      <div className="mb-4">
                        <input
                          type="email"
                          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          id="exampleFormControlInput1"
                          placeholder="Your email"
                          name="email"
                          onChange={handleOnChange}
                        />
                      </div>
                      <div className="form-control mb-4">
                        {/* <label className="label">
                          <span className="label-text">
                            Pick the best fantasy franchise
                          </span>
                        </label> */}
                        <select
                          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          name="role"
                          onChange={handleOnChange}
                        >
                          <option value="buyer">Buyer</option>
                          <option value="seller">Seller</option>
                        </select>
                      </div>
                      <div className="mb-4">
                        <input
                          type="password"
                          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          id="exampleFormControlInput1"
                          placeholder="Password"
                          onChange={handleOnChange}
                          name="password"
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
                              <span class="font-semibold">Click to upload</span>{" "}
                              your profile picture
                            </p>
                          </div>
                          <input
                            id="dropzone-file"
                            type="file"
                            class="hidden"
                            onChange={(e) => setImage(e.target.files[0])}
                            name="image"
                            accept="image/*"
                          />
                        </label>
                      </div>

                      <div className="text-center pt-1  pb-1">
                        <button
                          className="inline-block  bg-infinity px-6 py-2.5 text-white font-medium text-lg leading-tight uppercase rounded shadow-md  hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                          type="submit"
                          data-mdb-ripple="true"
                          data-mdb-ripple-color="light"
                        >
                          REGISTER
                        </button>
                      </div>
                    </form>
                    <div>
                      <div className="text-center mb-3">or</div>
                      <button
                        className="inline-block bg-gradient-to-r from-cyan-200 bg-slate-400 px-6 py-3 text-white  font-medium text-lg leading-tight uppercase rounded shadow-md  hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                        type="button"
                        data-mdb-ripple="true"
                        data-mdb-ripple-color="light"
                        onClick={signInGoogle}
                      >
                        REGISTER WITH GOOGLE
                      </button>
                    </div>
                    <div className="flex items-center justify-between pb-6">
                      <p className="mb-0 mr-2">Don't have an account?</p>
                      <Link to="/register">
                        <button
                          type="button"
                          className="inline-block px-6 py-2 border-2 border-sky-600 text-infinity font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                          data-mdb-ripple="true"
                          data-mdb-ripple-color="light"
                        >
                          SIGNUP
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="lg:w-6/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none">
                  <div className="text-white px-4 py-6 md:p-12 md:mx-6">
                    <div>
                      <img src={welcomeImg} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
