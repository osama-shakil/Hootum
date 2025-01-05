import React from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

const BidConfirmationModal = ({ open, toggle, onAgreed }) => {
	return (
		<>
			<Dialog open={open} onOpenChange={toggle}>
				<DialogContent className='p-8 sm:w-full max-w-[800px]'>
					<div className='text-center bg-[#0000000D] rounded-[20px] border border-[#0000001A] md:w-[550px] m-auto p-6'>
						{/* Image */}
						<div className='mb-4'>
							<img
								src='/payment/signed.svg'
								alt='Confirmation Icon'
								className='mx-auto w-[200px] h-[100px] md:w-[340px] md:h-[237px]'
							/>
						</div>

						{/* Title */}
						<h2 className='text-[24px] font-medium mb-2'>
							Bid Confirm
						</h2>

						{/* Description */}
						<p className='text-base font-normal text-[#797979] mb-6'>
							Your bid has been enlisted. You will be notified of
							winning bids after auction time out.
						</p>

						{/* Done Button */}
						<button
							className='bg-black block m-auto text-white text-base font-bold px-5 py-3 rounded-full flex items-center space-x-2 hover:bg-gray-800'
							onClick={onAgreed}
						>
							Done
							<svg
								className='ml-7'
								width='16'
								height='15'
								viewBox='0 0 16 15'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M8.33789 2.20898L13.6259 7.49703L8.33789 12.7851'
									stroke='white'
									stroke-width='1.5'
									stroke-linecap='round'
									stroke-linejoin='round'
								/>
								<path
									d='M13.6269 7.50025L2.37695 7.50024'
									stroke='white'
									stroke-width='1.5'
									stroke-linecap='round'
									stroke-linejoin='round'
								/>
							</svg>
						</button>
					</div>
				</DialogContent>
			</Dialog>
		</>
	);
};

export default BidConfirmationModal;
