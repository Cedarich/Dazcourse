import React from "react";

const EcommerceMobileAppDesign = () => {
  return (
    <div className="max-w-4xl mx-auto  p-4 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-center text-purple-700 mb-4">
        E-Commerce Mobile App Design Using Figma
      </h1>

      <div className="mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Overview</h2>
        <p className="text-gray-600">
          Color is perception. Our eyes see something (the sky, for example),
          and data sent from our eyes to our brains tells us it’s a certain
          color (blue). Objects reflect light in different combinations of
          wavelengths. Our brains pick up on those wavelength combinations and
          translate them into the phenomenon we call color.
        </p>
        <p className="text-gray-600">
          Humans see colors in light waves. Mixing light—or the additive color
          mixing model—allows you to create colors by mixing red, green, and
          blue light sources of various intensities. The more you add, the
          brighter the color becomes. If you mix all three colors of light, you
          get pure, white light.
        </p>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-semibold text-gray-800">QnA</h2>
        <p className="text-gray-600">{/* Add QnA content here */}</p>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Notes</h2>
        <p className="text-gray-600">{/* Add Notes content here */}</p>
      </div>

      <div className="flex justify-center">
        <button className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition duration-300">
          See more
        </button>
      </div>
    </div>
  );
};

export default EcommerceMobileAppDesign;
