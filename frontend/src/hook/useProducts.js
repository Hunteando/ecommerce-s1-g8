import { useState, useEffect } from 'react';
import { createProductAdapter } from '../adapters/product.adapter';
import { getByTypeProducts } from '../Services/public.service';

export function useProducts(product) {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const abortController = new AbortController();
		const getApiproduct = async () => {
			const signal = abortController.signal;
			setLoading(true);
			try {
				const result = await getByTypeProducts(product, signal);
				setProducts(createProductAdapter(result));
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
	return { products, loading };
}
