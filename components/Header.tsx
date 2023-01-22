import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { useUser } from '@auth0/nextjs-auth0/client';

export enum FondoToolRoutes {
	Home = '/' as any,
	Reports = '/reports' as any
}

const Header: React.FC = () => {
	const router = useRouter();
	const isActive: (pathname: string) => boolean = (pathname) =>
		router.pathname === pathname;
	const { user } = useUser();

	return (
		<header className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark">
			<Head key={'favicon'}>
				<title>Fondo Tools</title>
				<link
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
				<meta name="theme-color" content="#ffffff"></meta>
			</Head>
			<a
				href="/"
				className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
			>
				<svg className="bi me-2" width="40" height="32">
					<use href="#bootstrap"></use>
				</svg>
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
						<svg className="bi me-2" width="16" height="16">
							<use href="/"></use>
						</svg>
						Home
					</a>
				</li>
				<li>
					<a
						href={FondoToolRoutes.Reports.toString()}
						className={
							isActive(FondoToolRoutes.Reports.toString())
								? 'nav-link text-white active'
								: 'nav-link text-white'
						}
					>
						<svg className="bi me-2" width="16" height="16">
							<use href={FondoToolRoutes.Reports.toString()}></use>
						</svg>
						Reports
					</a>
				</li>
			</ul>
			<hr />
			<div className="dropdown">
				<a
					href="#"
					className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
					id="dropdownUser1"
					data-bs-toggle="dropdown"
					aria-expanded="false"
				>
					<img
						src="https://github.com/mdo.png"
						alt=""
						width="32"
						height="32"
						className="rounded-circle me-2"
					/>
					<strong>mdo</strong>
				</a>
				<ul
					className="dropdown-menu dropdown-menu-dark text-small shadow"
					aria-labelledby="dropdownUser1"
				>
					<li>
						<a className="dropdown-item" href="#">
							New project...
						</a>
					</li>
					<li>
						<a className="dropdown-item" href="#">
							Settings
						</a>
					</li>
					<li>
						<a className="dropdown-item" href="#">
							Profile
						</a>
					</li>
					<li>
						<hr className="dropdown-divider" />
					</li>
					<li>
						<a className="dropdown-item" href="#">
							Sign out
						</a>
					</li>
				</ul>
			</div>
		</header>
	);
};

export default Header;
function useAuth0(): { isAuthenticated: any } {
	throw new Error('Function not implemented.');
}
