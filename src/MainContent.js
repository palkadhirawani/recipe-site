// import React, {useEffect, useState} from 'react';

// const MainContent = () => {

//     const [top, setTop] = useState([]);

//     useEffect(() => {
//         topRecipes();
//     }, []);

//     const topRecipes = async () => {
//         const response = await fetch(`https://cors-anywhere.herokuapp.com/https://recipesapi.herokuapp.com/api`); 
//         const data = await response.json();
//         setTop(data.recipes);
//         console.log(data.recipes);
//     }

    
//     return (
//         <div>
//             <h3>TOP RATED RECIPES</h3>
//             {top.slice(0, 5).map((toprec) => (
//                 <div className="toprec">
//                     <img src={toprec.image_url}></img>
//                     <p>{toprec.title}</p>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default MainContent;