import React from 'react';

function Footer() {
	return (
		<footer
			className='flex justify-end	py-4 bg-white text-black'
			id='footerContainer'
		>
			<div className='flex footerContentContainer'>
				<p className='font-lora mx-4 text-lg'>
					Made By Salvador Villalon
				</p>
				<p className='mx-4 text-lg'>
					<a href='https://www.linkedin.com/in/salvadorvillalon/'>
						<i className='bi bi-linkedin'></i>
					</a>
				</p>
				<p className='mx-4 text-lg'>
					<a href='https://github.com/salvillalon45'>
						<i className='bi bi-github'></i>
					</a>
				</p>
			</div>
		</footer>
	);
}

export default Footer;
