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

	const [activeTab, setActiveTab] = useState(4);
	return (
		<>
			<div className='flex border-b border-gray-300'>
				{tabs.map(tab => (
					<button
						key={tab.id}
						onClick={() => setActiveTab(tab.id)}
						className={`flex-1 text-center py-2 ${
							activeTab === tab.id
								? 'border-b-2 border-black text-black'
								: 'text-gray-500'
						}`}
					>
						{tab.title}
					</button>
				))}
			</div>

			{/* Tab Content */}
			<div className='p-6'>
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
