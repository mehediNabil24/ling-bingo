import React from 'react';
import { useLoaderData } from 'react-router-dom';

const LearningDetails = () => {
    const {id,word,pronunciation,meaning,part_of_speech,difficulty,lesson_no,when_to_say,example} =useLoaderData()
    return (
        <div className='w-11/12 mx-auto '>
            <h1 className='text-2xl font-bold text-center'>Lesson no-{lesson_no}</h1>
            <div className="card bg-base-100  shadow-xl flex flex-col justify-center items-center">
  <div className="card-body ">
    <h2 className="card-title">{word}</h2>
    <p className='font-semibold'>English Meaning: <span className='font-bold text-2xl' >{meaning}</span></p>
    <p className='font-semibold'>Pronunciation: <span className='font-bold text-2xl'>{pronunciation}</span></p>
    <p className='font-semibold'>Difficulty Level: <span className='font-bold text-2xl' >{difficulty}</span></p>
    {
        difficulty =='easy'&& "bg-yellow-500"
    }
    <p>part_of_speech: {part_of_speech}</p>
    
    <div className="card-actions flex  justify-between mt-5 gap-10">
        <button className='btn btn-neutral' onClick={()=>document.getElementById('my_modal_5').showModal()}>When to Say</button>
      <button className="btn btn-primary">Back to Lesson</button>
    </div>
  </div>
</div>

{/* Open the modal using document.getElementById('ID').showModal() method */}

<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-lg">{when_to_say}</h3>
    <p className="py-4">{example}</p>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
            
        </div>
    );
};

export default LearningDetails;