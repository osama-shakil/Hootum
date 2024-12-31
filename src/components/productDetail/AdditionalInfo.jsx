import React from 'react';

const AdditionalInfo = () => {
	return (
		<div className='space-y-6'>
			{/* Provenance */}
			<div>
				<h2 className='text-lg font-semibold text-gray-900'>
					PROVENANCE
				</h2>
				<div className='bg-gray-50 p-4 rounded-md'>
					<p className='text-sm text-gray-700'>
						Hootum at Dhaka, 11 November 2024
						<br />
						Acquired from the above sale by the present owner,
						<br />
						This news covered by{' '}
						<span className='underline'>The Daily Star</span>.
					</p>
				</div>
			</div>

			{/* Special Feature */}
			<div>
				<h2 className='text-lg font-semibold text-gray-900'>
					SPECIAL FEATURE
				</h2>
				<div className='bg-gray-50 p-4 rounded-md'>
					<p className='text-sm text-gray-700'>Rising Star</p>
				</div>
			</div>

			{/* Taxes */}
			<div>
				<h2 className='text-lg font-semibold text-gray-900'>TAXES</h2>
				<div className='bg-gray-50 p-4 rounded-md'>
					<p className='text-sm text-gray-700'>
						Taxes not included
						<br />
						VAT and other taxes are not reflected in the listed
						pricing.{' '}
						<a href='#' className='text-blue-600 underline'>
							Read more
						</a>
					</p>
				</div>
			</div>

			{/* International Shipping */}
			<div>
				<h2 className='text-lg font-semibold text-gray-900'>
					INTERNATIONAL SHIPPING
				</h2>
				<div className='bg-gray-50 p-4 rounded-md'>
					<p className='text-sm text-gray-700'>Available</p>
				</div>
			</div>

			{/* Conditions of Business */}
			<div>
				<h2 className='text-lg font-semibold text-gray-900'>
					CONDITIONS OF BUSINESS
				</h2>
				<div className='bg-gray-50 p-4 rounded-md'>
					<p className='text-sm text-gray-700'>
						Please note that the cancellation right for EU/UK
						purchasers applies to this item. Please read Condition
						19 of the Buy Now Marketplace Conditions of Business for
						buyers for more information.{' '}
						<a href='#' className='text-blue-600 underline'>
							Read more
						</a>
					</p>
				</div>
			</div>
		</div>
	);
};

export default AdditionalInfo;
