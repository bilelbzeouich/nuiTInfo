"use client"
import React from "react";
import { Button } from "@/components/ui/button";

const LearnMorePage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-900 mb-4">
          Learn More About Ocean Body
        </h1>
        <p className="text-lg text-blue-700 max-w-3xl mx-auto">
          Welcome to Ocean Body, an educational platform exploring the profound
          parallels between human systems and ocean systems. Our mission is to
          inspire awareness and collective action to protect the ocean—a vital
          cornerstone of our planet's health and future.
        </p>
      </section>

      {/* Key Points Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="text-center p-6 bg-blue-50 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-blue-800 mb-4">
            Human & Ocean Systems
          </h3>
          <p className="text-blue-700">
            Just like the human body, the ocean plays a critical role in
            maintaining balance and supporting life. Explore how each part of
            the body finds an echo in ocean mechanisms.
          </p>
        </div>
        <div className="text-center p-6 bg-blue-50 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-blue-800 mb-4">
            Take Action
          </h3>
          <p className="text-blue-700">
            Learn how small, conscious actions can make a big impact in
            protecting marine ecosystems and securing a sustainable future for
            all.
          </p>
        </div>
        <div className="text-center p-6 bg-blue-50 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-blue-800 mb-4">
            Our Shared Future
          </h3>
          <p className="text-blue-700">
            The health of the ocean is deeply connected to the health of our
            planet. Together, we can build a future where both thrive in
            harmony.
          </p>
        </div>
      </section>

      {/* Featured Image Section */}
      <section className="text-center mb-12">
        <img
          src="/SaveOcean.jpeg"
          alt="Protect the Ocean"
          className="rounded-lg shadow-lg w-full max-w-4xl mx-auto"
        />
        <p className="text-sm text-blue-600 mt-2">
          Image: The vast and vital ocean, the lifeblood of our planet.
        </p>
      </section>

      {/* Call to Action */}
      <section className="text-center bg-white rounded-lg shadow-md p-8">
        <h3 className="text-3xl font-bold text-blue-900 mb-4">
          Ready to Dive In?
        </h3>
        <p className="text-lg text-blue-700 mb-6">
          Join us on a journey to understand the ocean's importance and learn
          how you can be part of the solution to protect it.
        </p>
        <Button size="lg" className="bg-green-600 hover:bg-green-700"     onClick={() => (window.location.href = "/comparisons")}>
          Start Exploring
        </Button>
      </section>
    </div>
  );
};

export default LearnMorePage;
