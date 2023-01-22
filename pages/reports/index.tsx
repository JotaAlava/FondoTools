import React from 'react';
import { GetStaticProps } from 'next';
import { useUser } from '@auth0/nextjs-auth0/client';
import { AppContext } from '../../components/AppContext';
import Layout from '../../components/Layout';
import Report, { FundTypes, Reports } from '../../components/Report';

export const getStaticProps: GetStaticProps = async (context) => {
	return {
		props: {},
		revalidate: 10
	};
};

const Reports: React.FC = (props) => {
	const { user } = useUser();
	const reports: Reports = {
		Home: {
			inputs: undefined,
			body: 'Selecciona un reporte para generar un PDF.'
		},
		RiverAllWeather: {
			inputs: [
				{
					fundName: 'string',
					fundType: FundTypes.ETF,
					morningstartCode: 'string',
					percent: 1.2
				}
			]
		}
	};

	return (
		<AppContext.Provider
			value={{
				user
			}}
		>
			<Layout>
				<ul className="nav nav-tabs" id="myTab" role="tablist">
					{Object.keys(reports).map((key, idx) => {
						return (
							<li className="nav-item" role="presentation">
								<button
									className={idx === 0 ? 'nav-link active' : 'nav-link'}
									id={`${key}-tab`}
									data-bs-toggle="tab"
									data-bs-target={`#${key}`}
									type="button"
									role="tab"
									aria-controls={key}
									aria-selected="true"
								>
									{key.replace(/([A-Z])/g, ' $1').trim()}
								</button>
							</li>
						);
					})}
				</ul>
				<div className="tab-content" id="myTabContent">
					{Object.keys(reports).map((key, idx) => {
						return (
							<div
								className={
									idx === 0
										? 'tab-pane fade show active p-3'
										: 'tab-pane fade show p-3'
								}
								id={key}
								role="tabpanel"
								aria-labelledby={`${key}-tab`}
							>
								{reports[key].inputs ? (
									<Report title={key} inputs={reports[key].inputs}></Report>
								) : (
									reports[key].body
								)}
							</div>
						);
					})}
				</div>
			</Layout>
		</AppContext.Provider>
	);
};

export default Reports;
