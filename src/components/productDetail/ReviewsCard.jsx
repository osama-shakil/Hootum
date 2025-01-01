import React, { useState } from 'react';

const ReviewsCard = ({ reviews }) => {
	const [imageUrl, setImageUrl] = useState('');

	return (
		<div>
			<h3 className='text-2xl font-bold font-sans'>Reviews</h3>
			{reviews.map((review, index) => (
				<div
					key={index}
					className='flex items-start space-x-4 bg-[#fafafa] p-2 md:p-6 rounded-[20px] mt-3 border border-[#ededed]'
				>
					<div className='w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-medium overflow-hidden'>
						{imageUrl ? (
							<img
								src={imageUrl}
								className='h-full w-full object-cover'
							/>
						) : (
							<svg
								width='38'
								height='38'
								viewBox='0 0 38 38'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M33.1081 30.7197C34.993 28.4518 36.304 25.7633 36.9301 22.8817C37.5562 20 37.4791 17.0099 36.7052 14.1644C35.9313 11.3188 34.4835 8.70148 32.4842 6.53382C30.4848 4.36616 27.9928 2.71192 25.219 1.71105C22.4451 0.710175 19.471 0.39211 16.5482 0.78376C13.6254 1.17541 10.84 2.26525 8.42744 3.96109C6.01493 5.65693 4.04636 7.90888 2.68824 10.5264C1.33012 13.144 0.622424 16.0501 0.625007 18.9991C0.625998 23.2859 2.13667 27.4355 4.89194 30.7197L4.86569 30.742C4.95757 30.8522 5.06257 30.9467 5.15707 31.0557C5.27519 31.1909 5.40251 31.3182 5.52457 31.4494C5.89207 31.8484 6.27007 32.2317 6.66644 32.5913C6.78719 32.7016 6.91188 32.8039 7.03394 32.9089C7.45394 33.2712 7.88576 33.6151 8.33332 33.9353C8.39107 33.9747 8.44357 34.0259 8.50132 34.0666V34.0508C11.5753 36.214 15.2425 37.375 19.0013 37.375C22.7602 37.375 26.4273 36.214 29.5013 34.0508V34.0666C29.5591 34.0259 29.6103 33.9747 29.6693 33.9353C30.1156 33.6137 30.5487 33.2712 30.9687 32.9089C31.0908 32.8039 31.2154 32.7002 31.3362 32.5913C31.7326 32.2304 32.1106 31.8484 32.4781 31.4494C32.6001 31.3182 32.7261 31.1909 32.8456 31.0557C32.9388 30.9467 33.0451 30.8522 33.1369 30.7407L33.1081 30.7197ZM19 8.49906C20.1682 8.49906 21.3101 8.84545 22.2813 9.49444C23.2526 10.1434 24.0096 11.0659 24.4567 12.1451C24.9037 13.2243 25.0207 14.4119 24.7928 15.5576C24.5649 16.7033 24.0024 17.7556 23.1764 18.5817C22.3504 19.4077 21.298 19.9702 20.1523 20.1981C19.0066 20.426 17.819 20.309 16.7398 19.862C15.6606 19.4149 14.7381 18.6579 14.0891 17.6866C13.4402 16.7154 13.0938 15.5735 13.0938 14.4053C13.0938 12.8389 13.716 11.3366 14.8237 10.229C15.9313 9.12132 17.4336 8.49906 19 8.49906ZM8.50919 30.7197C8.53196 28.9963 9.23231 27.3512 10.4587 26.1403C11.6851 24.9293 13.339 24.2499 15.0625 24.2491H22.9375C24.661 24.2499 26.3149 24.9293 27.5413 26.1403C28.7677 27.3512 29.4681 28.9963 29.4908 30.7197C26.6123 33.3136 22.8748 34.7492 19 34.7492C15.1252 34.7492 11.3877 33.3136 8.50919 30.7197Z'
									fill='#BBC5D2'
								/>
							</svg>
						)}
					</div>
					<div className='flex-1'>
						<div className='flex items-center'>
							<h4 className='font-medium text-base'>
								{review.author}
							</h4>
							<span className='text-sm text-[#7d7d7d] ml-2 font-normal font-sans'>
								{review.date}
							</span>
						</div>
						<div className='flex items-center'>
							{[1, 2, 3, 4, 5].map(star => (
								<svg
									key={star}
									xmlns='http://www.w3.org/2000/svg'
									fill={
										star <= review.rating
											? '#FFA500'
											: '#E5E7EB'
									}
									viewBox='0 0 24 24'
									strokeWidth='2'
									className='w-4 h-4'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M12 17.27l5.18 3.73-1.64-5.69 4.36-3.49h-5.42L12 6.23 9.52 11.5H4.1l4.36 3.49-1.64 5.69L12 17.27z'
									/>
								</svg>
							))}
						</div>
						<p className='text-base font-normal mt-2 font-sans'>
							{review.title}
						</p>
						<p className='text-base font-normal font-sans text-[#7d7d7d] mt-2'>
							{review.comment}
						</p>
						<div className='flex items-center space-x-4 mt-2'>
							<button className='text-sm text-[#7d7d7d] hover:underline flex items-center bg-[#ededed] px-4 font-sans rounded-[50px] py-[8px]'>
								<svg
									className='mr-1'
									width='15'
									height='14'
									viewBox='0 0 15 14'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M4.86328 10.4389L6.67161 11.7389C6.90495 11.9555 7.42995 12.0639 7.77995 12.0639H9.99662C10.6966 12.0639 11.4549 11.5764 11.6299 10.9264L13.0299 6.97219C13.3216 6.21385 12.7966 5.56385 11.9216 5.56385H9.58828C9.23828 5.56385 8.94661 5.29302 9.00495 4.91385L9.29661 3.18052C9.41328 2.69302 9.06328 2.15135 8.53828 1.98885C8.07161 1.82635 7.48828 2.04302 7.25495 2.36802L4.86328 5.67219'
										stroke='black'
										stroke-opacity='0.5'
										stroke-miterlimit='10'
									/>
									<path
										d='M1.88867 10.4391V5.13073C1.88867 4.3724 2.23867 4.10156 3.05534 4.10156H3.63867C4.45534 4.10156 4.80534 4.3724 4.80534 5.13073V10.4391C4.80534 11.1974 4.45534 11.4682 3.63867 11.4682H3.05534C2.23867 11.4682 1.88867 11.1974 1.88867 10.4391Z'
										stroke='black'
										stroke-opacity='0.5'
										stroke-linecap='round'
										stroke-linejoin='round'
									/>
								</svg>
								Like
							</button>
							<button className='text-sm hover:underline font-sans'>
								Reply
							</button>
						</div>
					</div>
				</div>
			))}

			<button className='flex items-center bg-black text-white px-6 py-3 mt-4 rounded-full font-sans font-normal text-sm hover:bg-gray-800'>
				View all reviews
				<svg
					className='ml-5'
					width='22'
					height='22'
					viewBox='0 0 22 22'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M7.10352 7.01941L14.5819 7.01941L14.5819 14.4978'
						stroke='white'
						stroke-width='1.5'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
					<path
						d='M14.5858 7.02153L6.63086 14.9764'
						stroke='white'
						stroke-width='1.5'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
				</svg>
			</button>
		</div>
	);
};

export default ReviewsCard;
