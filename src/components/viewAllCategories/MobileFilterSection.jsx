import React from 'react';

const MobileFilterSection = ({ onClick }) => {
	return (
		<>
			<div className='lg:hidden flex justify-center items-center mb-4 border bg-black px-3 py-3 rounded-[5px]'>
				<button
					onClick={onClick}
					className='text-white text-[14px] flex items-center'
				>
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

export default MobileFilterSection;
