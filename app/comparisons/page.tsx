"use client"
import React from "react";
import { Button } from "@/components/ui/button";

const OceanBodyParallelsPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-900 mb-4">
          Ocean-Body Parallels
        </h1>
        <p className="text-lg text-blue-700 max-w-3xl mx-auto">
          Discover how the ocean mirrors the human body and explore actionable solutions to protect its delicate balance.
        </p>
      </section>

      {/* Parallels Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {/* Parallel 1 */}
        <div className="bg-blue-50 rounded-lg shadow-md p-6 text-center">
          <h3 className="text-2xl font-bold text-blue-800 mb-4">Ocean's Circulation</h3>
          <p className="text-blue-700">
            Just like our bloodstream circulates nutrients, ocean currents distribute vital resources across the globe.
          </p>
          <p className="text-green-600 mt-4 font-semibold">
            Solution: Reduce emissions to stabilize climate-driven disruptions.
          </p>
        </div>

        {/* Parallel 2 */}
        <div className="bg-blue-50 rounded-lg shadow-md p-6 text-center">
          <h3 className="text-2xl font-bold text-blue-800 mb-4">Marine Lungs</h3>
          <p className="text-blue-700">
            The ocean produces over 50% of the world's oxygen, similar to how lungs sustain the body with every breath.
          </p>
          <p className="text-green-600 mt-4 font-semibold">
            Solution: Support marine protected areas to preserve phytoplankton and coral reefs.
          </p>
        </div>

        {/* Parallel 3 */}
        <div className="bg-blue-50 rounded-lg shadow-md p-6 text-center">
          <h3 className="text-2xl font-bold text-blue-800 mb-4">Detox System</h3>
          <p className="text-blue-700">
            The ocean absorbs CO₂ and filters pollutants, akin to how the liver detoxifies the body.
          </p>
          <p className="text-green-600 mt-4 font-semibold">
            Solution: Reduce plastic waste and invest in green technologies.
          </p>
        </div>
      </section>

      {/* Featured Image Section */}
      <section className="text-center mb-12">
        <img
          src="/oceanBody.jpeg"
          alt="Ocean and Human Body Connection"
          className="rounded-lg shadow-lg w-full max-w-4xl mx-auto"
        />
        <p className="text-sm text-blue-600 mt-2">
          Image: Visualizing the parallels between human systems and ocean mechanisms.
        </p>
      </section>

      {/* Call to Action Section */}
      <section className="bg-white rounded-lg shadow-md p-8 text-center">
        <h3 className="text-3xl font-bold text-blue-900 mb-4">
          Every Action Counts
        </h3>
        <p className="text-lg text-blue-700 mb-6">
          By understanding these parallels, we can see that protecting the
          ocean is not just about the environment—it's about protecting life
          itself.
        </p>
        <Button
          size="lg"
          className="bg-green-600 hover:bg-green-700"
          onClick={() => (window.location.href = "/act")}
        >
          Go to Donate Page
        </Button>
      </section>
    </div>
  );
};

export default OceanBodyParallelsPage;
