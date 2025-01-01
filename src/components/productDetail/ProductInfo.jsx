import React from 'react';
import ConditionReport from './ConditionReport';

const ProductInfo = () => {
	return (
		<div className='space-y-10'>
			{/* Description */}
			<div>
				<h2 className='text-2xl font-medium font-sans'>DESCRIPTION</h2>
				<p className='text-base font-sans font-normal mt-4'>
					Portrait of a Kazi Nazrul Islam. I was interested in
					capturing a sense of movement and the expression on her
					face. Colors were important here, particularly with regard
					to the background and the feather coat she is wearing. The
					palette here is a little different to what I usually work
					with, and I think it conveys a deeper, more mysterious tone
					to the whole piece.{' '}
					<span className='font-bold cursor-pointer'>Read more.</span>
				</p>
			</div>

			{/* Condition Report */}
			<ConditionReport />

			{/* Details */}
			<div className='grid grid-cols-2 gap-7 md:gap-5'>
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
						<p className='text-[1.2rem] md:text-2xl font-medium font-sans'>
							{label}
						</p>
						<p className='text-base font-normal font-sans whitespace-pre-line inline-flex p-3 rounded-[5px] bg-[#f2f2f2]'>
							{value}
						</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default ProductInfo;
