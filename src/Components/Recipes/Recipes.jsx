import { useEffect, useState } from "react";


const Recipes = () => {
    const [recipes,setRecipes]=useState([])

    const [wantCooks,setWantCooks]=useState([])

    const [startCooking,setStartCooking]=useState([])

    const [times,setTimes]=useState(0)

    const [calories,setCalories]=useState(0)
    
     
    useEffect(()=>{
        fetch('Recipes.json')
        .then(res=>res.json())
        .then(data=>setRecipes(data))
    },[])

   const handleWantToCook=wantToCook=>{

    const isExist= wantCooks.find(findCook=>findCook.id==wantToCook.id)
    if(!isExist){
        setWantCooks([...wantCooks,wantToCook])
    }
    else{
        alert('already existed')
    }
       
   }

const  handleRemoveCooking=wantCook=>{
   const remainingCooking=wantCooks.filter(remainingCook=>remainingCook.id!==wantCook.id  ) 
   setWantCooks(remainingCooking)

}

const handleStartCooking=(cooking)=>{
 const newStartCooking=[...startCooking,cooking]
 setStartCooking(newStartCooking)
 
}


const handleTotalTime=(time)=>{
      setTimes(times+parseInt(time.time))
      console.log(times)
}

const handleTotalCalories=(calorie)=>{
    setCalories(calories+parseInt(calorie.calories))
}



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
                       <img src={recipe.img} alt="" srcset="" /> 
                        <h3>{recipe.title}</h3>
                        <p>{recipe.description}</p>
                        <h3>ingredient : {recipe.ingredients.length}</h3>
                       {
                        recipe.ingredients.map((ingredient, index)=><div key={index}>
                            <ul>{ingredient}</ul>
                        </div>)
                       }

                        <h5>time : {recipe.time}</h5>
                        <h5>calories : {recipe.calories}</h5>
                        <button onClick={()=>handleWantToCook(recipe)} className="bg-orange-100">Want to cook</button>
                    </div>)
                }
                
            </div>

            <div>
                <h1>Want To Cook {wantCooks.length}</h1>
                {
                    wantCooks.map(wantCook=><div key={wantCook.id}>
                        <h1>{wantCook.title}</h1>
                        <h3>{wantCook.title}minutes</h3>
                        <h3>{wantCook.calories} calories</h3>
                        <button onClick={()=>{handleRemoveCooking(wantCook),handleStartCooking(wantCook),handleTotalTime(wantCook),handleTotalCalories(wantCook)}} className="bg-stone-800 text-white">preparing</button>
                    </div>)
                }
            </div>
            <div>
                <h1>Currently Cooking : {startCooking.length}</h1>
                {
                  startCooking.map(cooking=><div key={cooking.id}>
                    <h2>{cooking.title}</h2>
                  </div>)  
                }
            </div>

            <div>
                 <h1>total time : {times}</h1>
            </div>
            <div>
                <h1>total calories : {calories}</h1>
            </div>
            
        </div>
    );
};

export default Recipes;
