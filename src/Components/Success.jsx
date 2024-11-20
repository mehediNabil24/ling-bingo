import React from 'react';
import CountUp from 'react-countup';

const Success = () => {
    const stats = [
        { id: 1, label: 'Happy Users', value: 500, color: 'text-blue-600' },
        { id: 2, label: 'Lessons', value: 10, color: 'text-green-600' },
        { id: 3, label: 'Vocabularies', value: 200, color: 'text-red-600' },
        { id: 4, label: 'Tutorials', value: 8, color: 'text-purple-600' },
      ];
    
    return (
        <section className="py-10 bg-gray-200 my-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Our Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center"
            >
              <h3 className={`text-5xl font-extrabold ${stat.color}`}>
                <CountUp end={stat.value} duration={3} />
              </h3>
              <p className="text-xl font-semibold mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    );
};

export default Success;