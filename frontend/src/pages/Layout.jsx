import React from "react"; 
import { Outlet } from "react-router-dom";

const Layout = () => { 
  return (
    <div className="app">
      <React.Suspense fallback={<p>Loading ...</p>}>
        <Outlet />
      </React.Suspense>
    </div> 
  ); 
}; 

export default Layout;