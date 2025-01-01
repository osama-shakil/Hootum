'use client';
import React, { useState } from 'react';
import ProductInfo from './ProductInfo';
import AdditionalInfo from './AdditionalInfo';
import OwnershipInfo from './OwnershipInfo';
import Reviews from './Reviews';

const ProductDetailTabs = () => {
	const tabs = [
		{ id: 1, title: 'Product Info', component: <ProductInfo /> },
		{ id: 2, title: 'Additional Info', component: <AdditionalInfo /> },
		{ id: 3, title: 'Ownership Info', component: <OwnershipInfo /> },
		{ id: 4, title: 'Reviews', component: <Reviews /> },
	];

	const [activeTab, setActiveTab] = useState(1);
	return (
		<>
			<div className='flex border-b border-[#999999'>
				{tabs.map(tab => (
					<button
						key={tab.id}
						onClick={() => setActiveTab(tab.id)}
						className={`flex-1 text-center font-sans font-normal text-base py-2 ${
							activeTab === tab.id
								? 'border-b-2 border-black text-black'
								: 'text-[#999999]'
						}`}
					>
						{tab.title}
					</button>
				))}
			</div>

			{/* Tab Content */}
			<div className='md:p-6 px-2'>
				{tabs.map(tab => (
					<div
						key={tab.id}
						className={`${
							activeTab === tab.id ? 'block' : 'hidden'
						}`}
					>
						{tab.component}
					</div>
				))}
			</div>
		</>
	);
};

export default ProductDetailTabs;
