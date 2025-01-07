import React from "react";

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div>
      <p className="text-yellow-500 text-center mb-1 mt-10">---{subHeading}---</p>
     <div className="max-w-sm mx-auto border-t-4 border-b-4 mb-10">
     <h3 className="text-4xl font-semibold text-center my-4 uppercase">
        {heading}
      </h3>
     </div>
    </div>
  );
};

export default SectionTitle;
