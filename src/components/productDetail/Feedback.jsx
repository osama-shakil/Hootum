import React from 'react';

const Feedback = ({ ratingData, overallRating }) => {
	return (
		<div>
			<h3 className='text-2xl font-bold font-sans'>Feedback</h3>
			<div className='grid grid-cols-12 gap-6 mt-3'>
				{/* Overall Rating (4 columns) */}
				<div className='col-span-12 md:col-span-4 flex flex-col items-center justify-center bg-[#fafafa] p-6 border border-[#ededed] rounded-[20px]'>
					<div className='text-5xl font-bold text-[#164C96] font-sans'>
						{overallRating}
					</div>
					<div className='flex items-center space-x-1 mt-2'>
						{[1, 2, 3, 4, 5].map(star => (
							<svg
								key={star}
								xmlns='http://www.w3.org/2000/svg'
								fill={
									star <= Math.round(overallRating)
										? '#E59819'
										: '#E5E7EB'
								}
								viewBox='0 0 24 24'
								strokeWidth='2'
								className='w-5 h-5'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M12 17.27l5.18 3.73-1.64-5.69 4.36-3.49h-5.42L12 6.23 9.52 11.5H4.1l4.36 3.49-1.64 5.69L12 17.27z'
								/>
							</svg>
						))}
					</div>
					<div className='text-base font-normal font-sans mt-1'>
						Product Rating
					</div>
				</div>

				{/* Rating Distribution (8 columns) */}
				<div className='col-span-12 md:col-span-8 bg-[#fafafa] md:p-6 p-2 border border-[#ededed] rounded-[20px] space-y-2'>
					{ratingData.map((item, index) => (
						<div
							key={index}
							className='grid grid-cols-12 items-center gap-1 md:gap-4'
						>
							{/* Progress Bar */}
							<div className='col-span-7'>
								<div className='w-full bg-gray-200 h-2 rounded-full overflow-hidden'>
									<div
										className='bg-[#164C96] h-2'
										style={{ width: `${item.percentage}%` }}
									/>
								</div>
							</div>

							{/* Stars */}
							<div className='col-span-3 flex items-center space-x-1'>
								{[1, 2, 3, 4, 5].map(star => (
									<svg
										key={star}
										xmlns='http://www.w3.org/2000/svg'
										fill={
											star <= item.stars
												? '#E59819'
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

							{/* Percentage */}
							<div className='col-span-2 text-base text-center font-medium text-[#164C96]'>
								{item.percentage}%
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Feedback;
