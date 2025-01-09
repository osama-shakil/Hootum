import React, { useState } from 'react';
import Rating from './Rating';
import TermsAndConditions from '../auth/TermsAndConditions';
import { useRouter } from 'next/navigation';
import BuyConfirmationModal from './BuyConfirmationModal';
import BidConfirmationModal from './BidConfirmationModal';

const BuyNow = ({ isBidding, isAuth }) => {
	const route = useRouter();
	const [open, setOpen] = useState(false);
	const [openBuyConfirmationModal, setOpenBuyConfirmationModal] =
		useState(false);
	const [openBidConfirmationModal, setOpenBidConfirmationModal] =
		useState(false);

	const [price, setPrice] = useState(''); // Only the numeric value
	// const [isBidding, setIsBidding] = useState(false);

	const handleChange = e => {
		const value = e.target.value.replace(/[^\d]/g, ''); // Allow only numbers
		setPrice(value);
	};

	const toggle = () => setOpen(!open);
	const toggleBuyConfirmationModal = () =>
		setOpenBuyConfirmationModal(!openBuyConfirmationModal);
	const toggleBidConfirmationModal = () =>
		setOpenBidConfirmationModal(!openBidConfirmationModal);

	const handleClick = () => {
		if (isBidding) {
			toggleBidConfirmationModal();
		} else {
			toggleBuyConfirmationModal();
		}
		setOpen(false); // Close Initial Modal
	};

	const handleConfirmationModal = () => {
		route.push('/payment');
	};
	return (
		<>
			{isBidding ? (
				<div className='flex items-center justify-between'>
					<p className='text-sm font-normal'>Current Bid: ৳ 22,500</p>
					<p className='text-sm font-normal '>
						Closes in 3d 8h 32m 01s
					</p>
				</div>
			) : (
				<></>
			)}

			<div className='border-y md:border border-[#D3D3D3] md:px-4 pb-4 rounded-[5px]'>
				<div className='space-y-3'>
					{/* Artist Info */}
					<div className='flex items-center justify-between border-bottom border-b'>
						<div className='flex space-x-2 items-center'>
							<img
								src='/placeholder.svg' // Replace with dynamic profile image if needed
								alt='Bidder'
								width='32'
								height='32'
								className=' rounded-full'
							/>

							<div>
								<p className='text-sm font-normal flex'>
									Artist
								</p>
								<p className='flex items-center font-medium text-sm'>
									MD. Shahabuddin{'  '}
									<svg
										className='ml-1 mr-1'
										width='14'
										height='14'
										viewBox='0 0 14 14'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											fill-rule='evenodd'
											clip-rule='evenodd'
											d='M13.7477 5.5437L13.767 5.59445C14.0407 6.31101 14.0741 7.09711 13.8621 7.8343C13.6501 8.57149 13.2043 9.21981 12.5918 9.68157L12.5831 9.68857L9.66409 11.8734L8.22646 12.9602L7.35234 13.6208C7.24987 13.6981 7.125 13.7399 6.99665 13.7399C6.86829 13.7399 6.74343 13.6981 6.64096 13.6208L5.76684 12.9602L4.32921 11.8734L1.43034 9.70082L1.41459 9.68857L1.40759 9.68245C0.795059 9.22052 0.349294 8.57199 0.137491 7.83463C-0.0743121 7.09726 -0.0406732 6.31103 0.233337 5.59445L0.253462 5.54457L2.15746 0.573697C2.19076 0.488001 2.2473 0.413288 2.32072 0.357952C2.39414 0.302616 2.48153 0.26885 2.57309 0.260447C2.69102 0.248343 2.80945 0.278203 2.90756 0.344777C3.00566 0.411351 3.07715 0.510378 3.10946 0.624447L4.39571 4.56195H9.60459L10.8908 0.624447C10.9194 0.523369 10.9788 0.433753 11.0608 0.368163C11.1429 0.302572 11.2434 0.264296 11.3482 0.2587C11.4531 0.253104 11.5571 0.280469 11.6457 0.336958C11.7342 0.393448 11.8028 0.476229 11.842 0.573697L13.7477 5.5437ZM9.86971 7.46257C9.98563 7.33817 10.0487 7.17363 10.0457 7.00362C10.0427 6.8336 9.97387 6.67139 9.85363 6.55115C9.73339 6.43092 9.57118 6.36204 9.40117 6.35904C9.23115 6.35604 9.06661 6.41915 8.94221 6.53507L6.56221 8.91507L5.49471 7.84757C5.43463 7.7831 5.36218 7.73138 5.28168 7.69551C5.20118 7.65965 5.11428 7.64036 5.02617 7.6388C4.93805 7.63725 4.85053 7.65346 4.76881 7.68646C4.6871 7.71947 4.61287 7.7686 4.55055 7.83091C4.48824 7.89323 4.43911 7.96746 4.4061 8.04917C4.3731 8.13089 4.35689 8.21841 4.35844 8.30653C4.36 8.39464 4.37928 8.48154 4.41515 8.56204C4.45102 8.64254 4.50274 8.71499 4.56721 8.77507L6.09846 10.3063C6.22151 10.4292 6.3883 10.4982 6.56221 10.4982C6.73612 10.4982 6.90291 10.4292 7.02596 10.3063L9.86971 7.46257Z'
											fill='#3772FF'
										/>
									</svg>
									<div
										className='flex items-center px-2 justify-center border rounded-[20px]'
										style={{
											backgroundColor: '#0000000D',
										}}
									>
										<svg
											width='12'
											height='12'
											viewBox='0 0 12 12'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path
												d='M5.6972 1.03942C5.72187 0.979236 5.76389 0.927754 5.8179 0.891519C5.87192 0.855285 5.93549 0.835938 6.00054 0.835938C6.06558 0.835938 6.12915 0.855285 6.18317 0.891519C6.23718 0.927754 6.2792 0.979236 6.30387 1.03942L7.54345 4.02083C7.56666 4.07662 7.6048 4.12493 7.65369 4.16043C7.70257 4.19594 7.76031 4.21727 7.82054 4.22208L11.0394 4.47992C11.3305 4.50325 11.4483 4.86667 11.2266 5.05625L8.77428 7.15742C8.72847 7.19661 8.69433 7.24766 8.6756 7.30498C8.65687 7.36229 8.65428 7.42365 8.66812 7.48233L9.4177 10.6236C9.43277 10.6866 9.42882 10.7527 9.40635 10.8135C9.38389 10.8742 9.34392 10.927 9.29149 10.9651C9.23906 11.0031 9.17652 11.0248 9.11177 11.0274C9.04702 11.0299 8.98297 11.0132 8.9277 10.9794L6.17145 9.2965C6.11996 9.26512 6.06083 9.24852 6.00054 9.24852C5.94024 9.24852 5.88111 9.26512 5.82962 9.2965L3.07337 10.98C3.0181 11.0138 2.95405 11.0305 2.8893 11.028C2.82455 11.0254 2.76202 11.0037 2.70958 10.9657C2.65715 10.9276 2.61718 10.8748 2.59472 10.814C2.57225 10.7533 2.5683 10.6872 2.58337 10.6242L3.33295 7.48233C3.34685 7.42365 3.3443 7.36227 3.32557 7.30494C3.30684 7.24762 3.27266 7.19657 3.22679 7.15742L0.774452 5.05625C0.725343 5.01402 0.689816 4.95822 0.672339 4.89585C0.654862 4.83349 0.656215 4.76735 0.676228 4.70575C0.696241 4.64416 0.734021 4.58985 0.784815 4.54967C0.83561 4.50948 0.897152 4.48522 0.961702 4.47992L4.18054 4.22208C4.24076 4.21727 4.2985 4.19594 4.34738 4.16043C4.39627 4.12493 4.43442 4.07662 4.45762 4.02083L5.6972 1.03942Z'
												fill='#FFD600'
											/>
										</svg>

										<span className='text-[12px] font-bold'>
											4.8
										</span>
									</div>
								</p>
							</div>
						</div>
						<div className='border-l border-[#D3D3D3] h-[75px]'>
							<button className='px-6 md:px-8 py-2 mt-4 bg-black text-white rounded-[25px] hover:bg-gray-800 ml-2'>
								<span className='text-[12px] font-medium'>
									Follow
								</span>
							</button>
						</div>
					</div>
					{/* Title and Ratings */}
					<div>
						<div className='flex items-center justify-between mt-4'>
							<div className='flex items-start'>
								<h1 className='text-2xl font-bold'>
									Nazrul Art
								</h1>
								<svg
									width='18'
									height='18'
									viewBox='0 0 18 18'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M8.2125 11.1443L11.931 7.42584L11.3955 6.89109L8.2125 10.0741L6.609 8.46984L6.0735 9.00534L8.2125 11.1443ZM9 15.7223C7.4935 15.2748 6.24175 14.3621 5.24475 12.9841C4.24825 11.6056 3.75 10.0528 3.75 8.32584V4.26984L9 2.30859L14.25 4.26984V8.32584C14.25 10.0528 13.7517 11.6053 12.7552 12.9833C11.7583 14.3618 10.5065 15.2748 9 15.7223Z'
										fill='#3772FF'
									/>
								</svg>

								<svg
									width='18'
									height='18'
									viewBox='0 0 18 18'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										fill-rule='evenodd'
										clip-rule='evenodd'
										d='M10.7416 2.64182C10.2562 2.22757 9.63895 2 9.00078 2C8.36262 2 7.74537 2.22757 7.25992 2.64182C6.83042 3.00779 6.29641 3.22896 5.73392 3.27386C5.09815 3.32444 4.50122 3.59994 4.05024 4.05091C3.59927 4.50189 3.32377 5.09882 3.27319 5.73459C3.22928 6.29763 3.00657 6.83243 2.64115 7.26059C2.22731 7.74592 2 8.36286 2 9.00067C2 9.63848 2.22731 10.2554 2.64115 10.7407C3.00805 11.1697 3.22935 11.704 3.27319 12.2667C3.32346 12.903 3.59903 13.5005 4.05036 13.9519C4.50169 14.4032 5.0992 14.6788 5.73549 14.729C6.29696 14.773 6.83176 14.9941 7.26149 15.3595C7.74671 15.7729 8.36333 16 9.00078 16C9.63824 16 10.2549 15.7729 10.7401 15.3595C11.1696 14.9935 11.7036 14.7724 12.2661 14.7275C12.9021 14.6773 13.4994 14.4019 13.9507 13.9509C14.402 13.4999 14.6777 12.9028 14.7284 12.2667C14.7723 11.7053 14.9934 11.1689 15.3589 10.7407C15.7727 10.2554 16 9.63848 16 9.00067C16 8.36286 15.7727 7.74592 15.3589 7.26059C14.9929 6.83108 14.7717 6.29708 14.7268 5.73459C14.6762 5.09882 14.4007 4.50189 13.9498 4.05091C13.4988 3.59994 12.9018 3.32444 12.2661 3.27386C11.7036 3.22896 11.1712 3.00779 10.7416 2.64182ZM12.1547 8.29256C12.2677 8.18711 12.3588 8.06044 12.4228 7.91979C12.4868 7.77913 12.5225 7.62725 12.5278 7.4728C12.5331 7.31836 12.508 7.16438 12.4538 7.01966C12.3996 6.87493 12.3174 6.7423 12.212 6.62933C12.1065 6.51636 11.9799 6.42527 11.8392 6.36126C11.6985 6.29724 11.5467 6.26156 11.3922 6.25624C11.2378 6.25093 11.0838 6.27608 10.9391 6.33028C10.7943 6.38447 10.6617 6.46664 10.5487 6.57209L7.99234 8.96068L7.44969 8.4541C7.22154 8.24113 6.91814 8.12752 6.60622 8.13826C6.2943 8.14899 5.99943 8.2832 5.78646 8.51135C5.5735 8.7395 5.45988 9.0429 5.47062 9.35482C5.48135 9.66673 5.61556 9.96161 5.84371 10.1746L7.18778 11.4293C7.40563 11.6328 7.69264 11.746 7.99077 11.746C8.2889 11.746 8.57591 11.6328 8.79376 11.4293L12.1547 8.29256Z'
										fill='#ED3535'
									/>
								</svg>

								<svg
									width='18'
									height='18'
									viewBox='0 0 18 18'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M9 16.875C13.3492 16.875 16.875 13.3492 16.875 9C16.875 4.65076 13.3492 1.125 9 1.125C4.65076 1.125 1.125 4.65076 1.125 9C1.125 13.3492 4.65076 16.875 9 16.875Z'
										fill='#F44336'
									/>
									<path
										d='M9.00039 4.125L10.4629 7.0875L13.7254 7.575L11.3629 9.8625L11.9254 13.125L9.00039 11.5875L6.07539 13.125L6.63789 9.8625L4.27539 7.575L7.53789 7.0875L9.00039 4.125Z'
										fill='#FFCA28'
									/>
								</svg>
							</div>
							<div className='flex items-center space-x-4'>
								<div
									className='flex items-center px-4 py-1 border rounded-[20px]'
									style={{ backgroundColor: '#0000000D' }}
								>
									<svg
										className='mr-1'
										width='16'
										height='14'
										viewBox='0 0 16 14'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											d='M15.5 3.875C15.5 1.80417 13.7508 0.125 11.5933 0.125C9.98083 0.125 8.59583 1.06333 8 2.4025C7.40417 1.06333 6.01917 0.125 4.40583 0.125C2.25 0.125 0.5 1.80417 0.5 3.875C0.5 9.89167 8 13.875 8 13.875C8 13.875 15.5 9.89167 15.5 3.875Z'
											fill='#FF0000'
										/>
									</svg>
									19
								</div>
								<svg
									width='20'
									height='20'
									viewBox='0 0 20 20'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M14.6608 2.7696C15.5775 2.87627 16.25 3.6671 16.25 4.59044V17.5013L10 14.3763L3.75 17.5013V4.59044C3.75 3.6671 4.42167 2.87627 5.33917 2.7696C8.43599 2.41013 11.564 2.41013 14.6608 2.7696Z'
										stroke='black'
										stroke-width='1.5'
										stroke-linecap='round'
										stroke-linejoin='round'
									/>
								</svg>
							</div>
						</div>
						<p className='text-sm font-medium border border-[#00000033] px-2 py-1 rounded inline-block'>
							Oil Painting
						</p>

						<p className='flex items-center mt-1'>
							<div className='flex flex-col items-center'>
								<Rating rating={4} maxStars={5} />
							</div>
							<span className='text-sm font-medium text-gray-500 ml-1'>
								(105 Reviews)
							</span>
						</p>
					</div>
					{/* Painting Info */}
					<div>
						<p className='text-[14px] font-normal'>Painting Year</p>
						<p className='font-medium text-base'>2004</p>
					</div>
					<div>
						<p className='text-[14px] font-normal'>Collector</p>
						<p className='font-medium text-base'>Amit Saha</p>
					</div>
					{/* Price Section */}
					<div>
						<span className='text-[14px] font-normal'>Price</span>
						<div className='flex'>
							<div className='relative w-full'>
								<span className='absolute top-1/2 left-2 transform -translate-y-1/2 text-[18px] font-bold'>
									৳
								</span>
								<input
									style={{
										backgroundColor: isBidding
											? '#0000000D'
											: '',
									}}
									type='text'
									className='border pl-8 py-[14px] rounded-[5px] w-full text-[18px] font-bold outline-none placeholder:text-[#0000001A]'
									placeholder='25,200'
									value={isBidding ? price : '19200'}
									onChange={isBidding ? handleChange : ''}
									readOnly={!isBidding}
								/>
							</div>

							<div className='relative inline-block'>
								<select
									style={{
										backgroundColor: isBidding
											? ''
											: '#0000000D',
									}}
									className='appearance-none border rounded-[5px] py-[17px] pl-9 pr-11 text-sm font-medium focus:outline-none'
								>
									<option>BDT</option>
									<option>USD</option>
									<option>EUR</option>
								</select>
								<div className='absolute inset-y-0 right-6 flex items-center pointer-events-none'>
									{/* Dropdown Icon */}
									<svg
										width='18'
										height='19'
										viewBox='0 0 18 19'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											d='M2 5.50195L9 12.502L16 5.50195H2Z'
											fill='black'
										/>
									</svg>
								</div>
							</div>
						</div>

						{isBidding ? (
							<div>
								<div className='flex mt-[8px]'>
									<svg
										className='mr-1'
										width='18'
										height='19'
										viewBox='0 0 18 19'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											fill-rule='evenodd'
											clip-rule='evenodd'
											d='M9 14.3926C9.68944 14.3926 10.3721 14.2568 11.0091 13.9929C11.646 13.7291 12.2248 13.3424 12.7123 12.8549C13.1998 12.3674 13.5865 11.7886 13.8504 11.1517C14.1142 10.5147 14.25 9.83202 14.25 9.14258C14.25 8.45314 14.1142 7.77045 13.8504 7.13349C13.5865 6.49653 13.1998 5.91778 12.7123 5.43027C12.2248 4.94276 11.646 4.55605 11.0091 4.29221C10.3721 4.02837 9.68944 3.89258 9 3.89258C7.60761 3.89258 6.27226 4.4457 5.28769 5.43027C4.30312 6.41483 3.75 7.75019 3.75 9.14258C3.75 10.535 4.30312 11.8703 5.28769 12.8549C6.27226 13.8395 7.60761 14.3926 9 14.3926ZM9 11.3926C9.59674 11.3926 10.169 11.1555 10.591 10.7336C11.0129 10.3116 11.25 9.73932 11.25 9.14258C11.25 8.54584 11.0129 7.97354 10.591 7.55159C10.169 7.12963 9.59674 6.89258 9 6.89258C8.40326 6.89258 7.83097 7.12963 7.40901 7.55159C6.98705 7.97354 6.75 8.54584 6.75 9.14258C6.75 9.73932 6.98705 10.3116 7.40901 10.7336C7.83097 11.1555 8.40326 11.3926 9 11.3926Z'
											fill='black'
										/>
										<path
											d='M9 3.89258V2.39258M14.25 9.14258H15.75M9 15.8926V14.3926M2.25 9.14258H3.75'
											stroke='black'
											stroke-width='1.5'
											stroke-linecap='round'
										/>
									</svg>
									<p className='text-[14px] font-normal text-[#00000080]'>
										Estimate ৳ 19,200 - ৳ 39,200
									</p>
								</div>
								{/* Buy Button */}
								<button
									onClick={() => toggle()}
									className='w-full mt-[4px] bg-black text-white py-2 text-[18px] font-medium rounded-[5px] hover:bg-gray-800'
								>
									Place my bid
								</button>
							</div>
						) : (
							<div>
								<p className='text-[12px] mt-[4px]'>
									Creator Royalties: 2%
								</p>
								{/* Buy Button */}
								<button
									onClick={() => toggle()}
									disabled={isAuth != 'auth'}
									className='w-full mt-[3px] bg-black text-white py-2 text-[18px] font-medium rounded-[5px] hover:bg-gray-800'
								>
									Buy Now
								</button>
							</div>
						)}
					</div>
				</div>

				{isBidding ? (
					<>
						<div className='flex items-center mt-1 text-sm  font-normal'>
							<svg
								width='18'
								height='19'
								viewBox='0 0 18 19'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M9.04625 1.69092C8.95152 1.64808 8.84579 1.63583 8.74377 1.65585C8.64175 1.67588 8.54851 1.7272 8.477 1.80267C8.40742 1.8749 8.35692 1.96333 8.33008 2.05996C8.30324 2.1566 8.30089 2.2584 8.32325 2.35617C8.3975 2.68617 8.4365 3.03117 8.4365 3.38367C8.4365 4.19067 8.23325 4.75617 7.883 5.22492C7.5275 5.70117 7.013 6.08892 6.36275 6.52617C6.35251 6.53297 6.34297 6.54075 6.33425 6.54942L6.2555 6.62892C5.43323 7.15941 4.78233 7.91684 4.38156 8.80956C3.98079 9.70227 3.84733 10.692 3.99734 11.659C4.14734 12.626 4.57438 13.5287 5.22678 14.2581C5.87917 14.9874 6.72896 15.5121 7.67331 15.7685C8.61765 16.0249 9.61608 16.0022 10.5478 15.703C11.4795 15.4039 12.3045 14.8411 12.923 14.0828C13.5415 13.3245 13.927 12.4032 14.0328 11.4304C14.1386 10.4576 13.9603 9.47496 13.5193 8.60142C13.5053 8.57387 13.4848 8.55017 13.4596 8.53244C13.4343 8.51471 13.4051 8.5035 13.3744 8.49979C13.3438 8.49608 13.3127 8.49999 13.2839 8.51118C13.2551 8.52236 13.2296 8.54048 13.2095 8.56392L13.0535 8.74467C12.395 9.51417 11.8633 10.1359 10.7735 10.4134C10.727 10.4247 10.6985 10.4164 10.6783 10.4037C10.6461 10.3808 10.6221 10.3482 10.61 10.3107C10.5904 10.2587 10.5853 10.2024 10.595 10.1478C10.6048 10.0931 10.6291 10.0421 10.6655 10.0002C11.2483 9.36792 11.6623 8.50992 11.81 7.28967C12.0875 5.00367 11.0488 2.56917 9.04625 1.69092Z'
									fill='#F24E1E'
								/>
							</svg>
							{isBidding
								? '14 bidders are watching this item.'
								: ''}
						</div>
					</>
				) : (
					<></>
				)}
			</div>

			{open && (
				<TermsAndConditions
					open={open}
					toggle={toggle}
					onAgreed={handleClick}
				/>
			)}
			{openBuyConfirmationModal && (
				<BuyConfirmationModal
					open={openBuyConfirmationModal}
					toggle={toggleBuyConfirmationModal}
					onAgreed={handleConfirmationModal}
				/>
			)}
			{openBidConfirmationModal && (
				<BidConfirmationModal
					open={openBidConfirmationModal}
					toggle={toggleBidConfirmationModal}
					onAgreed={handleConfirmationModal}
				/>
			)}
		</>
	);
};

export default BuyNow;
