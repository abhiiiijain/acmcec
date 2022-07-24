import React from 'react';
import { Link} from 'react-router-dom';
import './nav.scss';
const Nav = () => {
	return (
		<nav className="navbar">
			<img src="/images/home/nav.svg" className="navbar__logo-img" alt='circle'/>
			<div className="navbar__logo">ACM CEC</div>
			<ul className="navbar__elements">
				<li className="navbar__elements-elem">
					<Link to={'/'}>Home</Link>
				</li>
				<li className="navbar__elements-elem">
					<Link to={'/events'}>Events</Link>
				</li>
				<li className="navbar__elements-elem">
					<Link to={'/blog'}>Blog</Link>
				</li>
				<li className="navbar__elements-elem">
					<Link to={ '/team'}>Team</Link>
				</li>
				<li className="navbar__elements-elem">
					<Link to={'/gallery'}>Gallery</Link>
				</li>
				<li className="navbar__elements-elem">
					<Link to={'/contact'}>Contact Us</Link>
				</li>
			</ul>
			{/* <div className="navbar__elements-magazine">Magazine</div> */}
		</nav>
	);
};

export default Nav;
