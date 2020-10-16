import React from "react";
import './RecipeList.css';
import {Link} from 'react-router-dom';

const RecipeList = ({title, image, rec_id}) => {
    
    return(
        <div className="full">
            <Link to={`/search/${rec_id}`}>
                <div className="hello">
                    <div className="qwerty">
                        <img src={image} alt="recipe"></img>
                        <p>{title}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default RecipeList;