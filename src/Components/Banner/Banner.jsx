

const Banner = () => {
  const banner="https://i.ibb.co/L0QCSnf/jason-briscoe-7-MAj-XGUma-Pw-unsplash.jpg"
    return (
        <div className = "bg-cover h-screen"
        style={{backgroundImage: `url(${banner})`}}>

         <div className="flex flex-col items-center p-20">
                <div className="m-5">
                     <h1 className="text-3xl text-white">This Silky Risotto Embraces Zucchinis Moisture</h1>
                     <p className="text-white">The classic French custard is easy to make anywhere, anytime, and with all sorts of mix-ins.</p>
                </div>
                
                
                <div className="flex  gap-4"> 
                        <button className="bg-slate-400 rounded-xl" >Explor Now</button>
                        <button className="bg-slate-400 rounded-xl">Our Feedback</button>
                 </div>
            
               
                
            </div>
            
                
            
          
                
            
          


        </div>
    );
};

export default Banner;