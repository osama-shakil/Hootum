'use client';
import React, { useState } from 'react';
import MobileFilterSection from './MobileFilterSection';
import FilterSelect from './FilterSelect';
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

	const names = ['Artist1', 'Artist2', 'Artist3'];
	const mediums = [
		'Acrylic painting',
		'Ink',
		'Oil painting',
		'Water color',
		'Pastel color',
		'Black & white',
	];
	const materials = ['Material1', 'Material2'];
	const prices = ['High to Low', 'Low to High'];
	const regions = ['Bangladesh', 'Pakistan', 'India'];
	const sizes = ['Extra Large', 'Large', 'Medium', 'Small'];
	const orientations = ['Landscape', 'Portrait'];
	const styles = ['Style1', 'Style2'];
	const periods = ['Period1', 'Period2'];
	const features = ['Feature1', 'Feature2'];
	const subjects = ['Subject1', 'Subject2'];

	return (
		<>
			<div className='md:w-[300px] lg:w-[280px] bg-white rounded-lg lg:pr-4 md:mx-auto'>
				{/* Sort and filter Desktop */}
				<div className='hidden lg:flex justify-center items-center mb-4 border border-black px-3 py-3 rounded-[5px]'>
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
					className='hidden lg:flex items-center gap-2 text-black mb-4 pl-4 cursor-pointer'
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

				{/* Sort and filter Mobile And Tab */}

				<MobileFilterSection onClick={() => setIsOpenAll(!isOpenAll)} />

				{/* Dropdown sections */}

				<div className='space-y-3'>
					{/* Artist Name */}
					<div className='hidden lg:block'>
						<FilterSelect
							setIsOpen={setIsOpenName}
							isOpen={isOpenName}
							selectedType={selectedName}
							items={names}
							setSelectedType={setSelectedName}
						/>
					</div>

					{/* Mediums */}

					<div className='hidden lg:block'>
						<FilterSelect
							setIsOpen={setIsOpenMedium}
							isOpen={isOpenMedium}
							selectedType={selectedMedium}
							items={mediums}
							setSelectedType={setSelectedMedium}
						/>
					</div>

					{isOpenAll ? (
						<>
							<div className='block lg:hidden'>
								<FilterSelect
									setIsOpen={setIsOpenName}
									isOpen={isOpenName}
									selectedType={selectedName}
									items={names}
									setSelectedType={setSelectedName}
								/>
							</div>

							{/* Mediums */}

							<div className='block lg:hidden'>
								<FilterSelect
									setIsOpen={setIsOpenMedium}
									isOpen={isOpenMedium}
									selectedType={selectedMedium}
									items={mediums}
									setSelectedType={setSelectedMedium}
								/>
							</div>
							<div>
								<FilterSelect
									setIsOpen={setIsOpenMaterials}
									isOpen={isOpenMaterials}
									selectedType={selectedMaterials}
									items={materials}
									setSelectedType={setSelectedMaterials}
								/>
							</div>

							<div className='block lg:hidden'>
								<FilterSelect
									setIsOpen={setIsOpenPrice}
									isOpen={isOpenPrice}
									selectedType={selectedPrice}
									items={prices}
									setSelectedType={setSelectedPrice}
								/>
							</div>
						</>
					) : (
						<></>
					)}

					{/* Price Dropdown */}
					<div className='hidden lg:block'>
						<FilterSelect
							setIsOpen={setIsOpenPrice}
							isOpen={isOpenPrice}
							selectedType={selectedPrice}
							items={prices}
							setSelectedType={setSelectedPrice}
						/>
					</div>

					{isOpenAll ? (
						<>
							<div>
								<FilterSelect
									setIsOpen={setIsOpenSize}
									isOpen={isOpenSize}
									selectedType={selectedSize}
									items={sizes}
									setSelectedType={setSelectedSize}
								/>
							</div>

							<div>
								<FilterSelect
									setIsOpen={setIsOpenOrientations}
									isOpen={isOpenOrientations}
									selectedType={selectedOrientations}
									items={orientations}
									setSelectedType={setSelectedOrientations}
								/>
							</div>

							<div>
								<FilterSelect
									setIsOpen={setIsOpenPeriod}
									isOpen={isOpenPeriod}
									selectedType={selectedPeriod}
									items={periods}
									setSelectedType={setSelectedPeriod}
								/>
							</div>

							<div>
								<FilterSelect
									setIsOpen={setIsOpenRegion}
									isOpen={isOpenRegion}
									selectedType={selectedRegion}
									items={regions}
									setSelectedType={setSelectedRegion}
								/>
							</div>

							<div>
								<FilterSelect
									setIsOpen={setIsOpenFeatures}
									isOpen={isOpenFeatures}
									selectedType={selectedFeatures}
									items={features}
									setSelectedType={setSelectedFeatures}
								/>
							</div>

							<div>
								<FilterSelect
									setIsOpen={setIsOpenStyle}
									isOpen={isOpenStyle}
									selectedType={selectedStyle}
									items={styles}
									setSelectedType={setSelectedStyle}
								/>
							</div>

							<div>
								<FilterSelect
									setIsOpen={setIsOpenSubject}
									isOpen={isOpenSubject}
									selectedType={selectedSubject}
									items={subjects}
									setSelectedType={setSelectedSubject}
								/>
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
								className='hidden lg:block w-full bg-black text-white text-[14px] font-medium py-2 rounded-[20px]'
								onClick={() => setIsOpenAll(true)}
							>
								See All (10)
							</button>
						</div>
					</>
				)}
			</div>
		</>
	);
};

export default FilterSection;
