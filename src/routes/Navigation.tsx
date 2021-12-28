import { Router, Route } from 'wouter';
import styled from '@emotion/styled';
import Logo from '/img/logo.svg';
import { NavLink } from '../components/NavLink';

const CustomElement = styled.li`
	list-style: none;
	margin: 1rem;
`;

const MainLayout = styled.div`
	display: flex;
	flex-direction: row;
`;

export const Navigation = () => (
	<Router base={`${import.meta.env.BASE_URL}`}>
		<MainLayout>
			<nav>
				<img src={Logo} alt="React Logo" />
				<ul>
					<CustomElement>
						<NavLink href="">Home</NavLink>
					</CustomElement>
					<CustomElement>
						<NavLink href="about">About</NavLink>
					</CustomElement>
					<CustomElement>
						<NavLink href="developers">Developers</NavLink>
					</CustomElement>
				</ul>
			</nav>

			<Route path="" component={() => <h1>Home Page</h1>} />
			<Route path="about" component={() => <h1>About Page</h1>} />
			<Route path="developers" component={() => <h1>Developers Page</h1>} />
		</MainLayout>
	</Router>
);

/**
 * ACTIVE INLINE NAVLINK STYLES WITH REACT ROUTER:
 * https://ultimatecourses.com/blog/active-navlink-inline-styles-with-react-router
 */
