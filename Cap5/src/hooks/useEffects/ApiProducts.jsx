import { useEffect, useState, createContext } from "react";
// [GET] https://api.escuelajs.co/api/v1/products

export const ApiProducts = createContext();

export const ProductsProvider = props => {
	const [products, setProducts] = useState({});

	useEffect(() => {
		fetch("https://api.escuelajs.co/api/v1/products")
        .then((res) => res.json())
		.then(data => setProducts(data))
        // .then(data => setProducts({
		// 	// title: data[0].title,
		// 	// description: data[0].description,
		// 	// src: data[0].images[0],
		// 	// price: data[0].price
		// }))
	}, []);

	return (
		<ApiProducts.Provider value={{ products, setProducts }}>
			{props.children}
		</ApiProducts.Provider>
	);
}

export default ApiProducts;
