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
			{/* Responsive Tabs */}
			<div className='flex md:justify-between border-b border-[#999999] overflow-x-auto md:overflow-x-visible no-scrollbar'>
				{tabs.map(tab => (
					<button
						key={tab.id}
						onClick={() => setActiveTab(tab.id)}
						className={`flex-shrink-0 md:flex-1 text-center text-base py-2 px-4 ${
							activeTab === tab.id
								? 'border-b-2 border-black text-black font-medium'
								: 'text-[#999999] font-normal'
						}`}
					>
						{tab.title}
					</button>
				))}
			</div>

			{/* Tab Content */}
			<div className='md:p-6'>
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
