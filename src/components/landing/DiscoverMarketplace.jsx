'use client';

import { artPieces } from '@/utils/SiteData';
import SectionHeader from '../common/SectionHeader';
import ArtCard from './marketplace/ArtCard';
import FilterSection1 from './marketplace/FilterSection1';
import FilterSection2 from './marketplace/FilterSection2';
import MarketplaceModal from '../common/MarketplaceModal';
import { useState } from 'react';

const DiscoverMarketplace = () => {
		const [open, setOpen] = useState(false); 
		// Modal visibility state
		// const [hasTriggered, setHasTriggered] = useState(false); // Track if the modal has been shown
		// useEffect(() => {
		// 	const section = document.getElementById('unique-section');
	
		// 	if (!section) {
		// 		console.warn('Section with ID "unique-section" not found.');
		// 		return;
		// 	}
		// 	// Observe section visibility
		// 	const observer = new IntersectionObserver(
		// 		entries => {
		// 			entries.forEach(entry => {
		// 				if (entry.isIntersecting && !hasTriggered) {
		// 					setOpen(true); // Show modal when section is visible
		// 					setHasTriggered(true); // Mark as shown
		// 				}
		// 			});
		// 		},
		// 		{ threshold: 0.5 } // Trigger when 50% of the section is visible
		// 	);
		// 	observer.observe(section);
	
		// 	return () => {
		// 		if (section) observer.unobserve(section); // Cleanup observer on unmount
		// 	};
		// }, [hasTriggered]); // Dependency on `hasTriggered`
	
		const toggle = state => setOpen(state);
		// const onAgreed = dontShowAgain => {
		// 	console.log("Don't show again:", dontShowAgain);
		// };

	return (
		<div className=' '>
			<SectionHeader title='Discover Marketplace' />
			<div className='md:container my-8 md:my-16'>
				<FilterSection1 />
				<FilterSection2 />

				{/* Mobile: Horizontal scroll container */}
				<div className='md:hidden overflow-x-auto my-12'>
					<div className='flex gap-4 p-4 min-w-max'>
						{artPieces.map(piece => (
							<div className='w-64' key={piece.id}>
								<ArtCard piece={piece} />
							</div>
						))}
					</div>
				</div>

				{/* Desktop: Grid layout */}
				<div className='hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 p-4 my-12 lg:my-0'>
					{artPieces.map(piece => (
						<ArtCard key={piece.id} piece={piece} />
					))}
				</div>
				<div className='flex items-center justify-center mt-3 md:grid'>
					<button onClick={toggle} className='px-4 py-3 w-[214px] h-[44px] rounded-[20px] border border-black flex items-center justify-between bg-white'>
						<span>Load more</span>
						<svg
							width='14'
							height='14'
							viewBox='0 0 14 14'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M6.99992 0.333252C6.63173 0.333252 6.33325 0.631729 6.33325 0.999919V2.99992C6.33325 3.36811 6.63173 3.66659 6.99992 3.66659C7.36811 3.66659 7.66659 3.36811 7.66659 2.99992V0.999919C7.66659 0.631729 7.36811 0.333252 6.99992 0.333252Z'
								fill='black'
							/>
							<path
								d='M6.99992 10.3333C6.63173 10.3333 6.33325 10.6317 6.33325 10.9999V12.9999C6.33325 13.3681 6.63173 13.6666 6.99992 13.6666C7.36811 13.6666 7.66659 13.3681 7.66659 12.9999V10.9999C7.66659 10.6317 7.36811 10.3333 6.99992 10.3333Z'
								fill='black'
							/>
							<path
								d='M12.9999 6.33325C13.3681 6.33325 13.6666 6.63173 13.6666 6.99992C13.6666 7.36811 13.3681 7.66659 12.9999 7.66659H10.9999C10.6317 7.66659 10.3333 7.36811 10.3333 6.99992C10.3333 6.63173 10.6317 6.33325 10.9999 6.33325H12.9999Z'
								fill='black'
							/>
							<path
								d='M3.66659 6.99992C3.66659 6.63173 3.36811 6.33325 2.99992 6.33325H0.999919C0.631729 6.33325 0.333252 6.63173 0.333252 6.99992C0.333252 7.36811 0.631729 7.66659 0.999918 7.66659H2.99992C3.36811 7.66659 3.66659 7.36811 3.66659 6.99992Z'
								fill='black'
							/>
							<path
								d='M10.7712 2.28594C11.0315 2.02559 11.4536 2.02559 11.714 2.28594C11.9743 2.54629 11.9743 2.9684 11.714 3.22875L10.2998 4.64296C10.0394 4.90331 9.61733 4.90331 9.35698 4.64296C9.09663 4.38261 9.09663 3.9605 9.35698 3.70015L10.7712 2.28594Z'
								fill='black'
							/>
							<path
								d='M4.64287 9.3569C4.38252 9.09655 3.96041 9.09655 3.70006 9.3569L2.28585 10.7711C2.0255 11.0315 2.0255 11.4536 2.28585 11.7139C2.5462 11.9743 2.96831 11.9743 3.22866 11.7139L4.64287 10.2997C4.90322 10.0394 4.90322 9.61725 4.64287 9.3569Z'
								fill='black'
							/>
							<path
								d='M11.714 10.7712C11.9743 11.0315 11.9743 11.4536 11.714 11.714C11.4536 11.9743 11.0315 11.9743 10.7712 11.714L9.35696 10.2998C9.09661 10.0394 9.09661 9.61733 9.35696 9.35698C9.61731 9.09663 10.0394 9.09663 10.2998 9.35698L11.714 10.7712Z'
								fill='black'
							/>
							<path
								d='M4.64293 4.64287C4.90328 4.38252 4.90328 3.96041 4.64293 3.70006L3.22872 2.28585C2.96837 2.0255 2.54626 2.0255 2.28591 2.28585C2.02556 2.5462 2.02556 2.96831 2.28591 3.22866L3.70013 4.64287C3.96047 4.90322 4.38259 4.90322 4.64293 4.64287Z'
								fill='black'
							/>
						</svg>
					</button>
				</div>
			</div>
			<MarketplaceModal open={open} toggle={toggle}
			// onAgreed={onAgreed}
			 />
		</div>
	);
};

export default DiscoverMarketplace;
