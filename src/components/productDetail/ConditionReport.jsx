'use client';
import React, { useState } from 'react';

const ConditionReport = () => {
	const [selected, setSelected] = useState('Very good');

	const conditions = [
		{ label: 'New', icon: true },
		{ label: 'Very good', icon: true },
		{ label: 'Good', icon: true },
		{ label: 'Fair', icon: true },
		{ label: 'Revive', icon: true },
	];

	const svgIcon = (
		<svg
			className='w-6 h-6'
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M22.4291 14.813L20.3567 12.9674C19.7567 12.4334 19.7567 11.5586 20.3567 11.0246L22.4291 9.17776C23.0291 8.64376 22.8695 8.14696 22.0739 8.06896L19.3259 7.80856C18.5315 7.73416 18.1019 7.04896 18.3767 6.28936L19.8347 2.22976C20.1083 1.46776 19.7735 1.19176 19.0919 1.61296L15.8507 3.61696C15.6901 3.71755 15.5107 3.78424 15.3235 3.81295C15.1362 3.84166 14.945 3.83177 14.7617 3.78389C14.5784 3.73602 14.4068 3.65116 14.2575 3.53454C14.1082 3.41793 13.9843 3.27201 13.8935 3.10576L12.7199 1.01056C12.3251 0.304958 11.6735 0.302558 11.2715 1.00096L10.1807 2.89696C9.77628 3.59896 8.85108 3.89656 8.12508 3.56416L6.20508 2.68336C5.47548 2.34736 4.91748 2.73376 4.96068 3.54256L5.06388 5.48056C5.10828 6.28936 4.51068 7.12096 3.73908 7.32976L1.88508 7.82656C1.11468 8.03536 0.973084 8.64256 1.57308 9.17656L3.64548 11.0234C4.24548 11.5574 4.24548 12.4322 3.64548 12.9662L1.57308 14.813C0.973084 15.347 1.13148 15.8654 1.92468 15.9614L4.43868 16.2662C5.23188 16.3622 5.67348 17.0702 5.42028 17.8394L4.13148 21.749C3.87828 22.5182 4.23948 22.8158 4.93308 22.415L7.88868 20.7038C8.23349 20.5128 8.63707 20.4572 9.02067 20.5477C9.40428 20.6382 9.74041 20.8684 9.96348 21.1934L11.1899 23.0402C11.6363 23.711 12.3071 23.675 12.6779 22.9586L13.7567 20.879C13.9363 20.5339 14.2435 20.2727 14.613 20.151C14.9824 20.0293 15.3848 20.0567 15.7343 20.2274L17.8151 21.2678C18.5327 21.6242 19.0835 21.2558 19.0403 20.4494L18.9359 18.509C18.8939 17.7002 19.4891 16.871 20.2631 16.6622L22.1147 16.163C22.8875 15.9542 23.0291 15.347 22.4291 14.813ZM13.2011 16.8002H10.8011V14.4002H13.2011V16.8002ZM13.2011 13.2002H10.8011V7.20016H13.2011V13.2002Z'
				fill='black'
			/>
		</svg>
	);

	return (
		<div className='flex flex-col gap-4'>
			<h3 className='text-2xl font-medium font-sans'>Condition Report</h3>
			<div className='flex flex-wrap gap-1 md:gap-20 justify-between md:justify-start'>
				{conditions.map((condition, index) => (
					<div
						key={index}
						onClick={() => setSelected(condition.label)}
						className='flex flex-col items-center cursor-pointer gap-2'
					>
						<div
							className={`w-6 h-6 rounded-full flex justify-center items-center ${
								selected === condition.label
									? ''
									: 'bg-[#e5e5e5]'
							}`}
						>
							{selected === condition.label &&
								condition.icon &&
								svgIcon}
						</div>
						<span
							className={`text-base font-sans font-normal ${
								selected === condition.label
									? 'text-black'
									: 'text-[#999999]'
							}`}
						>
							{condition.label}
						</span>
					</div>
				))}
			</div>
		</div>
	);
};

export default ConditionReport;
