'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function Footer() {
	const pathname = usePathname();

	if (pathname === '/auth') return null;

	return (
		<footer className='w-full bg-black text-white pb-8'>
			<div className=' md:container mx-auto px-12 md:px-6'>
				<div className='grid grid-cols-1 md:grid-cols-12'>
					<div className='md:col-span-4 py-6 md:py-16'>
						<div className='space-y-0 md:space-y-4'>
							<h2 className='text-[36px] font-medium font-dmSans'>
								Hootum.io
							</h2>
							<p className='text-[23px] md:text-[24px] font-medium text-theme-lightGray'>
								The New Creative Economy.
							</p>
						</div>
					</div>
					{/* Web Version */}
					<div className='md:col-span-8 border-l border-theme-lightGray py-6 md:py-16 md:block hidden'>
						<div className='grid grid-cols-8 gap-4 border-b border-theme-lightGray'>
							{/* First 4-column section */}
							<div className='col-span-4 '>
								<div className='grid grid-cols-2 gap-4'>
									{/* First 2-column subsection */}
									<div className='col-span-1 space-y-3 pl-2 lg:pl-10'>
										<h3 className='text-[24px] font-medium '>
											Hootum.io
										</h3>
									</div>

									{/* Second 2-column subsection */}
									<div className='col-span-1 space-y-3'>
										<h3 className='text-[24px] font-medium '>
											Info
										</h3>
									</div>
								</div>
							</div>

							{/* Second 4-column section */}
							<div className='col-span-4'>
								{/* Content for the second section */}
								<h3 className='text-[24px] font-medium '>
									Join Newsletter
								</h3>
							</div>
						</div>

						<div className='grid grid-cols-8 gap-4 pt-4'>
							{/* First 4-column section */}
							<div className='col-span-4'>
								<div className='grid grid-cols-2 gap-4'>
									{/* First 2-column subsection */}
									<div className='col-span-1'>
										<nav className='flex flex-col space-y-3 pl-2 lg:pl-10'>
											<a
												href='#'
												className='text-theme-lightGray hover:text-white transition-colors text-[14px]'
											>
												Discover
											</a>
											<a
												href='#'
												className='text-theme-lightGray hover:text-white transition-colors text-[14px] pt-3'
											>
												Connect wallet
											</a>
											<a
												href='#'
												className='text-theme-lightGray hover:text-white transition-colors text-[14px] pt-3'
											>
												Create item
											</a>
										</nav>
									</div>

									{/* Second 2-column subsection */}
									<div className='col-span-1'>
										<nav className='flex flex-col space-y-3'>
											<a
												href='#'
												className='text-theme-lightGray hover:text-white transition-colors text-[14px]'
											>
												Download
											</a>
											<a
												href='#'
												className='text-theme-lightGray hover:text-white transition-colors text-[14px] pt-3'
											>
												Demos
											</a>
											<a
												href='#'
												className='text-theme-lightGray hover:text-white transition-colors text-[14px] pt-3'
											>
												Support
											</a>
										</nav>
									</div>
								</div>
							</div>

							{/* Second 4-column section */}
							<div className='col-span-4'>
								<p className='text-[14px] text-theme-lightGray mb-4'>
									Subscribe to our newsletter to get free
									design courses and resources.
								</p>

								<div className='flex justify-center relative border border-gray-200 focus:border-gray-500 rounded-3xl py-2'>
									<Input
										type='email'
										placeholder='Enter your email'
										className='bg-transparent border-0 focus:ring-0 focus:ring-offset-0 text-white placeholder:text-gray-400'
									/>
									<Button
										size='icon'
										variant='ghost'
										className='text-white rounded-full mt-1 bg-white absolute right-4 hover:text-gray-300 h-8 w-8'
									>
										<ArrowRight className='h-4 w-4 text-black' />
									</Button>
								</div>
							</div>
						</div>
					</div>

					{/* end */}
					{/* Mobile Version */}
					<div className='md:col-span-8 border-t border-theme-lightGray  md:hidden  block '>
						<div className='grid grid-cols-2  border-b border-theme-lightGray'>
							<div className='col-span-1 py-6'>
								<div className='py-6  w-fit mx-auto'>
									<h3 className='text-lg font-semibold mb-4'>
										Hootum.io
									</h3>
									<nav className='flex flex-col space-y-1 pt-3'>
										<a
											href='#'
											className='text-theme-lightGray hover:text-white transition-colors'
										>
											Discover
										</a>
										<a
											href='#'
											className='text-theme-lightGray hover:text-white transition-colors'
										>
											Connect wallet
										</a>
										<a
											href='#'
											className='text-theme-lightGray hover:text-white transition-colors'
										>
											Create item
										</a>
									</nav>
								</div>
							</div>

							<div className='col-span-1 py-6 border-l  border-gray-600 '>
								<div className='py-6  w-fit mx-auto'>
									<h3 className='text-lg font-semibold mb-4'>
										Info
									</h3>
									<nav className='flex flex-col space-y-1 pt-3'>
										<a
											href='#'
											className='text-theme-lightGray hover:text-white transition-colors'
										>
											Download
										</a>
										<a
											href='#'
											className='text-theme-lightGray hover:text-white transition-colors'
										>
											Demos
										</a>
										<a
											href='#'
											className='text-theme-lightGray hover:text-white transition-colors'
										>
											Support
										</a>
									</nav>
								</div>
							</div>
						</div>
						<div className=' md:hidden  grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8 pt-4 my-8'>
							<div className='space-y-4'>
								<h3 className='text-lg font-semibold'>
									Join Newsletter
								</h3>

								<p className='text-sm text-theme-lightGray'>
									Subscribe our newsletter to get more free
									design course and resource
								</p>
								<div className='flex justify-center relative border border-gray-200 focus:border-gray-500 rounded-[20px]'>
									<Input
										type='email'
										placeholder='Enter your email'
										className='bg-transparent border-0 focus:ring-0 focus:ring-offset-0 text-white placeholder:text-gray-400'
									/>
									<Button
										size='icon'
										variant='ghost'
										className='text-white rounded-full bg-white absolute right-3 top-1 hover:text-gray-300 h-8 w-8'
									>
										<ArrowRight className='h-4 w-4 text-black' />
									</Button>
								</div>
							</div>
						</div>

						{/* end */}
					</div>
				</div>
				<div className='flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 pt-8 border-t border-theme-lightGray'>
					<p className='text-sm text-gray-400'>
						Copyright © 2023. All rights reserved
					</p>
					<div className='hidden md:flex items-center space-x-2'>
						<span className='text-sm text-gray-400'>
							We use cookies for better service.
						</span>
						<Button
							variant='link'
							className='text-sm text-white hover:text-gray-300 p-0'
						>
							Accept
						</Button>
					</div>
				</div>
			</div>
		</footer>
	);
}
