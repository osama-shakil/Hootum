import React, { useState } from 'react';

const WriteReview = () => {
	const [rating, setRating] = useState(0); // Stores selected star rating
	const [title, setTitle] = useState(''); // Stores review title
	const [content, setContent] = useState(''); // Stores review content
	const [submittedData, setSubmittedData] = useState(null); // To display submitted data

	const handleStarClick = star => {
		setRating(star);
	};

	const handleSubmit = e => {
		e.preventDefault();
		setRating(0);
		setTitle('');
		setContent('');
		// setSubmittedData({ rating, title, content });
	};

	return (
		<div>
			<h3 className='text-2xl font-bold font-sans'>Write a Review</h3>
			<div className='bg-[#fafafa] rounded-[20px] p-2 md:p-6 mt-3 border border-[#ededed]'>
				<form onSubmit={handleSubmit} className='space-y-6'>
					{/* Star Rating */}
					<div>
						<label className='block text-base font-normal font-sans'>
							What is it like to Product?
						</label>
						<div className='inline-flex space-x-1 mt-2 bg-white px-4 rounded-[50px]'>
							{[1, 2, 3, 4, 5].map(star => (
								<button
									type='button'
									key={star}
									onClick={() => handleStarClick(star)}
									className={`text-base ${
										star <= rating
											? 'text-yellow-500'
											: 'text-gray-300'
									}`}
								>
									★
								</button>
							))}
						</div>
					</div>

					{/* Review Title */}
					<div>
						<label
							htmlFor='review-title'
							className='text-base font-normal font-sans'
						>
							Review Title
						</label>
						<input
							id='review-title'
							type='text'
							value={title}
							onChange={e => setTitle(e.target.value)}
							placeholder='Great Products'
							className='mt-2 block w-full border border-[#ededed] rounded-[20px] p-3 text-[15px] font-sans text-[#808080] focus:none focus:outline-none'
						/>
					</div>

					{/* Review Content */}
					<div>
						<label
							htmlFor='review-content'
							className='block text-base font-normal'
						>
							Review Content
						</label>
						<textarea
							id='review-content'
							value={content}
							onChange={e => setContent(e.target.value)}
							placeholder='Write your review here...'
							rows='4'
							className='mt-2 block w-full border border-[#ededed] rounded-[20px] p-3 text-sm font-sans text-[#808080] focus:none focus:outline-none'
						></textarea>
					</div>

					{/* Submit Button */}
				</form>

				{/* Display Submitted Data
				{submittedData && (
					<div className='mt-6 p-4 bg-gray-50 border border-gray-200 rounded-md'>
						<h2 className='text-sm font-medium text-gray-700'>
							Your Review:
						</h2>
						<p className='mt-2 text-sm'>
							<strong>Rating:</strong> {submittedData.rating}{' '}
							Stars
						</p>
						<p className='text-sm'>
							<strong>Title:</strong> {submittedData.title}
						</p>
						<p className='text-sm'>
							<strong>Content:</strong> {submittedData.content}
						</p>
					</div>
				)} */}
			</div>
			<button
				onClick={handleSubmit}
				className=' flex items-center bg-black text-white text-base font-sans font-medium font-sans mt-4 px-6 py-3 rounded-[100px] m-0'
			>
				Submit Review
				<svg
					className='ml-5'
					width='22'
					height='22'
					viewBox='0 0 22 22'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M7.10352 7.01941L14.5819 7.01941L14.5819 14.4978'
						stroke='white'
						stroke-width='1.5'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
					<path
						d='M14.5858 7.02153L6.63086 14.9764'
						stroke='white'
						stroke-width='1.5'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
				</svg>
			</button>
		</div>
	);
};

export default WriteReview;
