import React from 'react';
import { GetStaticProps } from 'next';
import Layout from '../components/Layout';
import { useUser } from '@auth0/nextjs-auth0/client';
import { AppContext } from '../components/AppContext';

export const getStaticProps: GetStaticProps = async (context) => {
	return {
		props: {},
		revalidate: 10
	};
};

const Home: React.FC = (props) => {
	const { user } = useUser();

	return (
		<AppContext.Provider
			value={{
				user
			}}
		>
			<Layout>
				<span>Herramientas para manejar fondos.</span>
			</Layout>
		</AppContext.Provider>
	);
};

export default Home;
