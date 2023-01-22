import React from 'react';
import { GetStaticProps } from 'next';
import Layout from '../components/Layout';
import { useUser } from '@auth0/nextjs-auth0/client';
import { AppContext } from '../components/AppContext';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faCirclePlay,
	faCompass,
	faFaceKissBeam,
	faHandshake,
	faHourglass2,
	faLightbulb
} from '@fortawesome/free-regular-svg-icons';

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
				<a
					href="/"
					className="d-flex align-items-center flex-shrink-0 p-3 link-dark text-decoration-none border-bottom"
				>
					<svg className="bi me-2" width="30" height="24">
						<use href="#bootstrap"></use>
					</svg>
					<span className="fs-5 fw-semibold">List group</span>
				</a>
				<div className="list-group list-group-flush border-bottom scrollarea">
					<a
						href="#"
						className="list-group-item list-group-item-action active py-3 lh-tight"
						aria-current="true"
					>
						<div className="d-flex w-100 align-items-center justify-content-between">
							<strong className="mb-1">List group item heading</strong>
							<small>Wed</small>
						</div>
						<div className="col-10 mb-1 small">
							Some placeholder content in a paragraph below the heading and
							date.
						</div>
					</a>
					<a
						href="#"
						className="list-group-item list-group-item-action py-3 lh-tight"
					>
						<div className="d-flex w-100 align-items-center justify-content-between">
							<strong className="mb-1">List group item heading</strong>
							<small className="text-muted">Tues</small>
						</div>
						<div className="col-10 mb-1 small">
							Some placeholder content in a paragraph below the heading and
							date.
						</div>
					</a>
					<a
						href="#"
						className="list-group-item list-group-item-action py-3 lh-tight"
					>
						<div className="d-flex w-100 align-items-center justify-content-between">
							<strong className="mb-1">List group item heading</strong>
							<small className="text-muted">Mon</small>
						</div>
						<div className="col-10 mb-1 small">
							Some placeholder content in a paragraph below the heading and
							date.
						</div>
					</a>

					<a
						href="#"
						className="list-group-item list-group-item-action py-3 lh-tight"
						aria-current="true"
					>
						<div className="d-flex w-100 align-items-center justify-content-between">
							<strong className="mb-1">List group item heading</strong>
							<small className="text-muted">Wed</small>
						</div>
						<div className="col-10 mb-1 small">
							Some placeholder content in a paragraph below the heading and
							date.
						</div>
					</a>
					<a
						href="#"
						className="list-group-item list-group-item-action py-3 lh-tight"
					>
						<div className="d-flex w-100 align-items-center justify-content-between">
							<strong className="mb-1">List group item heading</strong>
							<small className="text-muted">Tues</small>
						</div>
						<div className="col-10 mb-1 small">
							Some placeholder content in a paragraph below the heading and
							date.
						</div>
					</a>
					<a
						href="#"
						className="list-group-item list-group-item-action py-3 lh-tight"
					>
						<div className="d-flex w-100 align-items-center justify-content-between">
							<strong className="mb-1">List group item heading</strong>
							<small className="text-muted">Mon</small>
						</div>
						<div className="col-10 mb-1 small">
							Some placeholder content in a paragraph below the heading and
							date.
						</div>
					</a>
					<a
						href="#"
						className="list-group-item list-group-item-action py-3 lh-tight"
						aria-current="true"
					>
						<div className="d-flex w-100 align-items-center justify-content-between">
							<strong className="mb-1">List group item heading</strong>
							<small className="text-muted">Wed</small>
						</div>
						<div className="col-10 mb-1 small">
							Some placeholder content in a paragraph below the heading and
							date.
						</div>
					</a>
					<a
						href="#"
						className="list-group-item list-group-item-action py-3 lh-tight"
					>
						<div className="d-flex w-100 align-items-center justify-content-between">
							<strong className="mb-1">List group item heading</strong>
							<small className="text-muted">Tues</small>
						</div>
						<div className="col-10 mb-1 small">
							Some placeholder content in a paragraph below the heading and
							date.
						</div>
					</a>
					<a
						href="#"
						className="list-group-item list-group-item-action py-3 lh-tight"
					>
						<div className="d-flex w-100 align-items-center justify-content-between">
							<strong className="mb-1">List group item heading</strong>
							<small className="text-muted">Mon</small>
						</div>
						<div className="col-10 mb-1 small">
							Some placeholder content in a paragraph below the heading and
							date.
						</div>
					</a>
					<a
						href="#"
						className="list-group-item list-group-item-action py-3 lh-tight"
						aria-current="true"
					>
						<div className="d-flex w-100 align-items-center justify-content-between">
							<strong className="mb-1">List group item heading</strong>
							<small className="text-muted">Wed</small>
						</div>
						<div className="col-10 mb-1 small">
							Some placeholder content in a paragraph below the heading and
							date.
						</div>
					</a>
					<a
						href="#"
						className="list-group-item list-group-item-action py-3 lh-tight"
					>
						<div className="d-flex w-100 align-items-center justify-content-between">
							<strong className="mb-1">List group item heading</strong>
							<small className="text-muted">Tues</small>
						</div>
						<div className="col-10 mb-1 small">
							Some placeholder content in a paragraph below the heading and
							date.
						</div>
					</a>
					<a
						href="#"
						className="list-group-item list-group-item-action py-3 lh-tight"
					>
						<div className="d-flex w-100 align-items-center justify-content-between">
							<strong className="mb-1">List group item heading</strong>
							<small className="text-muted">Mon</small>
						</div>
						<div className="col-10 mb-1 small">
							Some placeholder content in a paragraph below the heading and
							date.
						</div>
					</a>
				</div>
			</Layout>
		</AppContext.Provider>
	);
};

export default Home;
