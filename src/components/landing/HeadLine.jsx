'use client';
import React, { useState, useEffect } from 'react';
import MarketplaceModal from '../common/MarketplaceModal';

const HeadLine = () => {
	const [open, setOpen] = useState(false); // Modal visibility state
	const [hasTriggered, setHasTriggered] = useState(false); // Track if the modal has been shown

	useEffect(() => {
		const section = document.getElementById('unique-section');

		if (!section) {
			console.warn('Section with ID "unique-section" not found.');
			return;
		}

		// Observe section visibility
		const observer = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting && !hasTriggered) {
						setOpen(true); // Show modal when section is visible
						setHasTriggered(true); // Mark as shown
					}
				});
			},
			{ threshold: 0.5 } // Trigger when 50% of the section is visible
		);

		observer.observe(section);

		return () => {
			if (section) observer.unobserve(section); // Cleanup observer on unmount
		};
	}, [hasTriggered]); // Dependency on `hasTriggered`

	const toggle = state => setOpen(state);
	const onAgreed = dontShowAgain => {
		console.log("Don't show again:", dontShowAgain);
	};

	return (
		<>
			<div
				id='unique-section'
				className='border-y border-black relative overflow-hidden whitespace-nowrap bg-white'
			>
				<div className='inline-block animate-[marquee_25s_linear_infinite] py-4'>
					<span className='inline-block'>
						VIEW COLLECTIONS - CREATE WALLET - VIEW COLLECTIONS -
						CREATE WALLET - VIEW COLLECTIONS - CREATE WALLET - VIEW
						COLLECTIONS - CREATE WALLET -
					</span>
				</div>
				{/* <div className='absolute top-0 inline-block animate-[marquee2_25s_linear_infinite] py-4'>
					<span className='inline-block'>
						VIEW COLLECTIONS - CREATE WALLET - VIEW COLLECTIONS -
						CREATE WALLET - VIEW COLLECTIONS - CREATE WALLET - VIEW
						COLLECTIONS - CREATE WALLET -
					</span>
				</div> */}
			</div>
			<MarketplaceModal open={open} toggle={toggle} onAgreed={onAgreed} />
		</>
	);
};

export default HeadLine;
