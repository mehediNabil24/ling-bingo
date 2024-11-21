import React from "react";
import { NavLink, useLoaderData, useNavigate } from "react-router-dom";

const StartLearning = () => {
    const japan = useLoaderData(); 
    const navigate =useNavigate();
    const {id} =japan;
    

    return (
        <div className="w-11/12 mx-auto">
            <h1 className="text-4xl font-bold text-center my-8">
                Start Learning Vocabulary
            </h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                {
                    japan.map(jap => (
                        <div key={jap.id} className="card bg-gray-200 ">
                            <div className="card-body">
                                <h2 className="card-title ">Lesson-{jap.lesson_no}</h2>
                                
                                
                                    
                                        <NavLink className={'btn btn-primary'} to={`/details/${jap.id}`} >Start Lesson</NavLink>
                                    
                                
                            </div>
                        </div>
                    ))
                }
            </div>

            {/* Tutorial Section */}
      <div className="mt-12 px-8">
        <h2 className="text-2xl font-semibold mb-4 text-center">Learn the Basics</h2>
        <div className=" flex items-center justify-center">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/RSJbXBmjo4s?si=GL-np91U7oQSQ-_T" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>

      {/* View More Button */}
      <button
        className="btn  bg-blue-950 mt-8 text-bold text-white text-2xl block mx-auto"
        onClick={() => navigate('/tutorial')}
      >
        View More Tutorials
      </button>
    </div>
        
    );
};

export default StartLearning;
