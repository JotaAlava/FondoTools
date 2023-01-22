import React from 'react';
import { GetStaticProps } from 'next';
import { useUser } from '@auth0/nextjs-auth0/client';
import { AppContext } from '../../components/AppContext';
import Layout from '../../components/Layout';
import Report, { FundTypes, Reports } from '../../components/Report';

export const getServerSideProps = async (context) => {
	return {
		props: {
			reports: {
				Home: {
					inputs: null,
					body: 'Selecciona un reporte para generar un PDF.'
				},
				RiverAllWeather: {
					link: 'https://lt.morningstar.com/j2uwuwirpv/xraypdf/default.aspx',
					inputs: [
						{
							fundName: 'Vanguard World',
							fundType: FundTypes.Fund,
							morningstartCode: 'F0GBR052TN',
							percent: 20
						},
						{
							fundName: 'Amundi World Volatility FI',
							fundType: FundTypes.Fund,
							morningstartCode: 'F000003Y9Q',
							percent: 20
						},
						{
							fundName: 'iShares Gov. Germany 10.5+yr ETF',
							fundType: FundTypes.ETF,
							morningstartCode: '0P00001NR4',
							percent: 10
						},
						{
							fundName: 'Gold',
							fundType: FundTypes.ETF,
							morningstartCode: '0P0000HYBM',
							percent: 20
						},
						{
							fundName: 'Energy',
							fundType: FundTypes.Fund,
							morningstartCode: 'F0GBR04K8F',
							percent: 0
						},
						{
							fundName: 'REIT',
							fundType: FundTypes.ETF,
							morningstartCode: '0P00010310',
							percent: 0
						},
						{
							fundName: 'World Tech',
							fundType: FundTypes.Fund,
							morningstartCode: 'F0GBR04AMX',
							percent: 0
						},
						{
							fundName: 'Euro Tips',
							fundType: FundTypes.ETF,
							morningstartCode: 'F00000PEDX',
							percent: 0
						},
						{
							fundName: 'Euro Bonds',
							fundType: FundTypes.ETF,
							morningstartCode: '0P0000TKV9',
							percent: 10
						},
						{
							fundName: 'Commodity Trend 1',
							fundType: FundTypes.Fund,
							morningstartCode: 'F00000WPB6',
							percent: 10
						},
						{
							fundName: 'Commodity Trend 2',
							fundType: FundTypes.Fund,
							morningstartCode: 'F00000NOS6',
							percent: 10
						}
					]
				}
			}
		}
	};
};

const ReportsHome = ({ reports }) => {
	const { user } = useUser();

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
							<li key={idx} className="nav-item" role="presentation">
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
								key={idx}
								role="tabpanel"
								aria-labelledby={`${key}-tab`}
							>
								{reports[key].inputs ? (
									<Report
										title={key}
										inputs={reports[key].inputs}
										link={reports[key].link}
									></Report>
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

export default ReportsHome;
