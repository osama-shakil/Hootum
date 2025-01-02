'use client';

const page = () => {
	return (
		<div className='flex justify-center items-center py-7 px-4 md:px-0'>
			<div className='bg-[#f2f2f2] w-[360px] md:w-[800px] py-6 px-2 md:px-14 rounded-lg text-center'>
				{/* Thank You Heading */}

				{/* Image */}
				<div className=''>
					<img
						src='/payment/Thank you.svg' // Replace with the actual image path
						alt='Thank You Illustration'
						className='mx-auto w-[250px]'
					/>
				</div>

				{/* Order Confirmation Text */}
				<p className='text-[18px] font-sans font-normal text-[#00000080] mb-4'>
					We received your order and will start preparing your package
					right away. You will receive a confirmation email in a
					moment.
				</p>

				{/* Order Number */}
				<p className='text-2xl font-medium font-sans mb-6'>
					Order #123RGR231567Y Confirmed
				</p>

				{/* Track Order Button */}
				<div>
					<button className='bg-black text-white py-3 px-10 md:w-[380px] rounded-full mb-4'>
						Track Order
					</button>
				</div>

				{/* Generate Receipt Link */}
				<button className='font-normal font-sans text-base'>
					Generate Receipt
				</button>
			</div>
		</div>
	);
};

export default page;
