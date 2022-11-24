import axios from "axios";
import {
  getAuth,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  GithubAuthProvider,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGoogleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const handleGithubSignIn = () => {
    return signInWithPopup(auth, githubProvider);
  };

  const handleEmailPasswordRegister = (email, password, name) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const handleEmailPasswordLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const setUserName = (name, photoURL) => {
    
      updateProfile(auth.currentUser, { displayName: name,photoURL }).then(
        (result) => {}
      );
    
  };

  const saveGoogleUserToDatabase = (user) => {
    const url = `https://pickypro-server.vercel.app/api/user/create`;
    axios
      .put(url, user)
      .then((res) => {})
      .catch((err) => console.log(err));
  };

  const saveUserToDatabase = (user) => {
    const url = `https://pickypro-server.vercel.app/api/user/create`;
    axios
      .post(url, user)
      .then((res) => {})
      .catch((err) => console.log(err));
  };

  const logOut = () => {
    setLoading(true);
    signOut(auth)
      .then(() => {
        setUser(null);
        if(localStorage.getItem('token')){
          localStorage.removeItem('token')
        }
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setLoading(false);
    });
  }, [auth]);

  return {
    user,
    setUser,
    handleGoogleSignIn,
    logOut,
    handleGithubSignIn,
    handleEmailPasswordRegister,
    setUserName,
    handleEmailPasswordLogin,
    loading,
    setLoading,
    saveGoogleUserToDatabase,
    saveUserToDatabase,
  };
};

export default useFirebase;
