import { ArrowRight } from 'lucide-react';

const CategoriesCarouselSlide = ({
	slide,
	index,
	isActive,
	totalSlides,
	onSlideChange,
}) => {
	return (
		<div className='relative h-[495px] md:h-[400px] flex items-center text-left'>
			{/* Image as a background */}
			<img
				src={slide.image}
				alt={`Slide ${slide.id}`}
				className='absolute inset-0 w-full h-full object-cover'
			/>

			{/* Overlay */}
			<div className='absolute inset-0 bg-black/30'></div>

			{/* Description card */}
			<div className='relative z-10 md:w-[520px] bg-white bg-opacity-50 backdrop-blur-md p-6 shadow-md md:ml-10 mx-6 md:mx-0'>
				<h2 className='text-[32px] font-normal text-black mb-4 underline'>
					{slide.title}
				</h2>
				<p className='text-black text-base font-normal'>
					{slide.description}
				</p>
				<a
					href='#'
					className='inline-flex items-center mt-4 text-black underline hover:underline font-medium'
				>
					Know more
					<ArrowRight className='ml-1 h-4 w-4 -rotate-45' />
				</a>
			</div>

			{/* Centered pagination indicators */}
			<div className='absolute bottom-5 left-1/2 transform -translate-x-1/2'>
				<div className='flex gap-2'>
					{Array.from({ length: totalSlides }).map((_, i) => (
						<button
							key={i}
							onClick={() => onSlideChange(i)}
							className={`h-3 rounded-full transition-all duration-300 cursor-pointer ${
								i === index
									? 'bg-black w-3'
									: 'bg-gray-300 w-3 hover:bg-gray-400'
							}`}
							aria-label={`Go to slide ${i + 1}`}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default CategoriesCarouselSlide;
