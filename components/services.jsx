import React from "react";
import {
  FiLifeBuoy,
  FiDollarSign,
  FiUserCheck,
  FiBriefcase,
  FiBarChart2,
  FiTarget,
} from "react-icons/fi";

const features = [
  {
    icon: <FiDollarSign size={46} />,
    title: "Affordable Repairs",
    description:
      "Providing high-quality repairs at competitive prices. Ensuring affordability without compromising on service excellence.",
  },
  {
    icon: <FiUserCheck size={46} />,
    title: "Expert Technicians",
    description:
      "Skilled and experienced technicians dedicated to diagnosing and fixing appliance issues efficiently. Rest assured, your appliances are in good hands.",
  },
  {
    icon: <FiBriefcase size={46} />,
    title: "Wide Range of Services",
    description:
      "Offering repairs for various appliances, including washing machines, refrigerators, ovens, dishwashers, dryers, and more. Whatever the issue, we've got you covered.",
  },
];

const Services = () => {
  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl font-pj">
            Our Services
          </h2>
        </div>
        <div className="grid grid-cols-1 mt-10 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-0 xl:mt-24">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`md:p-8 lg:p-14 ${
                index > 0 ? "md:border-l md:border-gray-200" : ""
              } ${index > 2 ? "md:border-t" : ""}`}>
              {feature.icon}
              <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">
                {feature.title}
              </h3>
              <p className="mt-5 text-base text-gray-600 font-pj">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
