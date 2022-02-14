import React from 'react';
import { Navbar, Icon , NavItem } from 'react-materialize';

const NavBar = () => {
    return (
        <div className='navbar-fixed'>
            <Navbar
  alignLinks="right"
  brand={<a className="brand-logo" href="/">Why Blend In</a>}
  id="mobile-nav"
  menuIcon={<Icon>menu</Icon>}
  options={{
    draggable: true,
    edge: 'left',
    inDuration: 250,
    onCloseEnd: null,
    onCloseStart: null,
    onOpenEnd: null,
    onOpenStart: null,
    outDuration: 200,
    preventScrolling: true
                }}
    className="navbar"
>
  <NavItem href="#about">
   About
  </NavItem>
  <NavItem href="#events">
    Events
  </NavItem>
   <NavItem href="#featured">
    Featured
  </NavItem>
  <NavItem href="#contact">
    Contact
  </NavItem>
</Navbar>
        </div>
    );
}

export default NavBar;
