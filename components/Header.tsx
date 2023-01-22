import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { useUser } from '@auth0/nextjs-auth0/client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faCompass,
	faFilePdf,
	faBuilding
} from '@fortawesome/free-regular-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

export enum FondoToolRoutes {
	Home = '/' as any,
	Reportes = '/reports' as any
}

export const FondoToolRouteLogo: { [key: string]: IconProp } = {};
FondoToolRouteLogo[FondoToolRoutes.Home] = faBuilding;
FondoToolRouteLogo[FondoToolRoutes.Reportes] = faFilePdf;

const Header: React.FC = () => {
	const router = useRouter();
	const isActive: (pathname: string) => boolean = (pathname) =>
		router.pathname === pathname;

	return (
		<header className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark">
			<Head key={'favicon'}>
				<title>Fondo Tools</title>
				{/* <link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>
				<link rel="manifest" href="/site.webmanifest" />
				<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
				<meta name="msapplication-TileColor" content="#da532c" />
				<meta name="theme-color" content="#ffffff"></meta> */}
			</Head>
			<a
				href="/"
				className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
			>
				<FontAwesomeIcon className="bi me-2" icon={faCompass} />
				<span className="fs-4">FondoTools</span>
			</a>
			<hr />
			<ul className="nav nav-pills flex-column mb-auto">
				<li className="nav-item">
					<a
						href="/"
						className={
							isActive('/')
								? 'nav-link text-white active'
								: 'nav-link text-white'
						}
						aria-current="page"
					>
						<FontAwesomeIcon
							className="bi me-2"
							icon={FondoToolRouteLogo[FondoToolRoutes.Home]}
						/>
						{FondoToolRoutes[FondoToolRoutes.Home.toString()]}
					</a>
				</li>
				<li>
					<a
						href={FondoToolRoutes.Reportes.toString()}
						className={
							isActive(FondoToolRoutes.Reportes.toString())
								? 'nav-link text-white active'
								: 'nav-link text-white'
						}
					>
						<FontAwesomeIcon
							className="bi me-2"
							icon={FondoToolRouteLogo[FondoToolRoutes.Reportes]}
						/>
						{FondoToolRoutes[FondoToolRoutes.Reportes.toString()]}
					</a>
				</li>
			</ul>
			<hr />
		</header>
	);
};

export default Header;
function useAuth0(): { isAuthenticated: any } {
	throw new Error('Function not implemented.');
}
