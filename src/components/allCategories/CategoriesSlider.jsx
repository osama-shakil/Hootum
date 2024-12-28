'use client';
import React from 'react';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from '@/components/ui/carousel';
import { useEffect, useState } from 'react';
import { heroSlides } from '@/utils/SiteData';
import CarouselSlide from '../landing/herosection/CarouselSlide';
import CategoriesCarouselSlide from './CategoriesCarouselSlide';

const CategoriesSlider = () => {
	const [activeSlide, setActiveSlide] = useState(0);
	const [api, setApi] = useState();
	const allCategorySlides = [
		{
			id: 1,
			title: 'Fine Art',
			description:
				'Elevate your surroundings with captivating paintings, sculptures, and more. Dive into the artistry and find the masterpiece that speaks to you. Start your art journey now!',
			image: '/allcategories/categories (5).svg',
		},
		{
			id: 2,
			title: 'Sculpture',
			description:
				'Elegant hand-carved sculpture crafted from high-quality stone, showcasing intricate details and a timeless design. Perfect as a centerpiece for home decor or as a unique gift. Its smooth finish and artistic expression make it a standout addition to any collection.',
			image: '/allcategories/categories (4).svg',
		},
		{
			id: 3,
			title: 'Watches',
			description:
				'Stylish and meticulously crafted watches that combine timeless design with reliable functionality. Whether you prefer classic elegance, modern minimalism, or bold statement pieces, our collection offers something for every taste. Perfect for everyday wear or special occasions, these watches are the ultimate accessory to elevate your style.',
			image: '/allcategories/categories (3).svg',
		},
		{
			id: 4,
			title: 'Digital Art',
			description:
				'Vibrant digital artwork blending creativity and technology to deliver striking visuals. Each piece is meticulously designed, offering high-resolution detail and dynamic color. Perfect for enhancing any space, whether displayed on screens or printed for wall art. Ideal for art lovers, modern decor enthusiasts, or as a unique digital collectible.',
			image: '/allcategories/categories (2).svg',
		},
		{
			id: 5,
			title: 'Antique Watch',
			description:
				'Discover the Perfect Timepiece to Elevate Your Style. Uncover History on Your Wrist – Each Watch Tells a Unique Story. Embrace Vintage Luxury with Our Curated Collection.',
			image: '/allcategories/categories (1).svg',
		},
	];

	// Auto-slide effect
	useEffect(() => {
		if (!api) return;

		const interval = setInterval(() => {
			api.scrollNext();
		}, 10000);

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
					{allCategorySlides.map((slide, index) => (
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
