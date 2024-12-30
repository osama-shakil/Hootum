'use client';
import CategoriesSlider from '@/components/allCategories/CategoriesSlider';
import { Card, CardContent } from '@/components/ui/card';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import Image from 'next/image';
import React, { useState } from 'react';

const page = () => {
	const popularCategories = [
		{ id: 1, title: 'Fine Art', image: '/popular/fine-art.svg' },
		{ id: 2, title: 'Sculpture', image: '/popular/product-img.svg' },
		{ id: 3, title: 'Watches', image: '/popular/item-card.svg' },
		{ id: 4, title: 'Digital Art', image: '/popular/digit-product.svg' },
		{ id: 5, title: 'Fashion', image: '/popular/fashion.svg' },
		{ id: 6, title: 'Collectibles', image: '/popular/collectibles.svg' },
		{ id: 7, title: 'Jewelary', image: '/popular/jewelary.svg' },
		{ id: 8, title: 'Sneakers', image: '/popular/sneakers.svg' },
		{ id: 9, title: 'Books', image: '/popular/books.svg' },
		{ id: 10, title: 'Interior', image: '/popular/interior.svg' },
		{ id: 11, title: 'Bag', image: '/popular/bag.svg' },
		{ id: 12, title: 'Stickers', image: '/popular/Stickers.svg' },
	];
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

	return (
		<div className='md:container mx-auto pb-20'>
			<CategoriesSlider allCategorySlides={allCategorySlides} />
			<div className='flex flex-col md:flex-row items-start gap-2 sm:gap-4 w-full py-2 sm:py-4 md:mt-10 px-12 md:px-0'>
				<div className='flex flex-col sm:flex-row items-center justify-center md:justify-start gap-2 sm:gap-4 w-full py-2 sm:py-4'>
					<div className='w-2 sm:w-3 h-6 sm:h-8 bg-black'></div>
					<h2 className='text-2xl sm:text-lg md:text-4xl lg:text-5xl font-medium text-center sm:text-left'>
						All CATEGORIES
					</h2>
				</div>

				<div className='border border-black rounded-[5px] p-2 w-full md:w-[300px] md:mr-12'>
					{/* Search Input */}
					<div className='flex items-center rounded-lg px-1 py-2'>
						<input
							type='text'
							placeholder='search'
							className='flex-grow outline-none text-black text-[0.875rem]'
						/>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={2}
							stroke='black'
							className='w-5 h-5 mr-2'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0 0l5 5'
							/>
						</svg>
					</div>

					{/* Sort Dropdown */}
					<div className='mt-1'>
						<Select defaultValue='sort'>
							<SelectTrigger className='rounded-[5px] py-2 border-black focus:ring-0 focus:ring-offset-0'>
								<SelectValue />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value='sort'>sort</SelectItem>
								<SelectItem value='least'>
									Least liked
								</SelectItem>
							</SelectContent>
						</Select>
					</div>
				</div>
			</div>
			<div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 gap-14 px-12 md:px-0'>
				{popularCategories.map(category => (
					<Card className='overflow-hidden max-w-sm'>
						<CardContent className='p-0'>
							<div className='p-4'>
								<h3 className='font-medium text-lg'>
									{category.title}
								</h3>
							</div>
							<div className='relative aspect-square'>
								<Image
									src={category.image}
									alt='Digital illustration of medical eye treatment'
									fill
									className='object-cover'
									priority
								/>
							</div>
						</CardContent>
					</Card>
				))}
			</div>
			<div className='flex items-center justify-center mt-3 md:grid mt-14'>
				<button className='px-4 py-3 w-[214px] h-[44px] rounded-[20px] border border-black flex items-center justify-between bg-white'>
					<span>Load more</span>
					<svg
						width='14'
						height='14'
						viewBox='0 0 14 14'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M6.99992 0.333252C6.63173 0.333252 6.33325 0.631729 6.33325 0.999919V2.99992C6.33325 3.36811 6.63173 3.66659 6.99992 3.66659C7.36811 3.66659 7.66659 3.36811 7.66659 2.99992V0.999919C7.66659 0.631729 7.36811 0.333252 6.99992 0.333252Z'
							fill='black'
						/>
						<path
							d='M6.99992 10.3333C6.63173 10.3333 6.33325 10.6317 6.33325 10.9999V12.9999C6.33325 13.3681 6.63173 13.6666 6.99992 13.6666C7.36811 13.6666 7.66659 13.3681 7.66659 12.9999V10.9999C7.66659 10.6317 7.36811 10.3333 6.99992 10.3333Z'
							fill='black'
						/>
						<path
							d='M12.9999 6.33325C13.3681 6.33325 13.6666 6.63173 13.6666 6.99992C13.6666 7.36811 13.3681 7.66659 12.9999 7.66659H10.9999C10.6317 7.66659 10.3333 7.36811 10.3333 6.99992C10.3333 6.63173 10.6317 6.33325 10.9999 6.33325H12.9999Z'
							fill='black'
						/>
						<path
							d='M3.66659 6.99992C3.66659 6.63173 3.36811 6.33325 2.99992 6.33325H0.999919C0.631729 6.33325 0.333252 6.63173 0.333252 6.99992C0.333252 7.36811 0.631729 7.66659 0.999918 7.66659H2.99992C3.36811 7.66659 3.66659 7.36811 3.66659 6.99992Z'
							fill='black'
						/>
						<path
							d='M10.7712 2.28594C11.0315 2.02559 11.4536 2.02559 11.714 2.28594C11.9743 2.54629 11.9743 2.9684 11.714 3.22875L10.2998 4.64296C10.0394 4.90331 9.61733 4.90331 9.35698 4.64296C9.09663 4.38261 9.09663 3.9605 9.35698 3.70015L10.7712 2.28594Z'
							fill='black'
						/>
						<path
							d='M4.64287 9.3569C4.38252 9.09655 3.96041 9.09655 3.70006 9.3569L2.28585 10.7711C2.0255 11.0315 2.0255 11.4536 2.28585 11.7139C2.5462 11.9743 2.96831 11.9743 3.22866 11.7139L4.64287 10.2997C4.90322 10.0394 4.90322 9.61725 4.64287 9.3569Z'
							fill='black'
						/>
						<path
							d='M11.714 10.7712C11.9743 11.0315 11.9743 11.4536 11.714 11.714C11.4536 11.9743 11.0315 11.9743 10.7712 11.714L9.35696 10.2998C9.09661 10.0394 9.09661 9.61733 9.35696 9.35698C9.61731 9.09663 10.0394 9.09663 10.2998 9.35698L11.714 10.7712Z'
							fill='black'
						/>
						<path
							d='M4.64293 4.64287C4.90328 4.38252 4.90328 3.96041 4.64293 3.70006L3.22872 2.28585C2.96837 2.0255 2.54626 2.0255 2.28591 2.28585C2.02556 2.5462 2.02556 2.96831 2.28591 3.22866L3.70013 4.64287C3.96047 4.90322 4.38259 4.90322 4.64293 4.64287Z'
							fill='black'
						/>
					</svg>
				</button>
			</div>
		</div>
	);
};

export default page;
