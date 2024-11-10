
import React from 'react';
import Navbar from './Navbar';
import {useState} from 'react'
import { useNavigate} from 'react-router-dom';
import styles from '../components/CreateList.module.css';
import { categories, types, facilities } from '../data';
import "./variables.module.css"; 
import {DragDropContext, Draggable,Droppable} from 'react-beautiful-dnd'
import { RemoveCircleOutline, AddCircleOutline,Person,Bed, Bathroom,Balcony} from '@mui/icons-material';
import { TbBeach, TbMountain, TbPool } from 'react-icons/tb';
import {
  GiBarn, GiBoatFishing, GiCactus, GiCastle, GiCaveEntrance, GiForestCamp,
  GiIsland, GiWindmill, GiHeatHaze, GiCctvCamera, GiBarbecue, GiToaster, GiCampfire,
  GiHanger
} from 'react-icons/gi';
import { FaSkiing, FaPumpSoap, FaShower, FaFireExtinguisher, FaUmbrellaBeach, FaKey, FaHospital, FaSchool, FaLeaf, FaRoad, FaCity, FaChild, FaMosque, FaTree } from 'react-icons/fa';
import { FaHouseUser, FaPeopleRoof, FaKitchenSet,FaBangladeshiTakaSign, FaShop } from 'react-icons/fa6';
import { BiSolidWasher, BiSolidDryer, BiSolidFirstAid, BiWifi, BiSolidFridge, BiWorld, BiTrash} from 'react-icons/bi';
import { BsSnow, BsFillDoorOpenFill, BsPersonWorkspace } from 'react-icons/bs';
import { IoDiamond } from 'react-icons/io5';
import { MdOutlineVilla, MdMicrowave, MdBalcony, MdYard, MdPets } from 'react-icons/md';
import { PiBathtubFill, PiCoatHangerFill, PiTelevisionFill } from 'react-icons/pi';
import { TbIroning3 } from 'react-icons/tb';
import { AiFillCar } from 'react-icons/ai';
import {IoIosImages} from 'react-icons/io'
import { useSelector } from 'react-redux';
const iconMap = {
  TbBeach, TbMountain, TbPool, GiBarn, GiBoatFishing, GiCactus, GiCastle,
  GiCaveEntrance, GiForestCamp, GiIsland, GiWindmill, FaSkiing, FaPumpSoap,
  FaShower, FaFireExtinguisher, FaUmbrellaBeach, FaKey, FaHouseUser, FaPeopleRoof,
  FaKitchenSet, BiSolidWasher, BiSolidDryer, BiSolidFirstAid, BiWifi, BiSolidFridge,
  BiWorld, BsSnow, BsFillDoorOpenFill, BsPersonWorkspace, MdOutlineVilla, MdMicrowave,
  MdBalcony, MdYard, MdPets, PiBathtubFill, PiCoatHangerFill, PiTelevisionFill, TbIroning3,
  GiHeatHaze, GiCctvCamera, GiBarbecue, GiToaster, GiCampfire, AiFillCar, IoDiamond,FaHospital,FaSchool,FaLeaf,FaRoad,FaCity,FaShop,FaChild,FaMosque, FaTree,GiHanger
};

const CreateList = () => {


  const [category, setCategory] = useState("");
  const [type, setType] = useState("");
  const [formLocation, setFormLocation] = useState({
      streetAddress: "",
      aptSuite: "",
      city: "",
      thana: "",
      district: ""
  });
  const [personCount, setPersonCount] = useState(1);
  const [bedroomCount, setBedroomCount] = useState(1);
  const [bathroomCount, setBathroomCount] = useState(1);
  const [balconyCount, setBalconyCount] = useState(0);
  const [amenity, setAmenity] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [formDescription, setFormDescription] = useState({
      title: "",
      description: "",
      highlight: "",
      highlightDetails: "",
      price: 0
  });

  const creatorId = useSelector((state) => state.user._id);
  const navigate = useNavigate();

  const handlePost = async (e) => {
      e.preventDefault();
      try {
          const listingForm = new FormData();
          listingForm.append("creator", creatorId);
          listingForm.append("category", category);
          listingForm.append("type", type);
          listingForm.append("streetAddress", formLocation.streetAddress);
          listingForm.append("aptSuite", formLocation.aptSuite);
          listingForm.append("city", formLocation.city);
          listingForm.append("thana", formLocation.thana);
          listingForm.append("district", formLocation.district);
          listingForm.append("personCount", personCount);
          listingForm.append("bedroomCount", bedroomCount);
          listingForm.append("bathroomCount", bathroomCount);
          listingForm.append("balconyCount", balconyCount);
          listingForm.append("amenity", amenity.join(',')); // Join amenity array into a comma-separated string
          listingForm.append("title", formDescription.title);
          listingForm.append("description", formDescription.description);
          listingForm.append("highlight", formDescription.highlight);
          listingForm.append("highlightDetails", formDescription.highlightDetails);
          listingForm.append("price", formDescription.price);

          photos.forEach((photo) => {
              listingForm.append("listingPhotos", photo);
          });

          const response = await fetch("http://localhost:3000/listings/create", {
              method: "POST",
              body: listingForm
          });

          if (response.ok) {
              navigate('/');
          }
      } catch (err) {
          console.log("Publishing listing failed", err.message);
      }
  };

  const handleSelectedAmenity = (item) => {
      if (amenity.includes(item.name)) {
          setAmenity(amenity.filter(selected => selected !== item.name));
      } else {
          setAmenity([...amenity, item.name]);
      }
  };

  const handleChangeLocation = (e) => {
      const { name, value } = e.target;
      setFormLocation({
          ...formLocation,
          [name]: value
      });
  };

  const handleUploadPhotos = (e) => {
      const newPhotos = Array.from(e.target.files);
      setPhotos((prevPhotos) => [...prevPhotos, ...newPhotos]);
  };

  const handleDragPhoto = (result) => {
      if (!result.destination) return;
      const items = Array.from(photos);
      const [reorderedItem] = items.splice(result.source.index, 1);
      items.splice(result.destination.index, 0, reorderedItem);
      setPhotos(items);
  };

  const handleRemovePhoto = (indexToRemove) => {
      setPhotos((prevPhotos) =>
          prevPhotos.filter((_, index) => index !== indexToRemove)
      );
  };

  const handleChangeDescription = (e) => {
      const { name, value } = e.target;
      setFormDescription({
          ...formDescription,
          [name]: value
      });
  };
 
//  console.log(amenity);
//  console.log(formDescription)
  return (
    <div className={`${styles['whole']} `}>
      <Navbar />
      
      <div className={`${styles['create-listing']} container`}>
        <h1>Publish Your Place</h1>
        <form onSubmit = {handlePost}>
          <div className={`${styles['create-listing_step1']} container`}>
            <h2>Tell us something About Your Place</h2>
            <hr />
            <h3>What Categories Do you think most relevant with your Place?</h3>


            <div className={`${styles['category-list']} container`}>
              {categories?.map((item, index) => {
                const IconComponent = iconMap[item.icon];
                return (
           
                  <div className={`${styles.category}
                        ${category === item.label ? styles.selected : ''} container`} 
                         key={index} 
                      onClick={() => setCategory(item.label)} >      
                    <div className={`${styles['category_icon']} container`}>
                      {IconComponent && <IconComponent />}
                    </div>
                    <p>{item.label}</p>
                  </div>

                );
              })}
            </div>

            <h3>What type of place you want?</h3>

            <div className={`${styles['type-list']} container`}>
              {types?.map((item, index) => {
                const IconComponent = iconMap[item.icon];
                return (

                  <div className={`${styles.type} ${type === item.name ? styles.selected : ''} container`} 
                  key={index}
                  onClick = {() => setType(item.name)}
                  >

                    <div className={`${styles['type_icon']} container`}>
                      {IconComponent && <IconComponent />}
                    </div>

                    <div className={`${styles['type_text']} container`}>
                    <p>-</p>
                      <p>{item.name} </p>
                      <p>.</p>
                      <p>{item.description} </p>
                    </div>

                  </div>

                );
              })}
            </div>



            <h3>Where is your place?</h3>

            <div className={`${styles['full']} container`}>

              <div className={`${styles['location']} container`}>
                <p>Street address</p>
                <input type="text" 
                placeholder="street Address" 
                name="streetAddress" 
                value={formLocation.streetAddress}
                onChange = {handleChangeLocation}
                required />
              </div>

            </div>


            <div className={`${styles['half']} container`}>

              <div className={`${styles['location']} container`}>
                <p>Apartment, Suite (if applicable)</p>
                <input type="text"
                 placeholder='Apt., Suite (if applicable)' 
                 name="aptSuite" 
                 value={formLocation.aptSuite}
                 onChange = {handleChangeLocation}
                 required />
              </div>

              <div className={`${styles['location']} container`}>
                <p>City</p>
                <input type="text" 
                placeholder='City' 
                name="city" 
                value = {formLocation.city}
                onChange = {handleChangeLocation}
                required />
              </div>

            </div>


            <div className={`${styles['half']} container`}>

              <div className={`${styles['location']} container`}>
                <p>Thana</p>
                <input type="text"  
                placeholder='Thana' 
                name="thana" 
                value = {formLocation.thana}
                onChange = {handleChangeLocation}
                required />
              </div>

              <div className={`${styles['location']} container`}>
                <p>District</p>
                <input type="text"
                 placeholder='District' 
                 name="district"
                 value = {formLocation.district} 
                 onChange = {handleChangeLocation}
                 required />
              </div>

            </div>



            <h3>Say Some basics:</h3>


            <div className={`${styles['basics']} container`}>

              <div className={`${styles['basic']} container`}>
                <div>People:</div>
                <Person 
                sx={{ fontSize: "20px", cursor: "pointer", background:"transparent"  }}
                />

                <div className={`${styles['basic_count']} container`}>
                  <RemoveCircleOutline 
                  onClick = {()=>{personCount > 1 && setPersonCount(personCount - 1)}}
                  sx={{ fontSize: "20px", cursor: "pointer", background:"transparent" }} />
                  <div>{personCount}</div>
                  <AddCircleOutline 
                  onClick = {() => {
                    setPersonCount(personCount + 1)
                  }}
                  sx={{ fontSize: "20px", cursor: "pointer", background :"transparent"}} />
                </div>

              </div>

              <div className={`${styles['basic']} container`}>
                <div>Bedrooms:</div>
                <Bed
                 sx={{ fontSize: "20px", cursor: "pointer", background:"transparent"  }}
                 />

                <div className={`${styles['basic_count']} container`}>
                  <RemoveCircleOutline 
                  onClick = {()=>{bedroomCount > 1 && setBedroomCount(bedroomCount - 1)}}
                  sx={{ fontSize: "20px", cursor: "pointer", background:"transparent"  }} />
                  <div>{bedroomCount}</div>
                  <AddCircleOutline 
                  onClick = {()=>{setBedroomCount(bedroomCount + 1)}}
                  sx={{ fontSize: "20px", cursor: "pointer", background:"transparent"  }} />
                </div>

              </div>


              <div className={`${styles['basic']} container`}>
                <div>
                Bathrooms:
                </div>
               
                <Bathroom
                sx={{ fontSize: "20px", cursor: "pointer", background:"transparent"  }} />
                <div className={`${styles['basic_count']} container`}>
                  <RemoveCircleOutline 
                  onClick = {()=>{bathroomCount > 1 && setBathroomCount(bathroomCount - 1)}}
                  sx={{ fontSize: "20px", cursor: "pointer", background:"transparent"  }} />
                  <div>{bathroomCount}</div>

                  <AddCircleOutline 
                  onClick = {()=>{setBathroomCount(bathroomCount + 1)}}
                  sx={{ fontSize: "20px", cursor: "pointer", background:"transparent"  }} />
                </div>
              </div>


              <div className={`${styles['basic']} container`}>
                <div>Balcony:</div>
                <Balcony 
                sx={{ fontSize: "20px", cursor: "pointer", background:"transparent"  }}/>

                <div className={`${styles['basic_count']} container`}>
                  <RemoveCircleOutline 
                  onClick = {()=>{balconyCount > 0 && setBalconyCount(balconyCount - 1)}}
                  sx={{ fontSize: "20px", cursor: "pointer", background:"transparent"  }} />
                  <div>{balconyCount}</div>
                  <AddCircleOutline
                  onClick = {()=>{setBalconyCount(balconyCount + 1)}}
                  sx={{ fontSize: "20px", cursor: "pointer", background:"transparent"  }} />
                </div>

              </div>
            </div>
          </div>
          <div className={`${styles['create-listing_step2']} container`}>
            <h2>What Kind of facilities you have?</h2>
            <hr />
            <h3>Tell people What your Place offers ? Select Multiple</h3>
            <div className={`${styles['amenity-list']} container`}>
              {facilities?.map((item, index) => {
                const IconComponent = iconMap[item.icon];
  
                return (
                  <div 
                  className={`${styles.amenity}
                  ${amenity.includes(item.name) ? styles.selected : ''} container`}
                  key={index} onClick = {() => handleSelectedAmenity(item)}>
                    <div className={`${styles['amenity_icon']} container`}>
                      {IconComponent && <IconComponent />}
                    </div>
                    <p>{item.name}</p>
                  </div>
                );
              })}
            </div>
            <h3>Add photos of your place</h3>
            <DragDropContext onDragEnd={handleDragPhoto}>
              <Droppable droppableId="photos" direction="horizontal">
                {(provided) => (
                  <div className={`${styles['photos']} container`} {...provided.droppableProps} ref={provided.innerRef}>
                    {photos.length < 1 && (
                      <>
                        <input id="image" type="file" style={{ display: "none" }} accept="image/*" onChange={handleUploadPhotos} multiple />
                        <label htmlFor="image" className={`${styles['alone']} container`}>
                          <div className={`${styles['icon']} container`}>
                            <IoIosImages />
                          </div>
                          <p>Upload From Your device</p>
                        </label>
                      </>
                    )}

                    {photos.length > 0 && (
                      <>
                        {photos.map((photo, index) => {
                          return (
                            <Draggable key={index} draggableId={index.toString()} index={index}>
                              {(provided) => (
                                <div className={`${styles['photo']} container`} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                  <img src={URL.createObjectURL(photo)} alt="place" />
                                  <button type="button" className = {`${styles['btn']} container`} onClick={() => handleRemovePhoto(index)}>
                                    <BiTrash />
                                  </button>
                                </div>
                              )}
                            </Draggable>
                          );
                        })}
                        <input id="image" type="file" style={{ display: "none" }} accept="image/*" onChange={handleUploadPhotos} multiple />
                        <label htmlFor="image" className={`${styles['together']} container`}>
                          <div className={`${styles['icon']} container`}>
                            <IoIosImages />
                          </div>
                          <p>Upload From Your device</p>
                        </label>
                      </>
                    )}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
            <h3>Final Infomations for your Place</h3>
            <div className={`${styles['description']} container`}>
              <p>Title</p>
              <input type = "text" 
              placeholder = "Text" 
              name = "title" 
              value = {formDescription.title}
              onChange = {handleChangeDescription}
              required />
              <p>Description</p>
              <textarea type = "text" 
              placeholder = "Tell us about your place" 
              name = "description" 
               value = {formDescription.description}
              onChange = {handleChangeDescription}
              required />
              <p>Highlight</p>
              <input type = "text" 
              placeholder = "Highlight" 
              name = "highlight"
              value = {formDescription.highlight}
              onChange = {handleChangeDescription}
               required /> 
              <p>Highlight Details</p>
              <textarea type = "text" 
              placeholder = "Tell  your place" 
              name = "highlightDetails" 
               value = {formDescription.highlightDetails}
              onChange = {handleChangeDescription}
              required />
              <p>Price</p>
             
             
              <input type = "number"  
              placeholder = "4000" 
              name = 'price'
              className={`${styles['price']} container`}
              value={formDescription.price}
              onChange = {handleChangeDescription}
              required
              
              />
               <FaBangladeshiTakaSign 
               />
               </div>
          </div>
          <button className='submit' type = "submit">Create Your List</button>
        </form>
      </div>

    </div>
  );
};


export default CreateList;