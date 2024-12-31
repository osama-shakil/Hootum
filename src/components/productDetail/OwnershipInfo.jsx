import React from 'react';

const OwnershipInfo = () => {
	const data = [
		{ title: 'Current owner', value: 'Current owner' },
		{ title: 'Hight Bider', value: 'Current owner' },
		{ title: 'Who are bide for this items', value: 'Current owner' },
		{ title: 'The past owner', value: 'Current owner' },
	];

	return (
		<div className='space-y-4'>
			{data.map((item, index) => (
				<div
					key={index}
					className='flex justify-between items-center bg-gray-50 p-4 rounded-md shadow-sm'
				>
					<div className='flex items-center space-x-3'>
						{/* Icon */}
						<div className='h-8 w-8 flex items-center justify-center rounded-full bg-gray-200'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth={2}
								stroke='currentColor'
								className='h-5 w-5 text-gray-500'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M12 12c2.28 0 4-1.72 4-4s-1.72-4-4-4-4 1.72-4 4 1.72 4 4 4z'
								/>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M12 14c-4.42 0-8 1.79-8 4v2h16v-2c0-2.21-3.58-4-8-4z'
								/>
							</svg>
						</div>
						{/* Title */}
						<span className='text-sm font-medium text-gray-700'>
							{item.title}
						</span>
					</div>
					{/* Value */}
					<span className='text-sm font-medium text-gray-700'>
						{item.value}
					</span>
				</div>
			))}
		</div>
	);
};

export default OwnershipInfo;
