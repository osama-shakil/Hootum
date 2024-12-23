'use client';
import React, { useEffect, useState } from "react";
import Image from "next/image";

import ExploreArtCard from "../common/cards/ExploreArtCard";
import MarketplaceModal from "../common/MarketplaceModal";

const QuestionsSection = () => {

  const [open, setOpen] = useState(false); // Modal visibility state
	const [hasTriggered, setHasTriggered] = useState(false); // Track if the modal has been shown

	useEffect(() => {
		const section = document.getElementById('unique-section');

		if (!section) {
			console.warn('Section with ID "unique-section" not found.');
			return;
		}

		// Observe section visibility
		const observer = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting && !hasTriggered) {
						setOpen(true); // Show modal when section is visible
						setHasTriggered(true); // Mark as shown
					}
				});
			},
			{ threshold: 0.5 } // Trigger when 50% of the section is visible
		);

		observer.observe(section);

		return () => {
			if (section) observer.unobserve(section); // Cleanup observer on unmount
		};
	}, [hasTriggered]); // Dependency on `hasTriggered`

	const toggle = state => setOpen(state);
	const onAgreed = dontShowAgain => {
		console.log("Don't show again:", dontShowAgain);
	};
  return (
    <>
      			
    <div className="relative  h-screen  md:min-h-[90vh]">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/backgrounds-images/Container.png" // Replace with your actual image path
          alt="Background"
          fill
          className="lg:object-fill  object-cover"
          priority
        />
      </div>

      {/* Content Container */}
      <div className="hidden md:block absolute top-[13%] left-1/2 -translate-x-1/2">
        <ExploreArtCard
          title="Secure on blockchain"
          description="Browse, create, sell, buy, auction or secure
your valuable and collectible items on our
Blockchain."
          text="Know more"
          className="max-w-sm"
        />
      </div>
      <div className="hidden md:block absolute top-[45%] left-[4%] xl:left-[16%] xl:top-[48%]">
        <ExploreArtCard
          title="What is Hootum?"
          description="Bangladesh's first Blockchain
enabled physical+digital art &
collectibles marketplace."
          text="Know more"
          className="max-w-xs"
        />
      </div>
      <div id='unique-section' className="hidden md:block absolute top-[45%] right-[1%] xl:right-[7%] xl:top-[45%]">
        <ExploreArtCard
          title="Explore Hootum Wallet"
          description="A pioneering Smart Wallet in the country,
securely storing art assets as NFTs on the
private blockchain. Conduct transactions
in Bangladeshi taka, compliant with all
policies and regulations."
          text="Know more"
          className="max-w-md"
        />
      </div>
{/* Mobile Cards */}
      <div className="md:hidden grid grid-cols-1 gap-4 mt-3 ">
        <div className="">
          <ExploreArtCard
            title="Secure on blockchain"
            description="Browse, create, sell, buy, auction or secure
your valuable and collectible items on our
Blockchain."
            text="Know more"
            className="max-w-sm"
          />
        </div>
        <div className="">
          <ExploreArtCard
            title="What is Hootum?"
            description="Bangladesh's first Blockchain
enabled physical+digital art &
collectibles marketplace."
            text="Know more"
            className="max-w-xs"
          />
        </div>
        <div className=" " id='unique-section'>
          <ExploreArtCard
            title="Explore Hootum Wallet"
            description="A pioneering Smart Wallet in the country,
securely storing art assets as NFTs on the
private blockchain. Conduct transactions
in Bangladeshi taka, compliant with all
policies and regulations."
            text="Know more"
            className="max-w-md"
          />
        </div>
      </div>
      {/* Navigation Dots */}
      <div className="md:flex hidden  absolute bottom-8 left-1/2 transform -translate-x-1/2  gap-2">
        <div className="w-3 h-3 rounded-full bg-black"></div>
        <div className="w-3 h-3 rounded-full bg-white "></div>
        <div className="w-3 h-3 rounded-full bg-white "></div>
        <div className="w-3 h-3 rounded-full bg-white "></div>
      </div>
    </div>
    <MarketplaceModal open={open} toggle={toggle} onAgreed={onAgreed} />
    </>
  );
};

export default QuestionsSection;
