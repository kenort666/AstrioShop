import classNames from 'classnames';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAppSelector } from '../../hooks/hooks';

const Header: React.FC = () => {
	const { cart } = useAppSelector((state) => state.cart);
	const { pathname } = useLocation();

	return (
		<header
			className={classNames('header', {
				'header_header--cart': pathname === '/cart'
			})}
		>
			<div className="header__wrapper">
				<Link to="/">
					<div className="header__logo">
						<svg
							version="1.0"
							xmlns="http://www.w3.org/2000/svg"
							width="151.000000pt"
							height="34.000000pt"
							viewBox="0 0 151.000000 34.000000"
							preserveAspectRatio="xMidYMid meet"
						>
							<g
								transform="translate(0.000000,34.000000) scale(0.100000,-0.100000)"
								fill="#000000"
								stroke="none"
							>
								<path
									d="M142 328 c-6 -7 -20 -49 -32 -93 -13 -44 -31 -109 -41 -144 -13 -47
                -15 -68 -7 -78 8 -10 138 -13 664 -13 619 0 654 1 663 18 5 10 26 80 46 156
                27 107 33 141 24 152 -9 11 -47 14 -169 14 -144 0 -158 -2 -175 -20 -10 -11
                -26 -20 -35 -20 -9 0 -25 9 -35 20 -18 19 -31 20 -455 20 -338 0 -440 -3 -448
                -12z m142 -75 c15 -50 46 -169 46 -175 0 -19 -20 -6 -26 17 -5 22 -12 25 -50
                25 -38 0 -44 -3 -50 -25 -6 -26 -24 -35 -24 -11 0 7 4 26 9 42 5 16 17 55 26
                87 13 49 19 57 40 57 14 0 26 -7 29 -17z m246 7 c0 -5 -20 -10 -44 -10 -31 0
                -46 -5 -50 -16 -9 -23 7 -39 54 -53 28 -8 42 -19 46 -35 12 -50 -28 -82 -92
                -74 -46 5 -34 21 16 22 41 1 45 3 48 29 2 19 -2 29 -15 33 -64 20 -83 34 -83
                62 0 15 5 33 12 40 14 14 108 16 108 2z m220 0 c0 -5 -13 -10 -30 -10 l-30 0
                0 -90 c0 -53 -4 -90 -10 -90 -6 0 -10 37 -10 90 l0 90 -30 0 c-16 0 -30 5 -30
                10 0 6 30 10 70 10 40 0 70 -4 70 -10z m201 0 c23 -13 27 -81 4 -100 -13 -11
                -13 -15 0 -41 17 -33 19 -49 5 -49 -6 0 -17 18 -26 40 -14 34 -21 40 -45 40
                -27 0 -29 -3 -29 -40 0 -22 -4 -40 -10 -40 -6 0 -10 40 -10 100 l0 100 46 0
                c25 0 54 -5 65 -10z m373 -12 c22 -36 27 -76 16 -118 -12 -43 -33 -60 -77 -60
                -54 0 -68 20 -68 100 0 83 13 100 77 100 28 0 41 -6 52 -22z m-234 -88 c0 -53
                -4 -90 -10 -90 -6 0 -10 37 -10 90 0 53 4 90 10 90 6 0 10 -37 10 -90z"
								/>
								<path
									d="M246 239 c-2 -8 -9 -29 -15 -48 -6 -19 -11 -36 -11 -37 0 -2 15 -4
                34 -4 l34 0 -10 43 c-10 47 -25 68 -32 46z"
								/>
								<path
									d="M860 210 l0 -41 36 3 c22 2 42 10 48 21 17 26 -5 51 -48 55 l-36 3 0
                -41z"
								/>
								<path
									d="M1226 228 c-35 -49 -9 -138 39 -138 36 0 55 26 55 76 0 25 -5 54 -10
                65 -15 27 -64 25 -84 -3z"
								/>
							</g>
						</svg>
					</div>
				</Link>

				{pathname !== '/cart' && (
					<Link to="/cart">
						<div className="header__cart">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="30"
								height="30"
								fill="currentColor"
								className="bi bi-basket-fill"
								viewBox="0 0 16 16"
							>
								<path d="M5.071 1.243a.5.5 0 0 1 .858.514L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 6h1.717L5.07 1.243zM3.5 10.5a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3z" />
							</svg>
							<span>{cart.length}</span>
						</div>
					</Link>
				)}
			</div>
		</header>
	);
};

export default Header;
