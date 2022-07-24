import React from 'react';
import './footer.scss';
import EmailIcon from '@material-ui/icons/Email';

function Footer() {
	return (
		<div className="footer">
			<>
				<iframe
					title="Chandigarh Engineering College"
					src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6862.358382683108!2d76.663461!3d30.685234!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x65ef2d487904b8f3!2sChandigarh%20Engineering%20College-Block%203%2C%20Wilson%20Block!5e0!3m2!1sen!2sus!4v1614437465176!5m2!1sen!2sus"
					class="absolute inset-0"
					frameborder="0"
					scrolling="no"
				></iframe>
			</>
			<div className="footer__text">
				<div>
					<h2 className="footer__heading">Address</h2>
					<br></br>
					Chandigarh Engineering College
					<br></br>
					Willson Block (Block-3),
					<br></br>
					Chandigarh Group of Colleges Landran
					<br></br>
					Kharar-Banur Highway,
					<br></br>
					Sector 112, Greater Mohali,
					<br></br>
					Punjab 140307 (INDIA)
					<br></br>
					<br></br>
					<h2 className="heading">General Enquiry</h2>
					<br></br>
					<EmailIcon />:{''}acm.148882@gmail.com
					<br></br>
					<br></br>
					<ul className="footer__icons">
						<li>
							<a
								className="footer__icon footer__icon--yt"
								href="https://www.youtube.com/channel/UC5EootLYcMEYdm2tr3JIFpQ/featured"
							>
								<i class="fab fa-youtube icon"></i>
							</a>
						</li>
						<li>
							<a
								className="footer__icon footer__icon--insta"
								href="https://www.instagram.com/acm_cec/"
							>
								<i class="fab fa-instagram icon"></i>
							</a>
						</li>
						<li>
							<a
								className="footer__icon footer__icon--linkedin"
								href="https://www.linkedin.com/company/acm-chapter-cec/"
							>
								<i class="fab fa-linkedin-in icon"></i>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Footer;
