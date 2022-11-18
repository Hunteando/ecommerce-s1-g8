import { useState, useEffect } from 'react';
import { createProductsAdapter } from '../adapters/products.adapter';
import { getByTypeProducts } from '../Services/public.service';

export function useProducts(product) {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(false);
	const [copia, setCopia] = useState([]);

	useEffect(() => {
		const abortController = new AbortController();
		const getApiproduct = async () => {
			const signal = abortController.signal;
			setLoading(true);
			try {
				const result = await getByTypeProducts(product, signal);
				setProducts(createProductsAdapter(result));
				setCopia(createProductsAdapter(result));
				setLoading(false);
			} catch (error) {
				console.log(error.message);
			}
		};
		getApiproduct();
		return () => {
			abortController.abort();
		};
	}, [product]);
	return { products, loading, setProducts, copia };
}
