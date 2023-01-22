import React, { ReactNode, useState } from 'react';

export enum FundTypes {
	Fund = 'Fondo',
	ETF = 'ETF'
}

export interface ReportInput {
	fundName: string;
	fundType: FundTypes;
	morningstartCode: string;
	percent: number;
}

export interface Reports {
	[title: string]: ReportPage;
}

export interface ReportPage {
	inputs?: Array<ReportInput>;
	body?: ReactNode;
	link?: string;
}

type Props = {
	title: string;
	inputs: Array<ReportInput>;
	link: string;
};

const Report: React.FC<Props> = ({ title, inputs, link }) => {
	const [inputState, setInputState] = useState<Array<ReportInput>>(inputs);

	const openInNewTab = () => {
		const url = assembleLink(link, inputState);
		window.open(url, '_blank', 'noreferrer');
	};

	const assembleLink = (
		linkBase: string,
		inputs: Array<ReportInput>
	): string => {
		const tokenSeparator = '%5D2%5D0%5DFOESP%24%24ALL_1340%7C';
		const valueSeparator = '%7C';
		let tokenList = [];
		let tokenValues = [];

		inputs.forEach((input) => {
			tokenList.push(input.morningstartCode);
			tokenValues.push(input.percent);
		});

		const result = `${linkBase}?LanguageId=es-ES&PortfolioType=2&SecurityTokenList=${tokenList.join(
			tokenSeparator
		)}&values=${tokenValues.join(valueSeparator)}`;

		return result;
	};

	return (
		<>
			<h1>{title.replace(/([A-Z])/g, ' $1').trim()}</h1>
			<table className="table">
				<thead>
					<tr>
						<th scope="col">Nombre del Fondo</th>
						<th scope="col">Tipo</th>
						<th scope="col">Codigo Morningstar</th>
						<th scope="col">% Cartera</th>
					</tr>
				</thead>
				<tbody>
					{inputState.map((input: ReportInput, idx) => {
						return (
							<tr key={idx}>
								<td scope="row">{input.fundName}</td>
								<td scope="row">{input.fundType}</td>
								<td scope="row">{input.morningstartCode}</td>
								<td scope="row">
									<div className="input-group mb-3">
										<input
											type="text"
											className="form-control"
											placeholder={input.percent.toString()}
											aria-label={input.percent.toString()}
											aria-describedby="basic-addon1"
											defaultValue={input.percent}
											onChange={(newVal) => {
												const newState = inputState.map((row, index) => {
													if (idx === index) {
														return {
															...row,
															percent: Number.parseFloat(newVal.target.value)
														};
													}

													return row;
												});

												setInputState(newState);
											}}
										/>
									</div>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
			<button
				type="button"
				className="btn btn-primary"
				onClick={() => openInNewTab()}
			>
				Generate
			</button>
		</>
	);
};

export default Report;
