import React from "react";
import {Menu } from "semantic-ui-react";


export const NavBar = () => {
  return (
      
    <Menu fixed="left" inverted vertical>
      <Menu.Item header>
          <img src="/assets/logo.png" alt="logo"></img>
      </Menu.Item>
      <Menu.Item name="FAKTURY" />
      <Menu.Item name="KONTRAHENCI"/>
      <Menu.Item name="MAGAZYN"/>
      <Menu.Item name="USTAWIENIA"/>
    </Menu>
  );
};

