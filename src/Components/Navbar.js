import React from "react";
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
  } from 'mdb-react-ui-kit';
const Navbar = () => {
  return (
      <>
    <MDBNavbar dark bgColor="dark">
      <MDBContainer >
      <MDBNavbarBrand>ToDo</MDBNavbarBrand>
      </MDBContainer>
    </MDBNavbar>

     </>
  );
};

export default Navbar;
