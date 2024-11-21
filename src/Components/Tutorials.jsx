import React from 'react';
import { NavLink } from 'react-router-dom';

const Tutorials = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <h1 className='font-semibold text-2xl  text-center'>Learn Language with videos</h1>
            <div className='mt-5 rounded-lg grid grid-cold-1 md:grid-cols-2 gap-10'>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/WMmg1iY50Hs?si=PJ1cXN2HFZDZMl1x" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/4MNnv5hsfYw?si=fJRk7rSKRqHmDGET" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/sISIVKJh_EA?si=H_yFnDuUfeqKMyoI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/80SbujIsWdg?si=fX9LRxQYkP4XuLxY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/U5994yjxPQ0?si=ct9hgVuo1FQg0Yd0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/ktr7twtzIHM?si=0n99oKREB5_C6Nmf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/ukwsC_k-Aag?si=TCutS2uAANTcou-W" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
           
            </div>
            <NavLink to={'/start-learning'} className={'btn bg-blue-950 text-white mt-4 flex justify-center w-[30%] items-center font-bold text-2xl block mx-auto'}>Learn the Vocabularies</NavLink>
        </div>
    );
};

export default Tutorials;