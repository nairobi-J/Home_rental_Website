import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../data';
// import "../components/Categories.scss";
import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import {
  GiBarn,
  GiBoatFishing,
  GiCactus,
  GiCastle,
  GiCaveEntrance,
  GiForestCamp,
  GiIsland,
  GiWindmill,
} from "react-icons/gi";
import {
  FaSkiing,
  FaPumpSoap,
  FaShower,
  FaFireExtinguisher,
  FaUmbrellaBeach,
  FaKey,
} from "react-icons/fa";
import { FaHouseUser, FaPeopleRoof, FaKitchenSet } from "react-icons/fa6";
import {
  BiSolidWasher,
  BiSolidDryer,
  BiSolidFirstAid,
  BiWifi,
  BiSolidFridge,
  BiWorld,
} from "react-icons/bi";
import { BsSnow, BsFillDoorOpenFill, BsPersonWorkspace } from "react-icons/bs";
import { IoDiamond } from "react-icons/io5";
import { MdOutlineVilla, MdMicrowave, MdBalcony, MdYard, MdPets } from "react-icons/md";
import {
  PiBathtubFill,
  PiCoatHangerFill,
  PiTelevisionFill,
} from "react-icons/pi";
import { TbIroning3 } from "react-icons/tb";
import {
  GiHeatHaze,
  GiCctvCamera,
  GiBarbecue,
  GiToaster,
  GiCampfire,
} from "react-icons/gi";
import { AiFillCar } from "react-icons/ai";
const iconMap = {
    TbBeach, TbMountain, TbPool,GiBarn,
    GiBoatFishing,
    GiCactus,
    GiCastle,
    GiCaveEntrance,
    GiForestCamp,
    GiIsland,
    GiWindmill, FaSkiing,
    FaPumpSoap,
    FaShower,
    FaFireExtinguisher,
    FaUmbrellaBeach,
    FaKey, FaHouseUser, FaPeopleRoof, FaKitchenSet,BiSolidWasher,
    BiSolidDryer,
    BiSolidFirstAid,
    BiWifi,
    BiSolidFridge,
    BiWorld,BsSnow, BsFillDoorOpenFill, BsPersonWorkspace,MdOutlineVilla, MdMicrowave, MdBalcony, MdYard, MdPets,
    PiBathtubFill,
    PiCoatHangerFill,
    PiTelevisionFill,TbIroning3,GiHeatHaze,
    GiCctvCamera,
    GiBarbecue,
    GiToaster,
    GiCampfire,AiFillCar,IoDiamond
};

const Categories = () => {
  return (
    <div className='categories'>
      <h1>Explore Top Categories</h1>
      <div className="category-list">
        {categories?.slice(0, 7).map((category, index) => {
          const IconComponent = iconMap[category.icon];
          return (
            <Link to='' key={index}>
              <div className="category">
                {/* <img src={category.img} alt={category.label} /> */}
                <div className="overlay"></div>
                <div className="category_text">
                  <div className="category_text_icon">
                    {IconComponent && <IconComponent />}
                  </div>
                  <p>{category.label}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Categories;

