// // Categories.jsx

// import React from 'react';
// import { categories } from '../data'; // Verify the path to your data file
// import { Link } from 'react-router-dom';

// const Categories = () => {
//   return (
//     <div>
//       <h1>Explore Home by Categories</h1>
//       <div className="category_list">
//         {categories?.slice(1, 7).map((category, index) => (
//           <Link to="" key={index}>
//             <div className="category">
//               <img src={category.img} alt={category.label} />
//               <div className="overlay"></div>
//               <div className="category_text">
//                 <div className="category_icon">
//                   {category.icon}
//                 </div>
//                 <p>{category.label}</p>
//               </div>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Categories;
