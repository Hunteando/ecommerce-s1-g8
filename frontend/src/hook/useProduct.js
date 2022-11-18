import { useEffect, useState } from 'react';
import { createProductAdapter } from '../adapters/product.adapter';
import { getByProduct } from '../Services/public.service';

export function useProduct(id) {
	const [product, setProduct] = useState({});
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const getApiproduct = async () => {
			setLoading(true);
			try {
				const result = await getByProduct(id);

				setProduct(createProductAdapter(result));
				setLoading(false);
			} catch (error) {
				console.log(error.message);
			}
		};
		getApiproduct();
	}, []);
	return { product, loading };
}
