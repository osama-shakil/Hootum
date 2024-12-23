import React from 'react';
import CustomButton from './CustomButton';

const SectionHeader = ({ title, btnText, handleClick }) => {
	return (
		<div className='flex flex-col sm:flex-row items-center gap-2 sm:gap-4 w-full py-2 sm:py-4 border-y border-black px-4 sm:px-8 md:px-12 lg:px-16'>
			<div className='w-2 sm:w-3 h-6 sm:h-8 bg-black'></div>
			<h2 className='text-2xl sm:text-lg md:text-4xl lg:text-5xl font-medium text-center sm:text-left'>
				{title.toUpperCase()}
			</h2>
			{btnText && (
				<CustomButton
					text={btnText}
					handleClick={handleClick}
					className='hidden md:flex items-center justify-center w-[250px] h-[45px] whitespace-nowrap'
				/>
			)}
		</div>
	);
};

export default SectionHeader;
