'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import ExploreArtCard from '../common/cards/ExploreArtCard';
import MarketplaceModal from '../common/MarketplaceModal';

const QuestionsSection = () => {

	return (
		<>
			<div className='relative  h-full md:h-screen mb-3 px-2 md:px-0 md:mb-0 md:min-h-[90vh]'>
				{/* Background Image */}
				<div className='absolute inset-0 w-full h-full z-0'>
					<Image
						src='/backgrounds-images/Container.svg' // Replace with your actual image path
						alt='Background'
						fill
						className='object-cover'
						priority
					/>
				</div>

				{/* Content Container */}
				<div className='hidden md:block absolute top-[13%] left-1/2 -translate-x-1/2'>
					<ExploreArtCard
						title='Secure on blockchain'
						description='Browse, create, sell, buy, auction or secure
your valuable and collectible items on our
Blockchain.'
						text='Know more'
						className='max-w-sm'
					/>
				</div>
				<div className='hidden md:block absolute top-[45%] left-[4%] xl:left-[16%] xl:top-[48%]'>
					<ExploreArtCard
						title='What is Hootum?'
						description="Bangladesh's first Blockchain
enabled physical+digital art &
collectibles marketplace."
						text='Know more'
						className='max-w-xs'
					/>
				</div>
				<div
					id='unique-section'
					className='hidden md:block absolute top-[45%] right-[1%] xl:right-[7%] xl:top-[45%]'
				>
					<ExploreArtCard
						title='Explore Hootum Wallet'
						description='A pioneering Smart Wallet in the country,
securely storing art assets as NFTs on the
private blockchain. Conduct transactions
in Bangladeshi taka, compliant with all
policies and regulations.'
						text='Know more'
						className='max-w-md'
					/>
				</div>
				{/* Mobile Cards */}
				<div className='md:hidden grid grid-cols-1 gap-4 mt-3 '>
					<div className=''>
						<ExploreArtCard
							title='What is Hootum?'
							description="Bangladesh's first Blockchain
enabled physical+digital art &
collectibles marketplace."
							text='Know more'
							// className='max-w-sm'
						/>
					</div>
					<div className=''>
						<ExploreArtCard
							title='Secure on blockchain'
							description='Browse, create, sell, buy, auction or secure
your valuable and collectible items on our
Blockchain.'
							text='Know more'
							// className='max-w-sm'
						/>
					</div>
					<div className=' ' id='unique-section'>
						<ExploreArtCard
							title='Explore Hootum Wallet'
							description='A pioneering Smart Wallet in the country,
securely storing art assets as NFTs on the
private blockchain. Conduct transactions
in Bangladeshi taka, compliant with all
policies and regulations.'
							text='Know more'
							// className='max-w-sm'
						/>
					</div>
				</div>
				{/* Navigation Dots */}
				{/* <div className='md:flex hidden  absolute bottom-8 left-1/2 transform -translate-x-1/2  gap-2'>
					<div className='w-3 h-3 rounded-full bg-black'></div>
					<div className='w-3 h-3 rounded-full bg-white '></div>
					<div className='w-3 h-3 rounded-full bg-white '></div>
					<div className='w-3 h-3 rounded-full bg-white '></div>
				</div> */}
			</div>
		</>
	);
};

export default QuestionsSection;
