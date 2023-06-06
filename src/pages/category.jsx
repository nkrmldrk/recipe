import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getFilteredCategory } from '../api';

import { MealList } from '../components/mealList';

function Category() {
    const {name} = useParams();
    const [meals, setMeals] = useState([]);
    const navigate = useNavigate()
    const goBack = () => navigate(-1);

    useEffect(()=>{
        getFilteredCategory(name).then((data)=>setMeals(data.meals))
    }, [name])

    return (
        <>
            <button className='btn' onClick={goBack}>
                Go Back
            </button>
            <MealList meals={meals}/>
        </>
    )
}

export {Category}