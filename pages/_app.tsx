// import 'bootstrap/dist/css/bootstrap.css';
// import '../css/main.css';
import '../scss/main.scss';
import '@fortawesome/fontawesome-svg-core/styles.css';

import { AppProps } from 'next/app';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import { useEffect } from 'react';
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; /* eslint-disable import/first */

const App = ({ Component, pageProps }: AppProps) => {
	useEffect(() => {
		require('bootstrap/dist/js/bootstrap.bundle.min.js');
	}, []);

	return (
		<UserProvider>
			<Component {...pageProps} />
		</UserProvider>
	);
};

export default App;
