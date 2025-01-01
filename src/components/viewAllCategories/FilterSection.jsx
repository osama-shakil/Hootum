'use client';
import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon, XIcon } from 'lucide-react';
const FilterSection = () => {
	const [isOpenName, setIsOpenName] = useState(false); // To manage dropdown visibility
	const [isOpenMedium, setIsOpenMedium] = useState(false); // To manage dropdown visibility
	const [isOpenPrice, setIsOpenPrice] = useState(false); // To manage dropdown visibility
	const [isOpenMaterials, setIsOpenMaterials] = useState(false); // To manage dropdown visibility
	const [isOpenSize, setIsOpenSize] = useState(false); // To manage dropdown visibility
	const [isOpenOrientations, setIsOpenOrientations] = useState(false); // To manage dropdown visibility
	const [isOpenPeriod, setIsOpenPeriod] = useState(false); // To manage dropdown visibility
	const [isOpenRegion, setIsOpenRegion] = useState(false); // To manage dropdown visibility
	const [isOpenFeatures, setIsOpenFeatures] = useState(false); // To manage dropdown visibility
	const [isOpenStyle, setIsOpenStyle] = useState(false); // To manage dropdown visibility
	const [isOpenSubject, setIsOpenSubject] = useState(false); // To manage dropdown visibility

	const [isOpenAll, setIsOpenAll] = useState(false); // To manage dropdown visibility

	const [selectedName, setSelectedName] = useState('Artist name');
	const [selectedMedium, setSelectedMedium] = useState('Mediums');
	const [selectedPrice, setSelectedPrice] = useState('Price');
	const [selectedMaterials, setSelectedMaterials] = useState('Materials');
	const [selectedSize, setSelectedSize] = useState('Size');
	const [selectedOrientations, setSelectedOrientations] =
		useState('Orientations');
	const [selectedPeriod, setSelectedPeriod] = useState('Period');
	const [selectedRegion, setSelectedRegion] = useState('Region & Country');
	const [selectedFeatures, setSelectedFeatures] =
		useState('Special Features');
	const [selectedStyle, setSelectedStyle] = useState('Style');
	const [selectedSubject, setSelectedSubject] = useState('Subject');
	const mediums = [
		'Acrylic painting',
		'Ink',
		'Oil painting',
		'Water color',
		'Pastel color',
		'Black & white',
	];
	const name = ['Artist1', 'Artist2', 'Artist3'];
	const price = ['High to Low', 'Low to High'];
	return (
		<>
			<div className='hidden md:block w-[280px] bg-white rounded-lg pr-4'>
				{/* Header */}
				<div className='flex justify-center items-center mb-4 border border-black px-3 py-3 rounded-[5px]'>
					<button className='text-black text-[14px] flex items-center'>
						Sort and filter all
						<svg
							className='ml-1'
							width='14'
							height='15'
							viewBox='0 0 14 15'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								fill-rule='evenodd'
								clip-rule='evenodd'
								d='M8.33306 8.1314C8.33306 7.99978 8.37202 7.87111 8.44503 7.7616L11.8174 2.70305C12.1128 2.26002 11.7952 1.66659 11.2627 1.66659H2.73676C2.2043 1.66659 1.8867 2.26002 2.18206 2.70305L5.55443 7.7616C5.62744 7.87111 5.66639 7.99978 5.66639 8.1314V12.0581C5.66639 12.5817 6.24236 12.9009 6.68639 12.6234L8.01973 11.7901C8.21465 11.6683 8.33306 11.4546 8.33306 11.2248V8.1314ZM9.6664 8.5351C9.6664 8.40349 9.70535 8.27481 9.77836 8.1653L12.9268 3.44265C13.8129 2.11354 12.8601 0.333252 11.2627 0.333252H2.73676C1.13937 0.333252 0.186588 2.11354 1.07266 3.44265L4.22109 8.1653C4.2941 8.27481 4.33306 8.40349 4.33306 8.5351V12.0581C4.33306 13.629 6.06096 14.5866 7.39306 13.7541L8.72639 12.9208C9.31116 12.5553 9.6664 11.9143 9.6664 11.2248V8.5351Z'
								fill='black'
							/>
						</svg>
					</button>
				</div>

				{/* Reset filter */}

				<div
					className='flex items-center gap-2 text-black mb-4 pl-4 cursor-pointer'
					onClick={() => setIsOpenAll(false)}
				>
					<svg
						width='18'
						height='18'
						viewBox='0 0 20 20'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							fill-rule='evenodd'
							clip-rule='evenodd'
							d='M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM7.70711 6.29289C7.31658 5.90237 6.68342 5.90237 6.29289 6.29289C5.90237 6.68342 5.90237 7.31658 6.29289 7.70711L8.58579 10L6.29289 12.2929C5.90237 12.6834 5.90237 13.3166 6.29289 13.7071C6.68342 14.0976 7.31658 14.0976 7.70711 13.7071L10 11.4142L12.2929 13.7071C12.6834 14.0976 13.3166 14.0976 13.7071 13.7071C14.0976 13.3166 14.0976 12.6834 13.7071 12.2929L11.4142 10L13.7071 7.70711C14.0976 7.31658 14.0976 6.68342 13.7071 6.29289C13.3166 5.90237 12.6834 5.90237 12.2929 6.29289L10 8.58579L7.70711 6.29289Z'
							fill='#23262F'
						/>
					</svg>

					<span className='text-[14px] font-bold'>Reset filter</span>
				</div>

				{/* Dropdown sections */}
				<div className='space-y-3'>
					{/* Artist Name */}
					<div>
						{/* Header Section */}
						<div
							className='flex justify-between items-center border border-black rounded px-3 py-3 cursor-pointer'
							onClick={() => setIsOpenName(!isOpenName)}
						>
							<span className='text-black text-[14px] font-medium'>
								{selectedName}
							</span>
							{isOpenName ? (
								<ChevronUpIcon className='w-5 h-5 text-black border border-black rounded-full' />
							) : (
								<ChevronDownIcon className='w-5 h-5 text-black border border-black rounded-full' />
							)}
						</div>

						{/* Dropdown Section */}
						{isOpenName && (
							<div className='mt-2 space-y-6 pl-4 border border-black py-3 rounded-[5px]'>
								{name.map((item, index) => (
									<div
										key={index}
										className='flex items-center gap-2'
									>
										<input
											type='radio'
											name='name'
											id={item}
											className='w-4 h-4 accent-black'
											checked={selectedName === item}
											onChange={() => {
												setSelectedName(item); // Update selected value
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
					</div>

					{/* Mediums */}

					<div>
						{/* Header Section */}
						<div
							className='flex justify-between items-center border border-black rounded px-3 py-3 cursor-pointer'
							onClick={() => setIsOpenMedium(!isOpenMedium)}
						>
							<span className='text-black text-[14px] font-medium'>
								{selectedMedium}
							</span>
							{isOpenMedium ? (
								<ChevronUpIcon className='w-5 h-5 text-black border border-black rounded-full' />
							) : (
								<ChevronDownIcon className='w-5 h-5 text-black border border-black rounded-full' />
							)}
						</div>

						{/* Dropdown Section */}
						{isOpenMedium && (
							<div className='mt-2 space-y-6 pl-4 border border-black py-3 rounded-[5px]'>
								{mediums.map((item, index) => (
									<div
										key={index}
										className='flex items-center gap-2'
									>
										<input
											type='radio'
											name='medium'
											id={item}
											className='w-4 h-4 accent-black'
											checked={selectedMedium === item}
											onChange={() => {
												setSelectedMedium(item); // Update selected value
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
					</div>
					{/* Material */}
					{isOpenAll ? (
						<>
							<div>
								{/* Header Section */}
								<div
									className='flex justify-between items-center border border-black rounded px-3 py-3 cursor-pointer'
									onClick={() =>
										setIsOpenMaterials(!isOpenMaterials)
									}
								>
									<span className='text-black text-[14px] font-medium'>
										{selectedMaterials}
									</span>
									{isOpenMaterials ? (
										<ChevronUpIcon className='w-5 h-5 text-black border border-black rounded-full' />
									) : (
										<ChevronDownIcon className='w-5 h-5 text-black border border-black rounded-full' />
									)}
								</div>

								{/* Dropdown Section */}
								{isOpenMaterials && (
									<div className='mt-2 space-y-6 pl-4 border border-black py-3 rounded-[5px]'>
										{price.map((item, index) => (
											<div
												key={index}
												className='flex items-center gap-2'
											>
												<input
													type='radio'
													name='price'
													id={item}
													className='w-4 h-4 accent-black'
													checked={
														selectedMaterials ===
														item
													}
													onChange={() => {
														setSelectedMaterials(
															item
														); // Update selected value
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
							</div>
						</>
					) : (
						<></>
					)}

					{/* Price Dropdown */}
					<div>
						{/* Header Section */}
						<div
							className='flex justify-between items-center border border-black rounded px-3 py-3 cursor-pointer'
							onClick={() => setIsOpenPrice(!isOpenPrice)}
						>
							<span className='text-black text-[14px] font-medium'>
								{selectedPrice}
							</span>
							{isOpenPrice ? (
								<ChevronUpIcon className='w-5 h-5 text-black border border-black rounded-full' />
							) : (
								<ChevronDownIcon className='w-5 h-5 text-black border border-black rounded-full' />
							)}
						</div>

						{/* Dropdown Section */}
						{isOpenPrice && (
							<div className='mt-2 space-y-6 pl-4 border border-black py-3 rounded-[5px]'>
								{price.map((item, index) => (
									<div
										key={index}
										className='flex items-center gap-2'
									>
										<input
											type='radio'
											name='price'
											id={item}
											className='w-4 h-4 accent-black'
											checked={selectedPrice === item}
											onChange={() => {
												setSelectedPrice(item); // Update selected value
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
					</div>

					{isOpenAll ? (
						<>
							<div>
								{/* Header Section */}
								<div
									className='flex justify-between items-center border border-black rounded px-3 py-3 cursor-pointer'
									onClick={() => setIsOpenSize(!isOpenSize)}
								>
									<span className='text-black text-[14px] font-medium'>
										{selectedSize}
									</span>
									{isOpenSize ? (
										<ChevronUpIcon className='w-5 h-5 text-black border border-black rounded-full' />
									) : (
										<ChevronDownIcon className='w-5 h-5 text-black border border-black rounded-full' />
									)}
								</div>

								{/* Dropdown Section */}
								{isOpenSize && (
									<div className='mt-2 space-y-6 pl-4 border border-black py-3 rounded-[5px]'>
										{price.map((item, index) => (
											<div
												key={index}
												className='flex items-center gap-2'
											>
												<input
													type='radio'
													name='price'
													id={item}
													className='w-4 h-4 accent-black'
													checked={
														selectedSize === item
													}
													onChange={() => {
														setSelectedSize(item); // Update selected value
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
							</div>

							<div>
								{/* Header Section */}
								<div
									className='flex justify-between items-center border border-black rounded px-3 py-3 cursor-pointer'
									onClick={() =>
										setIsOpenOrientations(
											!isOpenOrientations
										)
									}
								>
									<span className='text-black text-[14px] font-medium'>
										{selectedOrientations}
									</span>
									{isOpenOrientations ? (
										<ChevronUpIcon className='w-5 h-5 text-black border border-black rounded-full' />
									) : (
										<ChevronDownIcon className='w-5 h-5 text-black border border-black rounded-full' />
									)}
								</div>

								{/* Dropdown Section */}
								{isOpenOrientations && (
									<div className='mt-2 space-y-6 pl-4 border border-black py-3 rounded-[5px]'>
										{price.map((item, index) => (
											<div
												key={index}
												className='flex items-center gap-2'
											>
												<input
													type='radio'
													name='price'
													id={item}
													className='w-4 h-4 accent-black'
													checked={
														selectedOrientations ===
														item
													}
													onChange={() => {
														setSelectedOrientations(
															item
														); // Update selected value
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
							</div>

							<div>
								{/* Header Section */}
								<div
									className='flex justify-between items-center border border-black rounded px-3 py-3 cursor-pointer'
									onClick={() =>
										setIsOpenPeriod(!isOpenPeriod)
									}
								>
									<span className='text-black text-[14px] font-medium'>
										{selectedPeriod}
									</span>
									{isOpenPeriod ? (
										<ChevronUpIcon className='w-5 h-5 text-black border border-black rounded-full' />
									) : (
										<ChevronDownIcon className='w-5 h-5 text-black border border-black rounded-full' />
									)}
								</div>

								{/* Dropdown Section */}
								{isOpenPeriod && (
									<div className='mt-2 space-y-6 pl-4 border border-black py-3 rounded-[5px]'>
										{price.map((item, index) => (
											<div
												key={index}
												className='flex items-center gap-2'
											>
												<input
													type='radio'
													name='price'
													id={item}
													className='w-4 h-4 accent-black'
													checked={
														selectedPeriod === item
													}
													onChange={() => {
														setSelectedPeriod(item); // Update selected value
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
							</div>

							<div>
								{/* Header Section */}
								<div
									className='flex justify-between items-center border border-black rounded px-3 py-3 cursor-pointer'
									onClick={() =>
										setIsOpenRegion(!isOpenRegion)
									}
								>
									<span className='text-black text-[14px] font-medium'>
										{selectedRegion}
									</span>
									{isOpenRegion ? (
										<ChevronUpIcon className='w-5 h-5 text-black border border-black rounded-full' />
									) : (
										<ChevronDownIcon className='w-5 h-5 text-black border border-black rounded-full' />
									)}
								</div>

								{/* Dropdown Section */}
								{isOpenRegion && (
									<div className='mt-2 space-y-6 pl-4 border border-black py-3 rounded-[5px]'>
										{price.map((item, index) => (
											<div
												key={index}
												className='flex items-center gap-2'
											>
												<input
													type='radio'
													name='price'
													id={item}
													className='w-4 h-4 accent-black'
													checked={
														selectedRegion === item
													}
													onChange={() => {
														setSelectedRegion(item); // Update selected value
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
							</div>

							<div>
								{/* Header Section */}
								<div
									className='flex justify-between items-center border border-black rounded px-3 py-3 cursor-pointer'
									onClick={() =>
										setIsOpenFeatures(!isOpenFeatures)
									}
								>
									<span className='text-black text-[14px] font-medium'>
										{selectedFeatures}
									</span>
									{isOpenFeatures ? (
										<ChevronUpIcon className='w-5 h-5 text-black border border-black rounded-full' />
									) : (
										<ChevronDownIcon className='w-5 h-5 text-black border border-black rounded-full' />
									)}
								</div>

								{/* Dropdown Section */}
								{isOpenFeatures && (
									<div className='mt-2 space-y-6 pl-4 border border-black py-3 rounded-[5px]'>
										{price.map((item, index) => (
											<div
												key={index}
												className='flex items-center gap-2'
											>
												<input
													type='radio'
													name='price'
													id={item}
													className='w-4 h-4 accent-black'
													checked={
														selectedFeatures ===
														item
													}
													onChange={() => {
														setSelectedFeatures(
															item
														); // Update selected value
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
							</div>

							<div>
								{/* Header Section */}
								<div
									className='flex justify-between items-center border border-black rounded px-3 py-3 cursor-pointer'
									onClick={() => setIsOpenStyle(!isOpenStyle)}
								>
									<span className='text-black text-[14px] font-medium'>
										{selectedStyle}
									</span>
									{isOpenStyle ? (
										<ChevronUpIcon className='w-5 h-5 text-black border border-black rounded-full' />
									) : (
										<ChevronDownIcon className='w-5 h-5 text-black border border-black rounded-full' />
									)}
								</div>

								{/* Dropdown Section */}
								{isOpenStyle && (
									<div className='mt-2 space-y-6 pl-4 border border-black py-3 rounded-[5px]'>
										{price.map((item, index) => (
											<div
												key={index}
												className='flex items-center gap-2'
											>
												<input
													type='radio'
													name='price'
													id={item}
													className='w-4 h-4 accent-black'
													checked={
														selectedStyle === item
													}
													onChange={() => {
														setSelectedStyle(item); // Update selected value
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
							</div>

							<div>
								{/* Header Section */}
								<div
									className='flex justify-between items-center border border-black rounded px-3 py-3 cursor-pointer'
									onClick={() =>
										setIsOpenSubject(!isOpenSubject)
									}
								>
									<span className='text-black text-[14px] font-medium'>
										{selectedSubject}
									</span>
									{isOpenSubject ? (
										<ChevronUpIcon className='w-5 h-5 text-black border border-black rounded-full' />
									) : (
										<ChevronDownIcon className='w-5 h-5 text-black border border-black rounded-full' />
									)}
								</div>

								{/* Dropdown Section */}
								{isOpenSubject && (
									<div className='mt-2 space-y-6 pl-4 border border-black py-3 rounded-[5px]'>
										{price.map((item, index) => (
											<div
												key={index}
												className='flex items-center gap-2'
											>
												<input
													type='radio'
													name='price'
													id={item}
													className='w-4 h-4 accent-black'
													checked={
														selectedSubject === item
													}
													onChange={() => {
														setSelectedSubject(
															item
														); // Update selected value
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
							</div>
						</>
					) : (
						<></>
					)}
				</div>

				{/* Footer Button */}
				{isOpenAll ? (
					<></>
				) : (
					<>
						<div className='mt-10'>
							<button
								className='w-full bg-black text-white text-[14px] font-medium py-2 rounded-[20px]'
								onClick={() => setIsOpenAll(true)}
							>
								See All (10)
							</button>
						</div>
					</>
				)}
			</div>

			{/* For Mobile screen filter section */}

			<div className='md:hidden flex justify-center items-center mb-4 border bg-black px-3 py-3 rounded-[5px]'>
				<button className='text-white text-[14px] flex items-center'>
					Sort and filter all
					<svg
						className='ml-1'
						width='14'
						height='15'
						viewBox='0 0 14 15'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							fill-rule='evenodd'
							clip-rule='evenodd'
							d='M8.33306 8.1314C8.33306 7.99978 8.37202 7.87111 8.44503 7.7616L11.8174 2.70305C12.1128 2.26002 11.7952 1.66659 11.2627 1.66659H2.73676C2.2043 1.66659 1.8867 2.26002 2.18206 2.70305L5.55443 7.7616C5.62744 7.87111 5.66639 7.99978 5.66639 8.1314V12.0581C5.66639 12.5817 6.24236 12.9009 6.68639 12.6234L8.01973 11.7901C8.21465 11.6683 8.33306 11.4546 8.33306 11.2248V8.1314ZM9.6664 8.5351C9.6664 8.40349 9.70535 8.27481 9.77836 8.1653L12.9268 3.44265C13.8129 2.11354 12.8601 0.333252 11.2627 0.333252H2.73676C1.13937 0.333252 0.186588 2.11354 1.07266 3.44265L4.22109 8.1653C4.2941 8.27481 4.33306 8.40349 4.33306 8.5351V12.0581C4.33306 13.629 6.06096 14.5866 7.39306 13.7541L8.72639 12.9208C9.31116 12.5553 9.6664 11.9143 9.6664 11.2248V8.5351Z'
							fill='white'
						/>
					</svg>
				</button>
			</div>
		</>
	);
};

export default FilterSection;
