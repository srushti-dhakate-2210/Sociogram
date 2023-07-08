import React from "react";

import Home from "../../img/home.png";
import Noti from "../../img/noti.png";
import Comment from "../../img/comment.png";
import { UilSetting } from "@iconscout/react-unicons";
import { Link } from "react-router-dom";

const NavIcons = () => {
  return (
    <div className="navIcons">

      <Link to="../home">
        <img src={Home} alt="" />
      </Link>

      <UilSetting />

      <img src={Noti} alt="" />

      <img src={Comment} alt="" />

    </div>
  );
};

export default NavIcons;
