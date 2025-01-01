import React from 'react';

const Rating = ({ rating, maxStars }) => {
	const stars = Array.from({ length: maxStars }, (_, index) => index + 1);
	return (
		<div className='flex items-center'>
			{stars.map(star => {
				if (rating >= star) {
					// Fully filled star
					return (
						<svg
							key={star}
							xmlns='http://www.w3.org/2000/svg'
							fill='#FFA500'
							viewBox='0 0 24 24'
							stroke='#FFA500'
							strokeWidth='2'
							className='w-5 h-5'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M12 17.27l5.18 3.73-1.64-5.69 4.36-3.49h-5.42L12 6.23 9.52 11.5H4.1l4.36 3.49-1.64 5.69L12 17.27z'
							/>
						</svg>
					);
				} else if (rating > star - 1 && rating < star) {
					// Partially filled star
					return (
						<svg
							key={star}
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 24 24'
							className='w-5 h-5'
						>
							<defs>
								<linearGradient
									id={`grad-${star}`}
									x1='0%'
									y1='0%'
									x2='100%'
									y2='0%'
								>
									<stop
										offset={`${
											(rating - (star - 1)) * 100
										}%`}
										stopColor='#FFA500'
									/>
									<stop
										offset={`${
											(rating - (star - 1)) * 100
										}%`}
										stopColor='#E5E7EB'
									/>
								</linearGradient>
							</defs>
							<path
								fill={`url(#grad-${star})`}
								stroke='#E5E7EB'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M12 17.27l5.18 3.73-1.64-5.69 4.36-3.49h-5.42L12 6.23 9.52 11.5H4.1l4.36 3.49-1.64 5.69L12 17.27z'
							/>
						</svg>
					);
				} else {
					// Empty star with background color
					return (
						<svg
							key={star}
							xmlns='http://www.w3.org/2000/svg'
							fill='#bfbfbf' // Set fill to desired background color
							viewBox='0 0 24 24'
							stroke='#bfbfbf'
							strokeWidth='2'
							className='w-5 h-5'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M12 17.27l5.18 3.73-1.64-5.69 4.36-3.49h-5.42L12 6.23 9.52 11.5H4.1l4.36 3.49-1.64 5.69L12 17.27z'
							/>
						</svg>
					);
				}
			})}
		</div>
	);
};

export default Rating;
