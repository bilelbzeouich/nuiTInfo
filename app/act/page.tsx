"use client"
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";

const DonatePage = () => {
  const walletAddress = "0x1234abcd5678efgh9012ijklmnopqrst3456uvwx";
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(walletAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
  };

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-900 mb-4">Take Action</h1>
        <p className="text-lg text-blue-700 max-w-3xl mx-auto">
          Your donation helps protect our oceans, safeguard marine life, and promote sustainable practices that ensure a healthier planet for future generations.
        </p>
      </section>

      {/* Why Donate Section */}
      <section className="bg-blue-50 rounded-lg shadow-md p-8 mb-12">
        <h2 className="text-3xl font-bold text-blue-900 mb-4">Why Should You Donate?</h2>
        <ul className="text-blue-700 space-y-4">
          <li>🌊 Support global initiatives to clean up ocean plastic.</li>
          <li>🐠 Fund marine life protection and habitat restoration.</li>
          <li>🔬 Drive research into ocean and climate change interdependencies.</li>
          <li>🌎 Empower education programs to inspire sustainable living.</li>
        </ul>
      </section>

      {/* Wallet Address Section */}
      <section className="text-center mb-12">
        <h2 className="text-3xl font-bold text-blue-900 mb-4">Donate with Crypto</h2>
        <p className="text-lg text-blue-700 mb-6">
          Use the wallet address below to donate securely via cryptocurrency.
        </p>
        <div className="flex items-center justify-center bg-blue-100 rounded-lg shadow-md p-4">
          <span className="text-blue-800 font-mono break-all">{walletAddress}</span>
          <Button
            size="sm"
            variant="outline"
            className="ml-4"
            onClick={handleCopy}
          >
            <Copy className="mr-2 h-4 w-4" />
            {copied ? "Copied!" : "Copy"}
          </Button>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <h3 className="text-2xl font-bold text-blue-900 mb-4">
          Every Donation Makes a Difference
        </h3>
        <p className="text-lg text-blue-700 mb-6">
          Your contribution helps us take bold steps toward a sustainable future. Together, we can protect the oceans and our planet.
        </p>
        <Button
          size="lg"
          className="bg-green-600 hover:bg-green-700"
          onClick={() => (window.location.href = "/")}
        >
          Back to Home
        </Button>
      </section>
    </div>
  );
};

export default DonatePage;
