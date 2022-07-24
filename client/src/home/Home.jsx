import React from 'react';
import { Link } from 'react-router-dom';
import { ButtonPrimary } from '../util/btn/Button';

import './home.scss';
/* -------------------------------- Functions ------------------------------- */
function exploreHome() {
	alert('hello');
}

const Home = () => {
	return (
		<div className="home">
			<section className="hero">
				<div className="hero-text">
					<h1 className="hero-text__heading">
						CCET ACM Student Chapter
					</h1>
					<h3 className="hero-text__subheading">
						Computing is not about computers, it's about living,
						living to solve the problems of society using computer
						science.
					</h3>
					<Link to="/">
						<ButtonPrimary
							text="Explore More &#8594;	"
							onClick={exploreHome}
						/>
					</Link>
					<div className="hero-text__icons">
						<Link to="#">
							<img
								src="/images/icon/fb.svg"
								alt="facebook-icon"
							/>
						</Link>
						<Link to="#">
							<img
								src="/images/icon/ig.svg"
								alt="Instagram-icon"
							/>
						</Link>
						<Link to="#">
							<img
								src="/images/icon/linkedin.svg"
								alt="linkedin-icon"
							/>
						</Link>
						<Link to="#">
							<img
								src="/images/icon/twitter.svg"
								alt="twitter-icon"
							/>
						</Link>
						<Link to="#">
							<img
								src="/images/icon/youtube.svg"
								alt="youtube-icon"
							/>
						</Link>
					</div>
				</div>
				<div className="hero-img">
					<img src="/images/home/hero.svg" alt="hero-section" />
				</div>
			</section>
			<section className="card">
				<div className="card-section">
					<img
						className="card-section__image"
						src="/images/home/card.svg"
						alt="card-image"
					/>
					<Link to="/" className="card-section__heading">
						Events
					</Link>
					<h3 className="card-section__para">
						Lorem ipsum dolor, sit amet consectetur adipisicing
						elit. Id totam, consequatur iste recusandae culpa vel,
						accusantium voluptates perferendis sint, quisquam ullam
						a! Asperiores rem quam voluptatem sint maxime minus
						officiis.
					</h3>
					<Link to="/">
						<ButtonPrimary
							text="Explore"
							onClick={exploreHome}
							className="card-section__btn"
						/>
					</Link>
				</div>
				<div className="card-section">
					<img
						className="card-section__image"
						src="/images/home/card.svg"
						alt="card-image"
					/>
					<Link to="/" className="card-section__heading">
						Education
					</Link>
					<h3 className="card-section__para">
						Lorem ipsum dolor, sit amet consectetur adipisicing
						elit. Id totam, consequatur iste recusandae culpa vel,
						accusantium voluptates perferendis sint, quisquam ullam
						a! Asperiores rem quam voluptatem sint maxime minus
						officiis.
					</h3>
					<Link to="/">
						<ButtonPrimary
							text="Explore"
							onClick={exploreHome}
							className="card-section__btn"
						/>
					</Link>
				</div>
				<div className="card-section">
					<img
						className="card-section__image"
						src="/images/home/card.svg"
						alt="card-image"
					/>
					<Link to="/" className="card-section__heading">
						Join Us
					</Link>
					<h3 className="card-section__para">
						Lorem ipsum dolor, sit amet consectetur adipisicing
						elit. Id totam, consequatur iste recusandae culpa vel,
						accusantium voluptates perferendis sint, quisquam ullam
						a! Asperiores rem quam voluptatem sint maxime minus
						officiis.
					</h3>
					<Link to="/">
						<ButtonPrimary
							text="Explore"
							onClick={exploreHome}
							className="card-section__btn"
						/>
					</Link>
				</div>
			</section>
			<section className="team">
				<h1 className="team-heading">TEAM</h1>
				<div className="team-members">
					<div className="team-member">
						<div className="team-member__image">
							{/* <img src="/images/home/card.svg" alt="" /> */}
						</div>
						<div className="team-member__name">Arpit</div>
						<div className="team-member__designation">Developer</div>
					</div>
					<div className="team-member">
						<div className="team-member__image">
							{/* <img src="/images/home/card.svg" alt="" /> */}
						</div>
						<div className="team-member__name">Arpit</div>
						<div className="team-member__designation">Developer</div>
					</div>
					<div className="team-member">
						<div className="team-member__image">
							{/* <img src="/images/home/card.svg" alt="" /> */}
						</div>
						<div className="team-member__name">Arpit</div>
						<div className="team-member__designation">Developer</div>
					</div>
					<div className="team-member">
						<div className="team-member__image">
							{/* <img src="/images/home/card.svg" alt="" /> */}
						</div>
						<div className="team-member__name">Arpit</div>
						<div className="team-member__designation">Developer</div>
					</div>
					<div className="team-member">
						<div className="team-member__image">
							{/* <img src="/images/home/card.svg" alt="" /> */}
						</div>
						<div className="team-member__name">Arpit</div>
						<div className="team-member__designation">Developer</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Home;
