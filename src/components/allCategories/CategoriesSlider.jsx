'use client';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from '@/components/ui/carousel';
import { useEffect, useState } from 'react';
import CategoriesCarouselSlide from './CategoriesCarouselSlide';

const CategoriesSlider = ({ allCategorySlides }) => {
	const [activeSlide, setActiveSlide] = useState(0);
	const [api, setApi] = useState();

	// Auto-slide effect
	useEffect(() => {
		if (!api) return;

		const interval = setInterval(() => {
			api.scrollNext();
		}, 7000);

		return () => clearInterval(interval);
	}, [api]);

	// Handle slide change
	const handleSlideChange = index => {
		setActiveSlide(index);
		api?.scrollTo(index);
	};

	return (
		<div>
			<Carousel
				className='w-full h-full'
				setApi={setApi}
				onSelect={index => setActiveSlide(index)}
				opts={{
					// align: "start",
					// duration: 100,
					loop: true,
				}}
			>
				<CarouselContent className='w-full h-full'>
					{allCategorySlides?.map((slide, index) => (
						<CarouselItem key={slide.id}>
							<CategoriesCarouselSlide
								slide={slide}
								index={index}
								isActive={index === activeSlide}
								totalSlides={allCategorySlides.length}
								onSlideChange={handleSlideChange}
							/>
						</CarouselItem>
					))}
				</CarouselContent>
			</Carousel>
		</div>
	);
};

export default CategoriesSlider;
