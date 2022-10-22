import CustomizedBadges from '../Cart/Card';
import { Avatar } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import './Header.css';
export default function Header() {
	return (
		<header className='header'>
			<button className='panel-btn hamburger hamburger--vortex' type='button'>
				<span className='hamburger-box'>
					<span className='hamburger-inner'></span>
				</span>
			</button>
			<h1>makeup</h1>
			<div>
				<SearchIcon
					style={{
						color: 'var(--second-color)',

						margin: '5px',
					}}
					fontSize='large'
				/>
			</div>

			<CustomizedBadges />

			<Avatar />
		</header>
	);
}
