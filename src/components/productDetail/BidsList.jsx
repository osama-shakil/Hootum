import React from 'react';

const BidsList = () => {
	// Dummy data for the bids
	const bids = [
		{
			name: 'Bidder 7164',
			amount: 22500,
			timeAgo: '12h ago',
		},
		{
			name: 'Bidder 7164',
			amount: 22500,
			timeAgo: '12h ago',
		},
		{
			name: 'Bidder 7164',
			amount: 22500,
			timeAgo: '12h ago',
		},
	];
	const handleViewAllBids = () => {
		// router.push('/all-bids'); // Redirect to the full bid list page
	};
	return (
		<div className='border border-[#D3D3D3] md:px-4 py-4 rounded-[5px]'>
			{/* List of Bids */}
			<ul>
				{bids.map((bid, index) => (
					<li
						key={index}
						className='flex items-center justify-between py-2 border-b last:border-b-0'
					>
						{/* Left Section: User Info */}
						<div className='flex items-center gap-2'>
							<img
								src='/placeholder.svg' // Replace with dynamic profile image if needed
								alt='Bidder'
								width='32'
								height='32'
								className=' rounded-full'
							/>
							<div>
								<p
									className={` text-[14px] text-[#00000080] ${
										index === 0
											? 'font-bold'
											: 'font-normal'
									}`}
								>
									{bid.name}
								</p>
							</div>
							<svg
								width='18'
								height='18'
								viewBox='0 0 18 18'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M18 13.5C18 14.0304 17.7893 14.5391 17.4142 14.9142C17.0391 15.2893 16.5304 15.5 16 15.5H2C1.46957 15.5 0.960859 15.2893 0.585786 14.9142C0.210714 14.5391 0 14.0304 0 13.5V4.5C0 3.96957 0.210714 3.46086 0.585786 3.08579C0.960859 2.71071 1.46957 2.5 2 2.5H16C16.5304 2.5 17.0391 2.71071 17.4142 3.08579C17.7893 3.46086 18 3.96957 18 4.5V13.5Z'
									fill='#006A4D'
								/>
								<path
									d='M8 12.25C9.933 12.25 11.5 10.683 11.5 8.75C11.5 6.817 9.933 5.25 8 5.25C6.067 5.25 4.5 6.817 4.5 8.75C4.5 10.683 6.067 12.25 8 12.25Z'
									fill='#F42A41'
								/>
							</svg>

							{/* <img
											src='/bangladesh-flag.png' // Replace with flag path
											alt='Bangladesh Flag'
											className='w-5 h-5'
										/> */}
						</div>

						{/* Middle Section: Amount */}
						<div
							className={` text-[14px] text-[#00000080] ${
								index === 0 ? 'font-bold' : 'font-normal'
							}`}
						>
							৳ {bid.amount.toLocaleString()}
						</div>

						{/* Right Section: Time */}
						<div
							className={` text-[14px] text-[#00000080] ${
								index === 0 ? 'font-bold' : 'font-normal'
							}`}
						>
							{bid.timeAgo}
						</div>
					</li>
				))}
			</ul>

			{/* See All Bids Button */}
			<button
				className='mt-4 px-5 py-2 bg-[#0000000D] font-medium text-[14px] rounded-[100px] flex justify-center items-center gap-2 hover:bg-gray-200'
				onClick={handleViewAllBids}
			>
				See all bids (10){' '}
				<svg
					width='10'
					height='6'
					viewBox='0 0 10 6'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						fill-rule='evenodd'
						clip-rule='evenodd'
						d='M9.58868 0.31952C9.16266 -0.106507 8.47193 -0.106507 8.0459 0.31952L4.99911 3.36631L1.95232 0.319521C1.52629 -0.106506 0.835567 -0.106506 0.409541 0.319521C-0.0164867 0.745547 -0.0164866 1.43627 0.409541 1.8623L4.22772 5.68048C4.65375 6.10651 5.34447 6.10651 5.7705 5.68048L9.58868 1.8623C10.0147 1.43627 10.0147 0.745546 9.58868 0.31952Z'
						fill='black'
					/>
				</svg>
			</button>
		</div>
	);
};

export default BidsList;
