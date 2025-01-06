'use client';

import CuratedFeaturedCard from '@/components/common/cards/CuratedFeaturedCard';
import CustomButton from '@/components/common/CustomButton';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
} from '@/components/ui/carousel';
import { spotlightProducts } from '@/utils/SiteData';

const CarouselLayout = ({ children, className,handleClick }) => {
	return (
		<Carousel
			opts={{
				align: 'start',
			}}
			className={`w-full lg:max-w-6xl mx-auto ${className}`}
		>
			<CarouselContent className='-ml-2 md:-ml-4'>
				{children}
			</CarouselContent>
			<CarouselNext className='hidden lg:block' />
			<CustomButton
				text='View all'
				handleClick={handleClick}
				className='flex md:hidden items-center justify-center whitespace-nowrap mt-5 w-[130px] ml-1'
			/>
		</Carousel>
	);
};

export default CarouselLayout;
