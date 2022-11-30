import React, { useState } from "react";
import welcomeImg from "../../images/welcome.svg";
import welcomeLogo from "../../images/welcome-logo.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import axios from "axios";
import { Dna } from "react-loader-spinner";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const [error, setError] = useState("");

  const {
    handleEmailPasswordLogin,
    loading,
    setLoading,
    handleGoogleSignIn,
    saveGoogleUserToDatabase,
    
  } = useAuth();

  

  const location = useLocation();
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || "/";

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const handleEmailLogin = (e) => {
    
    e.preventDefault();
    if (loginData.email && loginData.password) {
      setLoading(true);
      handleEmailPasswordLogin(loginData.email, loginData.password)
        .then(async (result) => {
          const newUser = {
            name: result.user.displayName,
            email: result.user.email,
            uid: result.user.uid,
            photoUrl: result.user.photoURL,
          };
          console.log(result.user);
          // get jwt token
          await axios
            .post("https://assignment-12-server-two-pi.vercel.app/api/jwt", newUser)
            .then((res) => {
              localStorage.setItem("token", res.data.token);
              navigate(from, { replace: true });
            })
            .catch((err) => console.log(err));

        })
        .catch((e) => {
          console.log(e);
          setError("Email or password wrong!");
          setLoading(false)
        })
    }
  };
  const signInGoogle = () => {
    setLoading(true);
    handleGoogleSignIn()
      .then(async (result) => {
        const newUser = {
          name: result.user.displayName,
          email: result.user.email,
          uid: result.user.uid,
          photoUrl: result.user.photoURL,
          role: 'buyer',
          isVerified: false

        };
        // get jwt token
        await axios
          .post("https://assignment-12-server-two-pi.vercel.app/api/jwt", newUser)
          .then((res) => {
            localStorage.setItem("token", res.data.token);
          })
          .catch((err) => console.log(err));
        saveGoogleUserToDatabase(newUser);
        navigate(from, { replace: true });
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        
        console.log(error.message)})
  };

  if (loading) {
    return <div className="container mx-auto ">
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
     </div>;
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
                      <form onSubmit={handleEmailLogin}>
                        <p className="mb-4 text-2xl font-semibold">
                          Please login to your account
                        </p>
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
                        <div className="mb-4">
                          <input
                            type="password"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="exampleFormControlInput1"
                            placeholder="Password"
                            name="password"
                            onChange={handleOnChange}
                          />
                        </div>
                        <div className="text-center pt-1 mb-12 pb-1">
                          <button
                            className="inline-block  bg-infinity px-6 py-2.5 text-white font-medium text-lg leading-tight uppercase rounded shadow-md  hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                            type="submit"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                          >
                            Log in
                          </button>
                          <a className="text-gray-500" href="#!">
                            Forgot password?
                          </a>
                          <div className="text-center mb-3" >or</div>
                          <button
                            className="inline-block bg-gradient-to-r from-cyan-200 bg-slate-400 px-6 py-3 text-white  font-medium text-lg leading-tight uppercase rounded shadow-md  hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                            type="button"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                            onClick={signInGoogle}
                          >
                           LOGIN WITH GOOGLE
                          </button>
                        </div>
                        <div className="flex items-center justify-between pb-6">
                          <p className="mb-0 mr-2">Don't have an account?</p>
                          <Link to="/register">
                            <button
                              type="button"
                              className="inline-block px-6 py-2 border-2 border-cyan-700 text-infinity font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                              data-mdb-ripple="true"
                              data-mdb-ripple-color="light"
                            >
                              SIGNUP
                            </button>
                          </Link>
                        </div>
                      </form>
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

export default Login;
