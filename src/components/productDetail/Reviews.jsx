import React from 'react';
import Feedback from './Feedback';
import ReviewsCard from './ReviewsCard';
import WriteReview from './WriteReview';

const Reviews = () => {
	const ratingData = [
		{ stars: 5, percentage: 70 },
		{ stars: 4, percentage: 35 },
		{ stars: 3, percentage: 10 },
		{ stars: 2, percentage: 3 },
		{ stars: 1, percentage: 2 },
	];

	const overallRating = 4.8;

	const reviews = [
		{
			author: 'Azad Rahman',
			date: '3 Days ago',
			rating: 5,
			title: 'Great Product',
			comment:
				'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.',
		},
		{
			author: 'Azad Rahman',
			date: '3 Days ago',
			rating: 4,
			title: 'Great Product',
			comment:
				'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.',
		},
	];

	return (
		<div className='space-y-14'>
			<Feedback ratingData={ratingData} overallRating={overallRating} />
			<ReviewsCard reviews={reviews} />
			<WriteReview />
		</div>
	);
};

export default Reviews;
