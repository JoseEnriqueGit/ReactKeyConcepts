import { useState, useEffect } from "react";
// Components
import Card from "./components/Card";
import ListBox from "./components/ListBox";

function App() {
	const [products, setProducts] = useState();

	useEffect(() => {
		fetch("https://api.escuelajs.co/api/v1/products")
			.then((res) => res.json())
			.then((data) => setProducts(data));
	}, []);
	// console.log(products);

	return (
		<div className="flex h-2/4 w-3/4 flex-col items-center justify-center">
			<ListBox />

			<main className="m-4 flex w-full flex-wrap justify-center gap-5 overflow-auto">
				{products &&
					products.map((product, index) => {
						return (
							<Card
								key={product.id}
								name={product.title}
								description={product.description}
								src={product.images[0]}
								price={product.price}
							/>
						);
					})}
			</main>
		</div>
	);
}

export default App;
