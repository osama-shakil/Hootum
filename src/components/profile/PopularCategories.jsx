'use client';
import React from 'react';
import SectionHeader from '../common/SectionHeader';
import CarouselLayout from './carousel/Carousel';
import { CarouselItem } from '../ui/carousel';
import PopularCategoryCard from '../common/cards/PopularCategoryCard';
import { popularCategories } from '@/utils/SiteData';
import { useRouter } from 'next/navigation';

const PopularCategories = () => {
	const router = useRouter(); // Initialize the Next.js router
	const handleClick = () => {
		// router.push('/allCategories?isBidding=false');
		// if (typeof window !== 'undefined') {
			// Store the isBidding value in localStorage
			// localStorage.setItem('isBidding', 'false');

			// Navigate to the destination page
			router.push('/allCategories');
		// }
	};
	const handleCardClick = () => {
	
			router.push('/viewAllCategories');
		
	};


	return (
		<>
			<SectionHeader
				title='POPULAR BY CATEGORIES'
				btnText={'View all'}
				handleClick={handleClick}
			/>
			<CarouselLayout className="my-16" handleClick={handleClick}>
				{popularCategories.map(product => (
					<CarouselItem
						key={product.id}
						className='pl-2 md:pl-4 md:basis-1/2 lg:basis-1/4 text-center'
					>
						<PopularCategoryCard key={product.id} {...product} handleCardClick={handleCardClick} />
					</CarouselItem>
				))}
			</CarouselLayout>
		</>
	);
};

export default PopularCategories;
