import React from 'react';
import ConditionReport from './ConditionReport';

const ProductInfo = () => {
	return (
		<div className='p-6 space-y-8'>
			{/* Description */}
			<div>
				<h2 className='text-lg font-semibold mb-2'>DESCRIPTION</h2>
				<p className='text-gray-700'>
					Portrait of a Kazi Nazrul Islam. I was interested in
					capturing a sense of movement and the expression on her
					face. Colors were important here, particularly with regard
					to the background and the feather coat she is wearing. The
					palette here is a little different to what I usually work
					with, and I think it conveys a deeper, more mysterious tone
					to the whole piece.{' '}
					<span className='font-semibold text-black cursor-pointer'>
						Read more.
					</span>
				</p>
			</div>

			{/* Condition Report */}
			<ConditionReport />

			{/* Details */}
			<div className='grid grid-cols-2 gap-6'>
				{[
					{ label: 'SUBJECT', value: 'Conceptual' },
					{ label: 'STYLE', value: 'Landscape' },
					{ label: 'MATERIAL', value: 'Canvas' },
					{ label: 'MEDIUM', value: 'Oil Painting' },
					{ label: 'ORIENTATION', value: 'Vertical' },
					{
						label: 'DIMENSION',
						value: '36.5 inches / 92.7 cm\n48.25 inches / 122.56 cm',
					},
					{ label: 'FRAMED', value: 'Not Frame' },
					{ label: 'SIZE', value: 'Medium' },
					{ label: 'REGION', value: 'Dhaka' },
					{ label: 'COUNTRY', value: 'Bangladesh' },
					{ label: 'ART PERIOD', value: 'Modern' },
					{ label: 'SIGNATURE', value: 'Yes' },
				].map(({ label, value }, index) => (
					<div key={index} className='space-y-1'>
						<p className='text-gray-500 text-sm'>{label}</p>
						<p className='text-black font-medium whitespace-pre-line'>
							{value}
						</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default ProductInfo;
