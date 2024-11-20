import React from 'react';
import about from '../assets/about.jpeg'

const About = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src={about}
      className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Our Goal</h1>
      <p className="py-6">
      Our mission is to make learning languages fun, engaging, and effective. We provide structured lessons, curated vocabularies, and real-world examples to enhance your skills. Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta atque saepe quaerat tempora. Perspiciatis quisquam omnis repellat suscipit dolor rem libero possimus ab, voluptatibus saepe laudantium voluptas quos ipsam atque facilis rerum aliquid adipisci reprehenderit sint minima. Nemo non quasi sunt. Pariatur odio ducimus officiis eos nisi numquam consequatur! Tenetur et cumque, molestias quidem iure sequi voluptate eius ab, .
      </p>
      <button className="btn btn-primary">Start Learning now</button>
    </div>
  </div>
</div>
    );
};

export default About;