'use client';
import * as React from 'react';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Dialog, DialogContent } from '@/components/ui/dialog';

const MobileFilterModal = ({ open, toggle }) => {
	const [priceRange, setPriceRange] = React.useState([60000]);

	const handleSliderChange = value => {
		setPriceRange(value);
	};
	const handleCancel = () => {
		toggle(false);
	};

	const handleProceed = () => {
		toggle(false);
	};

	return (
		<Dialog open={open} onOpenChange={toggle}>
			<DialogContent>
				<div className='pt-2'>
					<div className='md:hidden flex flex-col p-2 items-center justify-between'>
						{/* Price Filter */}
						<div>
							<label className='text-sm font-medium'>Price</label>
							<Select defaultValue='highest'>
								<SelectTrigger className='w-[250px] focus:ring-0 focus:ring-offset-0'>
									<SelectValue />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value='highest'>
										Highest price
									</SelectItem>
									<SelectItem value='lowest'>
										Lowest price
									</SelectItem>
								</SelectContent>
							</Select>
						</div>

						{/* Likes Filter */}
						<div className='mt-4'>
							<label className='text-sm font-medium'>Likes</label>
							<Select defaultValue='most'>
								<SelectTrigger className='w-[250px] focus:ring-0 focus:ring-offset-0'>
									<SelectValue />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value='most'>
										Most liked
									</SelectItem>
									<SelectItem value='least'>
										Least liked
									</SelectItem>
								</SelectContent>
							</Select>
						</div>

						{/* Creator Filter */}
						<div className='mt-4'>
							<label className='text-sm font-medium'>
								Creator
							</label>
							<Select defaultValue='verified'>
								<SelectTrigger className='w-[250px] focus:ring-0 focus:ring-offset-0'>
									<SelectValue />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value='verified'>
										Verified only
									</SelectItem>
									<SelectItem value='all'>
										All creators
									</SelectItem>
								</SelectContent>
							</Select>
						</div>
						<div className='w-full mt-9 px-2'>
							<div className='flex items-center justify-between'>
								<label className='text-sm font-medium'>
									Price range
								</label>
							</div>
							<div className='relative'>
								<Slider
									value={priceRange}
									max={100000}
									min={5000}
									step={1000}
									onValueChange={handleSliderChange}
									className='w-full'
								/>
								{/* Dynamic Bubble Above Slider Thumb */}
								<div
									className='absolute text-sm font-medium text-white bg-black px-2 py-1 rounded-full transform -translate-y-[57px] -translate-x-1/2 whitespace-nowrap'
									style={{
										left: `calc(${
											((priceRange[0] - 5000) / 95000) *
											100
										}%)`,
									}}
								>
									{priceRange[0].toLocaleString()} BDT
									<div className='absolute bottom-0 left-1/2 h-2 w-3 -translate-x-1/2 translate-y-[80%] bg-black clip-pointer'></div>
								</div>
							</div>
							<div className='flex items-center justify-between text-sm text-muted-foreground'>
								<span className='text-black'>5,000 BDT</span>
								<span className='text-black'>100,000 BDT</span>
							</div>
						</div>
					</div>
				</div>

				<div className='flex justify-around mt-3'>
					<button
						onClick={handleCancel}
						className='p-2 w-[100px] font-normal rounded-full text-md text-black border border-black hover:bg-gray-100 transition-all'
					>
						Cancel
					</button>

					<button
						onClick={handleProceed}
						className='p-2 w-[100px] font-normal rounded-full text-md bg-black text-white'
					>
						Apply
					</button>
				</div>
			</DialogContent>
		</Dialog>
	);
};

export default MobileFilterModal;
