'use client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const PaymentComp = () => {
	const route = useRouter();
	const [paymentMethods, setPaymentMethods] = useState([
		{
			id: 1,
			label: 'City Bank',
			number: '**** **** **** 6246',
			selected: false,
			cardImage: '/payment/master.svg', // Replace with the actual image URL
		},
		{
			id: 2,
			label: 'City Bank',
			number: '**** **** **** 6246',
			selected: false,
			cardImage: '/payment/visa.svg', // Replace with the actual image URL
		},
		{
			id: 3,
			label: 'Habib Hasan',
			number: '**** **** *626',
			selected: true,
			cardImage: '/payment/bkash.svg', // Replace with the actual image URL
		},
		{
			id: 4,
			label: 'Jamil Hasan',
			number: '**** **** *626',
			selected: false,
			cardImage: '/payment/bank.svg', // Replace with the actual image URL
		},
	]);

	const [newMethod, setNewMethod] = useState('');
	const [showAddNew, setShowAddNew] = useState(false);

	const handleSelect = id => {
		setPaymentMethods(
			paymentMethods.map(method =>
				method.id === id
					? { ...method, selected: true }
					: { ...method, selected: false }
			)
		);
	};

	const handleAddNewMethod = () => {
		if (newMethod.trim()) {
			setPaymentMethods([
				...paymentMethods,
				{
					id: paymentMethods.length + 1,
					label: newMethod,
					type: 'New Method',
					number: '**** **** ****',
					selected: false,
					cardImage: '/images/default-card.png', // Replace with a default card image
				},
			]);
			setNewMethod('');
			setShowAddNew(false);
		}
	};

	const handleSubmit = () => {
		route.push('/payment-success');
	};

	return (
		<div className='flex flex-col lg:flex-row px-0 md:px-8 max-w-6xl mx-auto'>
			{/* Payment Section */}
			<div className='lg:w-1/2 md:border-r border-gray-200 order-2 md:order-1'>
				<h2 className='text-[30px] md:text-3xl font-bold font-sans border-b py-8 md:py-0 md:mb-6 md:pb-2 md:pt-8 md:pl-8 text-center md:text-left'>
					PAYMENT
				</h2>
				<p className='text-xl text-black md:pl-8 text-center md:text-left py-6 md:py-2'>
					Choose Payment Method
				</p>
				<div className='px-3 md:px-10 md:py-5 pb-3 md:pb-0'>
					<div className='space-y-4 md:pr-8'>
						{paymentMethods.map(method => (
							<div
								key={method.id}
								className={`flex items-center border rounded-lg p-2 md:p-4 ${
									method.selected
										? ' border-gray-200 bg-[#0000000D]'
										: ' border-gray-200 bg-white'
								}`}
								onClick={() => handleSelect(method.id)}
							>
								<div>
									<img
										src={method.cardImage}
										alt={`${method.label} card`}
										className='w-10 h-10 rounded'
									/>
								</div>
								<div className='flex items-center justify-around flex-1'>
									<p className='text-base font-sans font-medium text-[#00000080]'>
										{method.label}
									</p>

									<p className='text-base font-sans font-medium text-[#00000080]'>
										{method.number}
									</p>
								</div>
								<input
									type='radio'
									name='payment-method'
									className='w-4 h-4 accent-black'
									// onChange={() => handleSelect(method.id)}
									checked={method.selected}
								/>
							</div>
						))}
					</div>
					{/* Add New Method */}
					<button
						className='mt-3 md:mt-6 text-sm font-medium font-sans text-[#00000080] bg-[#0000000D] px-4 py-2 rounded-[20px]'
						onClick={() => setShowAddNew(!showAddNew)}
					>
						+ Add More
					</button>
					{showAddNew && (
						<div className='mt-4 flex items-center space-x-2'>
							<input
								type='text'
								value={newMethod}
								onChange={e => setNewMethod(e.target.value)}
								placeholder='Enter new payment method'
								className='border border-gray-300 p-2 rounded-md w-full'
							/>
							<button
								onClick={handleAddNewMethod}
								className='bg-blue-500 text-white px-4 py-2 rounded-md'
							>
								Add
							</button>
						</div>
					)}
				</div>
				<div className='px-3 md:px-10 mt-10 pb-8'>
					<button
						onClick={handleSubmit}
						className='bg-black text-base font-bold font-sans text-white px-5 py-3 rounded-full hover:bg-gray-800 flex items-center space-x-7'
					>
						<span>Pay now</span>
						<svg
							width='15'
							height='15'
							viewBox='0 0 15 15'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M7.83789 2.20889L13.1259 7.49693L7.83789 12.785'
								stroke='white'
								stroke-width='1.5'
								stroke-linecap='round'
								stroke-linejoin='round'
							/>
							<path
								d='M13.1269 7.50018L1.87695 7.50018'
								stroke='white'
								stroke-width='1.5'
								stroke-linecap='round'
								stroke-linejoin='round'
							/>
						</svg>
					</button>
				</div>
			</div>

			{/* Order Summary Section */}
			<div className='lg:w-1/2 order-1 md:order-2'>
				<h2 className='text-[30px] md:text-3xl font-bold border-b py-8 md:py-0 mb-0 md:mb-6 md:pb-2 md:pl-12 md:pt-8 font-sans text-center md:text-left'>
					ORDER SUMMARY
				</h2>
				<div className='px-3 md:px-12'>
					<div className='flex items-center justify-between py-6 md:py-2'>
						<div className='flex items-center space-x-4'>
							<div className='w-12 h-12'>
								<img
									src='/payment/paymentUser.svg'
									className='w-12 h-12'
								/>
							</div>
							<p className='text-[22px] font-sans font-medium'>
								Nazrul Art
							</p>
						</div>
						<p className='text-[22px] font-sans font-medium'>
							19,200 BDT
						</p>
					</div>
					<div className=' py-6 md:py-8 md:mt-5 border-y border-gray-200 space-y-1 md:space-y-3'>
						<div className='flex justify-between '>
							<p className='text-base font-sans font-medium'>
								Subtotal
							</p>
							<p className='text-[18px] font-sans font-medium'>
								19,200 BDT
							</p>
						</div>
						<div className='text-[#00000080] flex justify-between'>
							<p className='text-base font-normal font-sans'>
								Shipping
							</p>
							<p className='text-base font-normal font-sans'>
								Included
							</p>
						</div>
					</div>
				</div>
				<div className='px-3 md:px-12 py-6 border-b md:border-none'>
					<div className='flex justify-between'>
						<div>
							<p className='text-base font-medium mb-0'>Total</p>
							<span className='text-sm font-normal text-[#00000080]'>
								Including 2% in taxes
							</span>
						</div>

						<p className='text-2xl font-bold'>19,200 BDT</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PaymentComp;
