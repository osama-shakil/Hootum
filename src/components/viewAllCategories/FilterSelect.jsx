import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react';
import React from 'react';

const FilterSelect = ({
	setIsOpen,
	isOpen,
	selectedType,
	items,
	setSelectedType,
}) => {
	return (
		<>
			<div
				className='flex justify-between items-center border border-black rounded px-3 py-3 cursor-pointer'
				onClick={() => setIsOpen(!isOpen)}
			>
				<span className='text-black text-[14px] font-medium'>
					{selectedType}
				</span>
				{isOpen ? (
					<ChevronUpIcon className='w-5 h-5 text-black border border-black rounded-full' />
				) : (
					<ChevronDownIcon className='w-5 h-5 text-black border border-black rounded-full' />
				)}
			</div>

			{/* Dropdown Section */}
			{isOpen && (
				<div className='mt-2 space-y-6 pl-4 border border-black py-3 rounded-[5px]'>
					{items.map((item, index) => (
						<div key={index} className='flex items-center gap-2'>
							<input
								type='radio'
								name='name'
								id={item}
								className='w-4 h-4 accent-black'
								checked={selectedType === item}
								onChange={() => {
									setSelectedType(item); // Update selected value
								}}
							/>
							<label
								htmlFor={item}
								className='text-black text-[14px] font-medium cursor-pointer'
							>
								{item}
							</label>
						</div>
					))}
				</div>
			)}
		</>
	);
};

export default FilterSelect;
