import { useEffect, useState } from "react";
import { CgAlarm } from "react-icons/cg";
import { AiOutlineFire } from "react-icons/ai";

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
        <h1 className="text-3xl text-center mb-7">Total Recipes :{recipes.length} </h1>
        <div className="flex ">
         <div className=" w-2/3" >
              
            <div  className="grid grid-cols-2 gap-4 mt-7 p-6 ">             
                  {
                      recipes.map(recipe=><div className=" bg-slate-100 " key={recipe.id}>
                          <img  src={recipe.img} alt="" srcset="" /> 
                           <h3 className="m-4">{recipe.title}</h3>
                           <p className="mb-4">{recipe.description}</p>
                        <div className="m-4">
                               <h3>ingredient : {recipe.ingredients.length}</h3>
                               {
                                 recipe.ingredients.map((ingredient, index)=><div key={index}>
                                <ul>{ingredient}</ul>
                                </div>)
                               } 
                         </div>

                          
                       <div className="flex items-center gap-5 my-4">
                            <div className="flex items-center gap-4">
                              <CgAlarm />
                              <h5> time : {recipe.time} minutes</h5>
                            </div>
                            <div className="flex items-center gap-4">
                             <AiOutlineFire />
                             <h5>calories : {recipe.calories}</h5>
                            </div>
                        
                       </div>
                        
                        <button onClick={()=>handleWantToCook(recipe)} className="bg-green-400 rounded-3xl mb-7">Want to cook</button>
                    </div>)
                }
                
            </div>
         </div>
         <div className="1/3">
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
        </div>    
    </div>
    );
};

export default Recipes;
