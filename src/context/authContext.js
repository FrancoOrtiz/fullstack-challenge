import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth, db } from "../firebase";
import { setDoc, doc, getDoc, onSnapshot } from "firebase/firestore";

export const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [favPokemon, setFavPokemon] = useState([]);

  const getFavPokemons = async (currentUser) => {
    if (currentUser) {
      const docRef = doc(db, "users", currentUser.uid);
      const docSnap = await getDoc(docRef);
      const { favorites } = docSnap.data();
      if (favorites) {
        setFavPokemon(favorites);
      } else {
        setFavPokemon([]);
      }
    }
  };

  const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => signOut(auth);

  const addFavPokemon = async (name) => {
    const actualFav = favPokemon.find((fav) => fav === name);
    const indexPokemon = favPokemon.indexOf(name);
    const docRef = doc(db, "users", user.uid);

    if (actualFav) {
      favPokemon.splice(indexPokemon, 1);
    } else {
      favPokemon.push(name);
    }

    await setDoc(docRef, { favorites: favPokemon });
    await onSnapshot(docRef, (doc) => {
      const { favorites } = doc.data();
      setFavPokemon(favorites);
    });
  };

  const loginWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };

  const resetPassword = (email) => sendPasswordResetEmail(auth, email);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      getFavPokemons(currentUser);
    });

    return () => unsubscribe();
  }, []);

  return (
    <authContext.Provider
      value={{
        signup,
        login,
        user,
        logout,
        loginWithGoogle,
        loading,
        resetPassword,
        addFavPokemon,
        favPokemon,
      }}
    >
      {children}
    </authContext.Provider>
  );
};
