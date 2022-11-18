import { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { useProducts } from '../../../hook/useProducts';

export const DataContex = createContext();

export const ProductsProvider = ({ children }) => {
	const [order, setOrder] = useState('');
	const { product } = useParams();
	const { products, loading, setProducts, copia } = useProducts(product);
	const data = {
		copia,
		product,
		products,
		loading,
		setProducts,
		order,
		setOrder,
	};
	return <DataContex.Provider value={data}>{children}</DataContex.Provider>;
};

ProductsProvider.propTypes = {
	children: PropTypes.element,
};
