import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import Logo from '/img/logo.svg';

export const Navigation = () => (
	<BrowserRouter basename={`/${import.meta.env.BASE_URL}`}>
		<div className="main-layout">
			<nav>
				<img src={Logo} alt="React Logo" />
				<ul>
					<li>
						<NavLink
							to="/"
							className={({ isActive }) => (isActive ? 'nav-active' : '')}
						>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/about"
							className={({ isActive }) => (isActive ? 'nav-active' : '')}
						>
							About
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/developers"
							className={({ isActive }) => (isActive ? 'nav-active' : '')}
						>
							Developers
						</NavLink>
					</li>
				</ul>
			</nav>

			<Routes>
				<Route path="developers" element={<h1>Developers Page</h1>} />
				<Route path="about" element={<h1>About Page</h1>} />
				<Route path="/" element={<h1>Home Page</h1>} />
				<Route path="/*" element={<Navigate to="/" replace />} />
			</Routes>
		</div>
	</BrowserRouter>
);
