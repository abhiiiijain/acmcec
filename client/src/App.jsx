import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './app.scss';

import Home from './home/Home';
import Nav from './navbar/Nav';
import Team from './team/Team';
import Footer from './footer/Footer';
import ContactUs from './contact/ContactUs';
const App = () => {
	return (
		<Router>
			<Nav />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path={'/contact'} element={<ContactUs />} />
				<Route path={'/team'} element={<Team />} />
			</Routes>
			<Footer />
		</Router>
	);
};

export default App;
