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
}

type Props = {
	title: string;
	inputs: Array<ReportInput>;
};

const Report: React.FC<Props> = ({ title, inputs }) => {
	const [inputState, setInputState] = useState(inputs);

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
					{inputState.map((input: ReportInput) => {
						return (
							<tr>
								<th scope="row">
									<div className="input-group mb-3">
										<input
											type="text"
											className="form-control"
											placeholder={input.fundName}
											aria-label={input.fundName}
											aria-describedby="basic-addon1"
											defaultValue={input.fundName}
										/>
									</div>
								</th>
								<td>Mark</td>
								<td>Otto</td>
								<td>@mdo</td>
							</tr>
						);
					})}
					<button
						type="button"
						className="btn btn-primary"
						onClick={() => {
							console.log(inputs);
							console.log(inputState);
						}}
					>
						Generate
					</button>
				</tbody>
			</table>
		</>
	);
};

export default Report;
