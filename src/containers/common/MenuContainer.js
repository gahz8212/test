import React, { useState } from "react";
import Menu from "../../components/common/Menu";
const MenuContainer = () => {
  const [menu, setItem] = useState({ item: "all", sub: "" });
  const onSelect = (menu) => {
    setItem(menu);
    // console.log(menu);
  };
  return <Menu onSelect={onSelect} menu={menu}></Menu>;
};

export default MenuContainer;
