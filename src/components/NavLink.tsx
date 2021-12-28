/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Link, useRoute } from 'wouter';

interface Props {
	href: string;
	children: string;
}

const NavLinkStyled = styled(Link)`
	color: white;
	font-size: 1.5rem;
	text-decoration: none;
	text-transform: uppercase;
	position: relative;
	/* padding-bottom: 3px;
	border-bottom: 3px solid transparent; */

	:after {
		content: '';
		width: 3.5rem;
		height: 5px;
		background: #01cfa9;
		opacity: 0;
		position: absolute;
		bottom: -8px;
		left: 0;
		transform: translateX(150px);
		transition: all 0.3s ease-in-out;
	}
`;

const active = css`
	color: #01cfa9;
	/* border-bottom: 3px solid #01cfa9;
	transition: all 0.8s ease-in-out; */

	:after {
		opacity: 1;
		transform: translateX(0px);
		transition: all 0.2s ease-in-out;
	}
`;

export const NavLink = ({ href, children }: Props) => {
	const [isActive] = useRoute(href);

	return (
		<NavLinkStyled href={href} css={isActive && active}>
			{children}
		</NavLinkStyled>
	);
};
