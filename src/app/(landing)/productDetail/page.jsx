'use client';
import CuratedFeaturedCard from '@/components/common/cards/CuratedFeaturedCard';
import CustomButton from '@/components/common/CustomButton';
import AuthCard from '@/components/productDetail/AuthCard';
import BidsList from '@/components/productDetail/BidsList';
import BuyNow from '@/components/productDetail/BuyNow';
import ProductDetailTabs from '@/components/productDetail/ProductDetailTabs';
import CarouselLayout from '@/components/profile/carousel/Carousel';
import { CarouselItem } from '@/components/ui/carousel';
import { spotlightProducts } from '@/utils/SiteData';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const page = () => {
	const router = useRouter(); // Initialize the Next.js router

	// const searchParams = useSearchParams();
	// const isBidding = searchParams.get('isBidding');

	const [isBidding, setIsBidding] = useState(false);

	useEffect(() => {
		const biddingStatus = localStorage.getItem('isBidding');

		if (biddingStatus) {
			setIsBidding(biddingStatus === 'true');
		}
	}, []);

	const handleGoBack = () => {
		router.back(); // Navigate to the previous page
	};
	const images = [
		'/popular/fine-art.svg', // Replace these with actual image paths in your public folder
		'/popular/product-img.svg',
		'/popular/bag.svg',
		'/popular/interior.svg',
	];
	const [selectedImage, setSelectedImage] = useState(images[0]);

	// Handle thumbnail click
	const handleThumbnailClick = image => {
		setSelectedImage(image);
	};

	return (
		<div className='md:container mx-auto p-4 md:p-6'>
			<div
				className='flex items-center space-x-2 cursor-pointer '
				onClick={handleGoBack}
			>
				{/* Arrow Left Icon */}
				<div className='cursor-pointer'>
					<svg
						width='10'
						height='18'
						viewBox='0 0 10 18'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M9.22172 0C9.37439 0 9.5306 0.0603633 9.64776 0.177521C9.88208 0.411838 9.88208 0.795269 9.64776 1.02959L1.62764 9.05326L9.5306 16.9562C9.76492 17.1905 9.76492 17.574 9.5306 17.8083C9.29629 18.0426 8.91287 18.0426 8.67856 17.8083L0.349565 9.47932C0.115249 9.245 0.115249 8.86156 0.349565 8.62724L8.79571 0.177539C8.91287 0.0603809 9.06905 3.51563e-05 9.22174 3.51563e-05L9.22172 0Z'
							fill='black'
						/>
					</svg>
				</div>
				<h2 className='text-[24px] font-[500]'>Nazrul Art</h2>
			</div>
			{/* Grid Layout */}
			<div className='grid grid-cols-1 md:grid-cols-7.6-4.4 gap-6  items-start mt-8'>
				{/* Left Section */}
				<div className='col-span-12 md:col-span-12 lg:col-span-1 flex flex-col gap-4'>
					{/* Thumbnails and Main Image */}
					<div className='flex flex-col md:flex-row gap-6'>
						{/* Thumbnails */}
						<div className='flex flex-row md:flex-col justify-between gap-4 order-2 md:order-1'>
							{images.map((image, index) => (
								<div
									key={index}
									className={`${
										selectedImage === image
											? 'border border-[#0000004D] p-2 rounded-md'
											: 'p-2'
									}`} // Highlight active thumbnail
								>
									<img
										src={image}
										alt={`Thumbnail ${index + 1}`}
										onClick={() =>
											handleThumbnailClick(image)
										} // Set active image on click
										className='h-[50px] w-[50px] md:h-[80px] md:w-[80px] rounded-md object-cover cursor-pointer'
									/>
								</div>
							))}
						</div>

						{/* Main Image */}
						<div className='flex-grow flex justify-center items-center order-1 md:order-2'>
							<div className='relative'>
								<img
									src={selectedImage}
									alt='Main Art'
									className={`border rounded-lg w-[395px] md:w-[550px] h-auto  object-cover ${
										isBidding
											? 'md:h-[510px]'
											: 'md:h-[475px]'
									}`}
								/>
							</div>
						</div>
					</div>
				</div>

				{/* Right Section */}
				<div className='col-span-12 md:col-span-12 lg:col-span-1'>
					<BuyNow isBidding={isBidding} />
				</div>
			</div>

			<div className='grid grid-cols-1 md:grid-cols-7.6-4.4 gap-6 mt-6 items-start'>
				{/* Tabs */}
				<div className='col-span-12 md:col-span-12 lg:col-span-1 flex flex-col mt-5 order-2 lg:order-1'>
					<ProductDetailTabs />
				</div>

				{/* Authentication Card */}
				<div className='col-span-12 md:col-span-12 lg:col-span-1 space-y-7 order-1 lg:order-2'>
					{/* Tags */}
					{isBidding ? (
						<>
							<BidsList />
						</>
					) : (
						<>
							<div className='flex flex-wrap justify-center gap-2'>
								{[
									'Fine Art',
									'Oil Painting',
									'Silk Painting',
									'Poet',
								].map((tag, index) => (
									<span
										key={index}
										className='text-sm bg-gray-200 text- px-3 py-1 rounded-[5px] hover:bg-gray-300'
									>
										{tag}
									</span>
								))}
							</div>
						</>
					)}

					<div className='space-y-3'>
						<AuthCard isBidding={isBidding} />
					</div>
				</div>
			</div>
			<div className='mt-16'>
				<div className='flex flex-col sm:flex-row items-center gap-2 sm:gap-4 px-6'>
					<div className='w-2 sm:w-3 h-6 sm:h-8 bg-black'></div>
					<h2 className='text-2xl sm:text-lg md:text-4xl lg:text-5xl font-medium text-center sm:text-left'>
						MORE BY THIS ARTIST
					</h2>

					<CustomButton
						text='View all'
						// handleClick={handleClick}
						className='hidden md:flex items-center justify-center w-[250px] h-[45px] whitespace-nowrap'
					/>
				</div>
				<CarouselLayout>
					{spotlightProducts.map(product => (
						<CarouselItem
							key={product.id}
							className='pl-2 md:pl-4 md:basis-1/2 lg:basis-1/4'
						>
							<CuratedFeaturedCard
								key={product.id}
								{...product}
							/>
						</CarouselItem>
					))}
				</CarouselLayout>
			</div>
			<div className='w-full lg:max-w-6xl mx-auto'>
				<hr className='border-t border-neutral-200' />
			</div>

			<div className='mt-16'>
				<div className='flex flex-col sm:flex-row items-center gap-2 sm:gap-4 px-6'>
					<div className='w-2 sm:w-3 h-6 sm:h-8 bg-black'></div>
					<h2 className='text-2xl sm:text-lg md:text-4xl lg:text-5xl font-medium text-center sm:text-left'>
						RELATED ITEMS
					</h2>

					<CustomButton
						text='View all'
						// handleClick={handleClick}
						className='hidden md:flex items-center justify-center w-[250px] h-[45px] whitespace-nowrap'
					/>
				</div>
				<CarouselLayout>
					{spotlightProducts.map(product => (
						<CarouselItem
							key={product.id}
							className='pl-2 md:pl-4 md:basis-1/2 lg:basis-1/4'
						>
							<CuratedFeaturedCard
								key={product.id}
								{...product}
							/>
						</CarouselItem>
					))}
				</CarouselLayout>
			</div>
		</div>
	);
};

export default page;
