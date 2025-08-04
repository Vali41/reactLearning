import React from "react";

function InputBox(props) {
	const {lable,className=""} =props;
	const currencyOptions = [
		"USD",
		"EUR",
		"GBP",
		"JPY",
		"AUD",
		"CAD",
		"CNY",
		"INR",
	];
	return (
	<div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
		<div className="w-1/2">
		<label htmlFor="amount"
		 className="text-black/40 mb-2 inline-block "
		>{lable}</label>
		<input 
		 type="number"
		 id="amount"
		 placeholder="Amount"
		 disabled={false}
		 value="amount"
		/>
		</div>
		<div className="w-1/2 flex flex-wrap justify-end text-right">
		<p className="text-black/40 mb-2 w-full">Currency Type</p>
		<select 
		className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
		value="amount"
		disabled={false}
		>
			{
				currencyOptions.map((currency)=>(<option key={currency} value={currency}>{currency}</option>))
			}
		</select>
		</div>
	</div>		
	)
}

export default InputBox;
