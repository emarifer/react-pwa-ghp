import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Logo from '/img/logo.svg';

const customNavLink = css`
	color: #e28d2b;
	font-size: 1.2rem;
	text-decoration: none;
`;

const CustomElement = styled.li`
	list-style: none;
	margin-bottom: 10px;

	a {
		${customNavLink}
	}
`;

const MainLayout = styled.div`
	display: flex;
	flex-direction: row;
`;

const activeLink = {
	borderBottom: '3px solid blueviolet',
	transition: 'all 1.5s ease-out',
};

export const Navigation = () => (
	<BrowserRouter basename={`/${import.meta.env.BASE_URL}`}>
		<MainLayout>
			<nav>
				<img src={Logo} alt="React Logo" />
				<ul>
					<CustomElement>
						<NavLink
							to="/"
							style={({ isActive }) => (isActive ? activeLink : {})}
						>
							Home
						</NavLink>
					</CustomElement>
					<CustomElement>
						<NavLink
							to="/about"
							style={({ isActive }) => (isActive ? activeLink : {})}
						>
							About
						</NavLink>
					</CustomElement>
					<CustomElement>
						<NavLink
							to="/developers"
							style={({ isActive }) => (isActive ? activeLink : {})}
						>
							Developers
						</NavLink>
					</CustomElement>
				</ul>
			</nav>

			<Routes>
				<Route path="developers" element={<h1>Developers Page</h1>} />
				<Route path="about" element={<h1>About Page</h1>} />
				<Route path="/" element={<h1>Home Page</h1>} />
				<Route path="/*" element={<Navigate to="/" replace />} />
			</Routes>
		</MainLayout>
	</BrowserRouter>
);

/**
 * ACTIVE INLINE NAVLINK STYLES WITH REACT ROUTER:
 * https://ultimatecourses.com/blog/active-navlink-inline-styles-with-react-router
 */
