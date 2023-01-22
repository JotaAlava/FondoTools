import React, { ReactNode } from 'react';
import Header from './Header';

type Props = {
	children: ReactNode;
};

const Layout: React.FC<Props> = (props) => (
	<main>
		<Header></Header>

		<div className="d-flex flex-column align-items-stretch bg-white w-100">
			<div className="list-group list-group-flush border-bottom scrollarea">
				<div>{props.children}</div>
			</div>
		</div>
	</main>
);

export default Layout;
