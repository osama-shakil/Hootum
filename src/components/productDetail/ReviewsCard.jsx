import React from 'react';

const ReviewsCard = ({ reviews }) => {
	return (
		<>
			<h3 className='text-2xl font-bold'>Reviews</h3>

			{reviews.map((review, index) => (
				<div
					key={index}
					className='flex items-start space-x-4 bg-[#fafafa] p-6 rounded-[20px] mt-3'
				>
					<div className='w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-medium'>
						{review.author[0]}
					</div>
					<div className='flex-1'>
						<div className='flex items-center'>
							<h4 className='font-medium text-base'>
								{review.author}
							</h4>
							<span className='text-sm text-[#7d7d7d] ml-2 font-normal'>
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
						<p className='text-base font-normal mt-2'>
							{review.title}
						</p>
						<p className='text-base font-normal text-[#7d7d7d] mt-2'>
							{review.comment}
						</p>
						<div className='flex items-center space-x-4 mt-2'>
							<button className='text-sm text-[#7d7d7d] hover:underline flex items-center bg-[#ededed] px-4 rounded-[50px] py-[8px]'>
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
							<button className='text-sm hover:underline'>
								Reply
							</button>
						</div>
					</div>
				</div>
			))}

			<button className='flex items-center mt-6 bg-black text-white px-6 py-3 rounded-full font-normal text-sm hover:bg-gray-800'>
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
		</>
	);
};

export default ReviewsCard;
