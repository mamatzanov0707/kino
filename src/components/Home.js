import React from 'react';
import {data} from "./data/data";

const Home = () => {
    return (
        <div id='hero'>
            <div className='container'>
                <div className='hero'>
                    <h1>Вкусные рецепты</h1>
                    {
                        data.map((el,idx) =>(
                            <div key={idx}>
                                <h3>{el.name}</h3>
                             <ul>
                                 {
                                     el.ingredients.map(ingredients =>(
                                         <li key={ingredients.name}>
                                             <p>{ingredients.name}</p>
                                         </li>
                                     ))
                                 }
                             </ul>
                                <h2>Инструкция по приготовлению</h2>
                                <ol>
                                {
                                    el.steps.map(step =>(
                                        <li key={step}>
                                            <p>{step}</p>
                                        </li>
                                    ))
                                }
                                <hr/>
                                </ol>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;