import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { getMealById } from '../api';
import { Home } from './home';

function Recipe() {
    const [recipe, setRecipe] = useState({});
    const { id } = useParams();
    const navigate = useNavigate()
    const goBack = () => navigate(-1);

    useEffect(()=>{
        getMealById(id).then((data) => setRecipe(data.meals[0]))
    }, [id]);
    return (
        <>
            {!recipe.idMeal ? (
                <Home/>
            ) : (
                <div className="recipe">
                <img src={recipe.strMealThumb}/>
                <h1>{recipe.strMeal}</h1>
                <h6>Category: {recipe.strCategory}</h6>
                {recipe.strArea ? <h6>Area: {recipe.strArea}</h6>
                : null
                }
                <p>{recipe.strInstructions}</p>
            </div>
            )}
            

            <table className='centered'>
                <thead>
                    <tr>
                        <th>Ingredient</th>
                        <th>Measure</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(recipe).map((key) =>{
                        if (key.includes("Ingredient") && recipe[key]){
                            return(
                                <tr key={key}>
                                    <td>{recipe[key]}</td>
                                    <td>{recipe[`strMeasure${key.slice(13)}`]}</td>
                                </tr>
                            );
                        }
                        return null;
                    })}
                </tbody>
            </table>

            <button className='btn' onClick={goBack}>
                Go Back
            </button>
        </>
    )
}

export {Recipe}