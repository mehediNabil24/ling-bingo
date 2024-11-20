import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Feedback = () => {
    const feedbacks = useLoaderData();
    console.log(feedbacks)
    return (
        <div className='grid grid-col-1 md:grid-cols-4 gap-5 '>
            {
                feedbacks.map(feed => (
                    <div key={feed.id} className="card card-compact bg-base-100  shadow-xl">
                        <figure >
                            <img  className='mr-2 rounded-full w-[100px] h-[100px] object-cover' src={feed.userImg} alt="user" />
                            <h2 className="card-title">{feed.name}</h2>
                        </figure>
                        <div className="card-body">
                            
                            <p>{feed.review}</p>
                            
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default Feedback;
