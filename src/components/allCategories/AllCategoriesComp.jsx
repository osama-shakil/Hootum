'use client';
import CategoriesSlider from '@/components/allCategories/CategoriesSlider';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const AllCategoriesComp = () => {
	const router = useRouter(); 

	const [isOpenMedium, setIsOpenMedium] = useState(false); 
	const [selectedMedium, setSelectedMedium] = useState('Sort');

	const handleClick = () => {
		router.push('/viewAllCategories'); 
	};
	const popularCategories = [
		{ id: 1, title: 'Fine Art', image: '/backgrounds-images/Nazul-profile.svg' },
		{ id: 2, title: 'Sculpture', image: '/popular/product-img.svg' },
		{ id: 3, title: 'Watches', image: '/popular/item-card.svg' },
		{ id: 4, title: 'Digital Art', image: '/popular/digit-product.svg' },
		{ id: 5, title: 'Fashion', image: '/popular/fashion.svg' },
		{ id: 6, title: 'Collectibles', image: '/popular/collectibles.svg' },
		{ id: 7, title: 'Jewelary', image: '/popular/jewelary.svg' },
		{ id: 8, title: 'Sneakers', image: '/popular/sneakers.svg' },
		{ id: 9, title: 'Books', image: '/popular/books.svg' },
		{ id: 10, title: 'Interior', image: '/popular/Interior.svg' },
		{ id: 11, title: 'Bag', image: '/popular/bag.svg' },
		{ id: 12, title: 'Stickers', image: '/popular/stickers.svg' },
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
		// {
		// 	id: 5,
		// 	title: 'Antique Watch',
		// 	description:
		// 		'Discover the Perfect Timepiece to Elevate Your Style. Uncover History on Your Wrist – Each Watch Tells a Unique Story. Embrace Vintage Luxury with Our Curated Collection.',
		// 	image: '/allcategories/categories (1).svg',
		// },
	];
	const mediums = ['By default ', 'A-Z', 'New to old', 'Old to new'];

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

				<div className='border border-black rounded-[5px] p-2 w-full md:w-[320px] md:mr-12'>
					{/* Search Input */}
					<div className='flex items-center rounded-lg px-3 py-2'>
						<input
							type='text'
							placeholder='Search'
							className='flex-grow outline-none text-black text-[0.875rem]'
						/>
						<svg
							width='18'
							height='18'
							viewBox='0 0 20 20'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								fill-rule='evenodd'
								clip-rule='evenodd'
								d='M12.9056 14.3199C11.551 15.3729 9.84871 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 9.84871 15.3729 11.551 14.3199 12.9056L19.7071 18.2929C20.0976 18.6834 20.0976 19.3166 19.7071 19.7071C19.3166 20.0976 18.6834 20.0976 18.2929 19.7071L12.9056 14.3199ZM14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8Z'
								fill='black'
							/>
						</svg>
					</div>

					{/* Sort Dropdown */}

					<div>
						{/* Header Section */}
						<div
							className='flex justify-between items-center border border-black rounded px-3 py-2 cursor-pointer'
							onClick={() => setIsOpenMedium(!isOpenMedium)}
						>
							<span className='text-black text-[14px] font-medium'>
								{selectedMedium}
							</span>
							{isOpenMedium ? (
								<svg
									width='30'
									height='30'
									viewBox='0 0 32 32'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<rect
										x='0.5'
										y='0.5'
										width='31'
										height='31'
										rx='15.5'
										stroke='black'
									/>
									<path
										fill-rule='evenodd'
										clip-rule='evenodd'
										d='M11.7929 18.7071C12.1834 19.0976 12.8166 19.0976 13.2071 18.7071L16 15.9142L18.7929 18.7071C19.1834 19.0976 19.8166 19.0976 20.2071 18.7071C20.5976 18.3166 20.5976 17.6834 20.2071 17.2929L16.7071 13.7929C16.3166 13.4024 15.6834 13.4024 15.2929 13.7929L11.7929 17.2929C11.4024 17.6834 11.4024 18.3166 11.7929 18.7071Z'
										fill='black'
									/>
								</svg>
							) : (
								<svg
									width='30'
									height='30'
									viewBox='0 0 32 32'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<rect
										x='0.5'
										y='0.5'
										width='31'
										height='31'
										rx='15.5'
										stroke='black'
									/>
									<path
										fill-rule='evenodd'
										clip-rule='evenodd'
										d='M20.2071 13.7929C19.8166 13.4024 19.1834 13.4024 18.7929 13.7929L16 16.5858L13.2071 13.7929C12.8166 13.4024 12.1834 13.4024 11.7929 13.7929C11.4024 14.1834 11.4024 14.8166 11.7929 15.2071L15.2929 18.7071C15.6834 19.0976 16.3166 19.0976 16.7071 18.7071L20.2071 15.2071C20.5976 14.8166 20.5976 14.1834 20.2071 13.7929Z'
										fill='black'
									/>
								</svg>
							)}
						</div>

						{/* Dropdown Section */}
						{isOpenMedium && (
							<div className='mt-2 space-y-6 pl-4 border border-black py-3 rounded-[5px]'>
								{mediums.map((item, index) => (
									<div
										key={index}
										className='flex items-center gap-2'
									>
										<input
											type='radio'
											name='medium'
											id={item}
											className='w-4 h-4 accent-black'
											checked={selectedMedium === item}
											onChange={() => {
												setSelectedMedium(item); // Update selected value
											}}
										/>
										<label
											htmlFor={item}
											className='text-black text-[14px] font-medium cursor-pointer'
										>
											{item}
										</label>
									</div>
								))}
							</div>
						)}
					</div>
					{/* <div className='mt-1'>
						<Select defaultValue='atoz'>
							<SelectTriggercategory className='rounded-[5px] py-2 px-2 border-black focus:ring-0 focus:ring-offset-0'>
								<SelectValue />
							</SelectTriggercategory>
							<SelectContent>
								<SelectItem value='atoz'>A-Z</SelectItem>
								<SelectItem value='newtoold'>
									New to Old
								</SelectItem>
								<SelectItem value='oldtonew'>
									Old to New
								</SelectItem>
							</SelectContent>
						</Select>
					</div> */}
				</div>
			</div>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-8 gap-x-9 gap-y-12 px-12 md:px-0'>
				{popularCategories.map(category => (
					<Card key={category.id}
						className='overflow-hidden max-w-sm cursor-pointer border-[#D3D3D3] text-center'
						onClick={handleClick}
					>
						<CardContent className='p-[5px]'>
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
			<div className='flex items-center justify-center md:grid mt-16 pb-5'>
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

export default AllCategoriesComp;
