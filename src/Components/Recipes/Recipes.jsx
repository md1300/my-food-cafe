import { useEffect, useState } from "react";


const Recipes = () => {
    const [recipes,setRecipes]=useState([])
     
    useEffect(()=>{
        fetch('Recipes.json')
        .then(res=>res.json())
        .then(data=>setRecipes(data))
    },[])
 
    return (
        <div className="m-5">
            {/* our header started */}
            <div className="text-center mb-8">
            <h1 className="text-3xl "> Our Recipes </h1>
            <p>With the help of soy sauce, Dijon mustard, and vinegar, a jar of apricot jam transforms chicken legs into a gorgeous weeknight dinner.</p>
            </div>
        {/* our header ended */}
            <div>
                <h1>Total Recipes :{recipes.length} </h1>

                {
                    recipes.map(recipe=><div key={recipe.id}>
                        
                        <h3>{recipe.title}</h3>
                        <h5>time : {recipe.time}</h5>
                        <h5>calories : {recipe.calories}</h5>
                        <button className="bg-orange-100">Want to cook</button>
                    </div>)
                }
                
            </div>

            <div>
                <h1>Want To Cook</h1>
            </div>
            
        </div>
    );
};

export default Recipes;
