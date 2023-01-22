import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router';
import React, { ReactNode } from 'react';
import Header, { FondoToolRouteLogo, FondoToolRoutes } from './Header';

type Props = {
	children: ReactNode;
};

const Layout: React.FC<Props> = (props) => {
	const router = useRouter();
	const title: () => string = () => FondoToolRoutes[router.pathname];

	return (
		<main>
			<Header></Header>

			<div className="d-flex flex-column align-items-stretch bg-white w-100">
				<div className="list-group list-group-flush scrollarea">
					<a
						href="/"
						className="d-flex align-items-center flex-shrink-0 p-3 link-dark text-decoration-none border-bottom"
					>
						<FontAwesomeIcon
							className="bi me-2"
							icon={FondoToolRouteLogo[FondoToolRoutes[title()]]}
						/>
						<span className="fs-5 fw-semibold">{title()}</span>
					</a>
					<div className="p-3 scrollarea">{props.children}</div>
				</div>
			</div>
		</main>
	);
};

export default Layout;
