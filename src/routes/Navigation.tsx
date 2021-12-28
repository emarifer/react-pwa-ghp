// import { BrowserRouter } from 'react-router-dom';
// import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { Router, Route, Link } from 'wouter';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Logo from '/img/logo.svg';

const customNavLink = css`
	color: white;
	font-size: 1.5rem;
	text-decoration: none;
	text-transform: uppercase;
	padding-bottom: 3px;
	border-bottom: 3px solid transparent;
`;

const CustomElement = styled.li`
	list-style: none;
	margin: 1rem;

	a {
		${customNavLink}
	}
`;

const MainLayout = styled.div`
	display: flex;
	flex-direction: row;
`;

// const activeLink = {
// 	color: '#01cfa9',
// 	borderBottom: '3px solid #01cfa9',
// 	transition: 'all .8s ease-in-out',
// };

export const Navigation = () => (
	<Router base={`${import.meta.env.BASE_URL}`}>
		<MainLayout>
			<nav>
				<img src={Logo} alt="React Logo" />
				<ul>
					<CustomElement>
						<Link href=".">Home</Link>
					</CustomElement>
					<CustomElement>
						<Link href="about">About</Link>
					</CustomElement>
					<CustomElement>
						<Link href="developers">Developers</Link>
					</CustomElement>
				</ul>
			</nav>

			<Route path="developers" component={() => <h1>Developers Page</h1>} />
			<Route path="about" component={() => <h1>About Page</h1>} />
			<Route path="/" component={() => <h1>Home Page</h1>} />
		</MainLayout>
	</Router>
);

/**
 * ACTIVE INLINE NAVLINK STYLES WITH REACT ROUTER:
 * https://ultimatecourses.com/blog/active-navlink-inline-styles-with-react-router
 */
