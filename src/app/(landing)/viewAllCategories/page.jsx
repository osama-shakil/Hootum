'use client';
import CategoriesSlider from '@/components/allCategories/CategoriesSlider';
import LoadMoreButton from '@/components/common/LoadMoreButton';
import ArtCard from '@/components/landing/marketplace/ArtCard';
import FilterSection from '@/components/viewAllCategories/FilterSection';
import { artPieces } from '@/utils/SiteData';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const page = () => {
	const router = useRouter(); // Initialize the Next.js router

	const handleGoBack = () => {
		router.back(); // Navigate to the previous page
	};
	const handleClick = () => {
		router.push('/productDetail'); // Redirect to /productDetails
	};
	const allCategorySlides = [
		// {
		// 	id: 1,
		// 	title: 'Fine Art',
		// 	description:
		// 		'Elevate your surroundings with captivating paintings, sculptures, and more. Dive into the artistry and find the masterpiece that speaks to you. Start your art journey now!',
		// 	image: '/allcategories/categories (5).svg',
		// },
		// {
		// 	id: 2,
		// 	title: 'Sculpture',
		// 	description:
		// 		'Elegant hand-carved sculpture crafted from high-quality stone, showcasing intricate details and a timeless design. Perfect as a centerpiece for home decor or as a unique gift. Its smooth finish and artistic expression make it a standout addition to any collection.',
		// 	image: '/allcategories/categories (4).svg',
		// },
		// {
		// 	id: 3,
		// 	title: 'Watches',
		// 	description:
		// 		'Stylish and meticulously crafted watches that combine timeless design with reliable functionality. Whether you prefer classic elegance, modern minimalism, or bold statement pieces, our collection offers something for every taste. Perfect for everyday wear or special occasions, these watches are the ultimate accessory to elevate your style.',
		// 	image: '/allcategories/categories (3).svg',
		// },
		// {
		// 	id: 4,
		// 	title: 'Digital Art',
		// 	description:
		// 		'Vibrant digital artwork blending creativity and technology to deliver striking visuals. Each piece is meticulously designed, offering high-resolution detail and dynamic color. Perfect for enhancing any space, whether displayed on screens or printed for wall art. Ideal for art lovers, modern decor enthusiasts, or as a unique digital collectible.',
		// 	image: '/allcategories/categories (2).svg',
		// },
		{
			id: 5,
			title: 'Antique Watch',
			description:
				'Discover the Perfect Timepiece to Elevate Your Style. Uncover History on Your Wrist – Each Watch Tells a Unique Story. Embrace Vintage Luxury with Our Curated Collection.',
			image: '/allcategories/categories (1).svg',
		},
		{
			id: 5,
			title: 'Antique Watch',
			description:
				'Discover the Perfect Timepiece to Elevate Your Style. Uncover History on Your Wrist – Each Watch Tells a Unique Story. Embrace Vintage Luxury with Our Curated Collection.',
			image: '/allcategories/categories (1).svg',
		},
		{
			id: 5,
			title: 'Antique Watch',
			description:
				'Discover the Perfect Timepiece to Elevate Your Style. Uncover History on Your Wrist – Each Watch Tells a Unique Story. Embrace Vintage Luxury with Our Curated Collection.',
			image: '/allcategories/categories (1).svg',
		},
	];
	const [activeTab, setActiveTab] = useState('View All');

	const tabs = [
		'View All',
		'Fine Art',
		'Watches',
		'Jewelry',
		'Fashion',
		'Sculpture',
		'Collectibles',
	];
	return (
		<div className='md:container mx-auto pb-20'>
			<CategoriesSlider allCategorySlides={allCategorySlides} />
			<div
				className='flex items-center space-x-2 mt-8 cursor-pointer'
				onClick={handleGoBack}
			>
				{/* Arrow Left Icon */}
				<div className='cursor-pointer'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 24 24'
						fill='none'
						stroke='currentColor'
						strokeWidth='2'
						strokeLinecap='round'
						strokeLinejoin='round'
						className='h-10 w-6'
					>
						<path d='M15 18l-6-6 6-6' />
					</svg>
				</div>
				<h2 className='text-[24px] font-[500]'>All Items</h2>
			</div>
			<div className='px-3 md:p-0 flex flex-col md:flex-row mt-4 md:mt-10'>
				{/* Tabs */}
				<div className='grid grid-cols-2 gap-2 md:gap-0 md:flex md:items-center md:space-x-3'>
					{tabs.map(tab => (
						<button
							key={tab}
							onClick={() => setActiveTab(tab)}
							className={`md:px-6 text-[16px] py-2 rounded-md text-center ${
								activeTab === tab
									? 'bg-black text-white'
									: 'bg-gray-100 text-black'
							}`}
						>
							{tab}
						</button>
					))}
				</div>

				{/* Search Box */}
				<div className='mt-10 md:mt-0 md:ml-auto flex items-center border border-black rounded-md px-3 py-4 md:py-3 mx-6 md:mx-0'>
					<input
						type='text'
						placeholder='Search'
						className='outline-none text-sm placeholder-gray-500 flex-grow md:w-[250px]'
					/>
					{/* Search Icon */}
					<svg
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 24 24'
						fill='none'
						stroke='currentColor'
						strokeWidth='2'
						strokeLinecap='round'
						strokeLinejoin='round'
						className='h-5 w-5'
					>
						<circle cx='11' cy='11' r='8' />
						<line x1='21' y1='21' x2='16.65' y2='16.65' />
					</svg>
				</div>
			</div>

			<div className='px-8 md:px-0 flex flex-col lg:flex-row gap-6 mt-10 md:mt-16'>
				{/* Filter Section */}
				<FilterSection />

				{/* Product Grid Section */}
				<div className='w-[100%] md:w-full lg:w-3/4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-14'>
					{artPieces.map(piece => (
						<ArtCard
							key={piece.id}
							piece={piece}
							handleClick={handleClick}
						/>
					))}
				</div>
			</div>
			<LoadMoreButton />
		</div>
	);
};

export default page;
