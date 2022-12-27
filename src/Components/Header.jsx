import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import Logo from '../../public/images/headerimg.png'
import styled from "styled-components";
const Header = () => {
  const MainHeader = styled.header `
padding:0 4.8rem ;
height:10rem;
background-color:${({theme})=>theme.colors.bg};
display:flex;
justify-content:space-between;
align-items:center;

`;
  return (
    <>
    <div className="container">

    <MainHeader>
      <div className="header">
       <NavLink to='/'>
        <img src={Logo} alt='logo' style={{width:"50px",height:'50px',objectFit:"cover"}} className='img-logo'/>
       </NavLink>
       <Navbar/>
      </div>
    </MainHeader>
    </div>
      
    </>
  );
};

const MainHeader = styled.header `
padding:0 4.8rem ;
height:10rem;
background-color:${({theme})=>theme.colors.bg};
display:flex;
justify-content:space-between;
align-items:center;

`;

export default Header;
