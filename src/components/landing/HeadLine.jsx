'use client';
import React from 'react';

const HeadLine = () => {
	
	return (
		<>
			<div
				
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
		</>
	);
};

export default HeadLine;
