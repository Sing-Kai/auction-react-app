/* eslint-disable import/first */
import React, { useState, useEffect } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom"

const NavBar =() => {
  const { loginWithRedirect, logout, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [accessToken, setAccessToken] = useState('')
  // const [isSignedIn, setIsSignedIn] = useState(false);
  // const [isOpen, setIsOpen] = useState(false);

  // const toggleNav = () => {
  //   setIsOpen(!isOpen);
  // };

  // const handleSignIn = () => {
  //   setIsSignedIn(true);
  // };

  // const handleSignOut = () => {
  //   setIsSignedIn(false);
  // };

  // useEffect(() => {

  //   const getAccessToken = async () => {
  //     try {
  //       const token = await getAccessTokenSilently()
  //       console.log('access token is found', token)
  //       setAccessToken(token)
  //     } catch (e) {
  //       console.log('error with getting token')
  //       console.log(e)
  //     }
  //   }

  //   if(isAuthenticated){
  //     getAccessToken()
  //   }

  // }, [])

  return (
    <nav className="flex items-center justify-between flex-wrap bg-cyan-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link to='/'>
          <span className="font-semibold text-xl tracking-tight">
            BananaBid
          </span>
        </Link>
      </div>
      <div className="w-full block flex-grow md:flex md:items-center md:w-auto">

        {isAuthenticated &&(
          <div className="text-sm md:flex-grow">
            <Link to="/auctions" className="block mt-4 md:inline-block md:mt-0 text-cyan-200 hover:text-white mr-4">
              Auction
            </Link>
            <Link to="/bid" className="block mt-4 md:inline-block md:mt-0 text-cyan-200 hover:text-white mr-4">
              Create Auction
            </Link>
          </div>
        )}

        <div className='ml-auto' >
          {!isAuthenticated && (
            <button 
              className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-cyan-500 hover:bg-white mt-4 md:mt-0"
              onClick={()=>loginWithRedirect()}>
              Sign In
            </button>
          )}

          {isAuthenticated && (
            <button 
              className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-cyan-500 hover:bg-white mt-4 md:mt-0"
              onClick={()=>logout({ logoutParams: { returnTo: window.location.origin } })}>
              Log out
            </button>
          )}

        </div>
      </div>
    </nav>
  );
}

export default NavBar;