import React from "react";
// Component

const Card = (props) => {
	return (
		<div className="flex h-40 w-96 flex-row rounded-md bg-lime-200 shadow-md">
			<img className="h-40 w-36 rounded-l-lg object-cover" src={props.src} />
			<div className="flex w-full flex-col gap-2 p-3">
				<span className="font-bold">{props.name}</span>
				<p className="h-9">{props.description}</p>
				<div className="flex h-full w-full items-end justify-end">
					<span className="font-bold">{props.price} USD</span>
				</div>
			</div>
		</div>
	);
};

export default Card;
