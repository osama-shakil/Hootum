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
		setSubmittedData({ rating, title, content });
	};

	return (
		<>
			<h1 className='text-lg font-semibold text-gray-900 mt-5'>
				Write a Review
			</h1>
			<div className='bg-[#fafafa] rounded-lg p-6 space-y-6'>
				<form onSubmit={handleSubmit} className='space-y-6'>
					{/* Star Rating */}
					<div>
						<label className='block text-sm font-medium text-gray-700'>
							What is it like to Product?
						</label>
						<div className='flex space-x-2 mt-2'>
							{[1, 2, 3, 4, 5].map(star => (
								<button
									type='button'
									key={star}
									onClick={() => handleStarClick(star)}
									className={`text-2xl ${
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
							className='block text-sm font-medium text-gray-700'
						>
							Review Title
						</label>
						<input
							id='review-title'
							type='text'
							value={title}
							onChange={e => setTitle(e.target.value)}
							placeholder='Great Products'
							className='mt-2 block w-full border border-gray-300 rounded-md p-2 text-sm text-gray-700 focus:ring focus:ring-blue-300 focus:outline-none'
						/>
					</div>

					{/* Review Content */}
					<div>
						<label
							htmlFor='review-content'
							className='block text-sm font-medium text-gray-700'
						>
							Review Content
						</label>
						<textarea
							id='review-content'
							value={content}
							onChange={e => setContent(e.target.value)}
							placeholder='Write your review here...'
							rows='4'
							className='mt-2 block w-full border border-gray-300 rounded-md p-2 text-sm text-gray-700 focus:ring focus:ring-blue-300 focus:outline-none'
						></textarea>
					</div>

					{/* Submit Button */}
					<button
						type='submit'
						className='w-full flex items-center justify-center bg-black text-white text-sm font-medium px-4 py-2 rounded-md hover:bg-gray-800'
					>
						Submit Review
						<span className='ml-2 text-lg'>➔</span>
					</button>
				</form>

				{/* Display Submitted Data */}
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
				)}
			</div>
		</>
	);
};

export default WriteReview;
