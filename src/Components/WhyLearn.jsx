import React from 'react';
import { FaLanguage, FaHandshake, FaGlobe, FaLightbulb, FaBrain } from 'react-icons/fa';

const WhyLearn = () => {
  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-6">Why Learn a New Language?</h2>
        <p className="text-lg text-center text-gray-600 mb-10">
          Learning a new language is more than just words—it’s about connecting, understanding, and unlocking new opportunities. Discover how our platform can make your journey enriching and effective.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Feature 1 */}
          <div className="flex items-start gap-4">
            <i className="text-blue-600 text-3xl">
              <FaLanguage />
            </i>
            <div>
              <h3 className="font-bold text-lg">Enhance Communication Skills</h3>
              <p className="text-gray-600">Speak with confidence and clarity in diverse settings.</p>
            </div>
          </div>
          {/* Feature 2 */}
          <div className="flex items-start gap-4">
            <i className="text-green-600 text-3xl">
              <FaHandshake />
            </i>
            <div>
              <h3 className="font-bold text-lg">Build Stronger Relationships</h3>
              <p className="text-gray-600">Connect with people from different cultures and backgrounds.</p>
            </div>
          </div>
          {/* Feature 3 */}
          <div className="flex items-start gap-4">
            <i className="text-purple-600 text-3xl">
              <FaGlobe />
            </i>
            <div>
              <h3 className="font-bold text-lg">Expand Global Opportunities</h3>
              <p className="text-gray-600">Open doors to careers, travel, and global networking.</p>
            </div>
          </div>
          {/* Feature 4 */}
          <div className="flex items-start gap-4">
            <i className="text-yellow-600 text-3xl">
              <FaLightbulb />
            </i>
            <div>
              <h3 className="font-bold text-lg">Boost Creativity and Problem Solving</h3>
              <p className="text-gray-600">Learning a new language stimulates cognitive skills.</p>
            </div>
          </div>
          {/* Feature 5 */}
          <div className="flex items-start gap-4">
            <i className="text-red-600 text-3xl">
              <FaBrain />
            </i>
            <div>
              <h3 className="font-bold text-lg">Sharpen Your Mind</h3>
              <p className="text-gray-600">Enhance memory and multitasking abilities through language learning.</p>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <button className="btn btn-primary">Start Learning Now</button>
        </div>
      </div>
    </section>
  );
};

export default WhyLearn;
