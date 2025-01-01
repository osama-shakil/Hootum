import React from 'react';

const AdditionalInfo = () => {
	return (
		<div className='space-y-6'>
			{/* Provenance */}
			<div>
				<h2 className='text-2xl font-medium font-sans'>PROVENANCE</h2>
				<div className='bg-[#f2f2f2] p-4 rounded-[5px] mt-1'>
					<p className='text-base font-sans'>
						Hootum at Dhaka, 11 November 2024
						<br />
						Acquired from the above sale by the present owner,
						<br />
						This news covered by{' '}
						<span className='underline font-medium'>
							The Daily Star
						</span>
						.
					</p>
				</div>
			</div>

			{/* Special Feature */}
			<div>
				<h2 className='text-2xl font-medium font-sans'>
					SPECIAL FEATURE
				</h2>
				<div className='bg-[#f2f2f2] p-4 rounded-[5px] mt-1'>
					<p className='text-base font-sans font-normal'>
						Rising Star
					</p>
				</div>
			</div>

			{/* Taxes */}
			<div>
				<h2 className='text-2xl font-medium font-sans'>TAXES</h2>
				<div className='bg-[#f2f2f2] p-4 rounded-[5px] mt-1'>
					<p className='text-base font-sans font-normal'>
						Taxes not included
						<br />
						VAT and other taxes are not reflected in the listed
						pricing.{' '}
						<a href='#' className='font-medium underline'>
							Read more
						</a>
					</p>
				</div>
			</div>

			{/* International Shipping */}
			<div>
				<h2 className='text-2xl font-medium font-sans'>
					INTERNATIONAL SHIPPING
				</h2>
				<div className='bg-[#f2f2f2] p-4 rounded-[5px] mt-1'>
					<p className='text-base font-sans font-normal'>Available</p>
				</div>
			</div>

			{/* Conditions of Business */}
			<div>
				<h2 className='text-2xl font-medium font-sans'>
					CONDITIONS OF BUSINESS
				</h2>
				<div className='bg-[#f2f2f2] p-4 rounded-[5px] mt-1'>
					<p className='text-base font-sans font-normal'>
						Please note that the cancellation right for EU/UK
						purchasers applies to this item. Please read Condition
						19 of the Buy Now Marketplace Conditions of Business for
						buyers for more information.{' '}
						<a href='#' className='font-medium underline'>
							Read more
						</a>
					</p>
				</div>
			</div>
		</div>
	);
};

export default AdditionalInfo;
