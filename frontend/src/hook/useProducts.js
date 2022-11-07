import { useState, useEffect } from 'react';
import { createProductAdapter } from '../adapters/product.adapter';
import { getByTypeProducts } from '../Services/public.service';

export function useProducts() {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const getApiproduct = async () => {
			setLoading(true);
			try {
				const result = await getByTypeProducts('Blush');
				setProducts(createProductAdapter(result));
				setLoading(false);
			} catch (error) {
				console.log(error);
			}
		};
		getApiproduct();
	}, []);
	return { products, loading };
}
