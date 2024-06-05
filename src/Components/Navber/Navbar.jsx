
import { RiAccountCircleLine } from "react-icons/ri";
const Navbar = () => {
    return (
        <div className="grid grid-cols-3 gap-3 items-center mb-7">
           <div >
               <button className="text-3xl">Recipe Calories</button>
           </div>
           <div className="flex gap-5">
              <button>Home</button>
              <button>Recipes</button>
              <button>About</button>
              <button>Search</button>
           </div>
            
            <div className="flex gap-4 items-center">
                <input className="rounded-full " type="text" name="" placeholder="search me" id="" />
                <button className="bg-zinc-500"><RiAccountCircleLine /></button>
                

            </div>
        </div>
    );
};

export default Navbar;