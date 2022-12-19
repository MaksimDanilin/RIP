import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { axiosInstance } from '../api';
import { setCategory, setProduct } from '../store/reducers/productReducer';

export const ProductPage = () => {
    const dispatch = useDispatch();
    const { product, category } = useSelector((store) => store.product);
    const { id } = useParams();
    const { authorized } = useSelector((store) => store.user);

    useEffect(() => {
        const fetchProduct = async () => {
            await axiosInstance.get(`/items/${id}`).then((response) => dispatch(setProduct(response?.data)));
        };
        const fetchCategory = async () => {
            await axiosInstance
                .get(`/categories/${product.category_id}`)
                .then((response) => dispatch(setCategory(response?.data)));
        };
        fetchProduct();
        !category.name && product.categoryId && fetchCategory();
    }, [category.name, dispatch, id, product.categoryId, product.category_id]);

    const handleClick = () => {
        const addBasket = async () => {
            const values = {
                status: 'Ожидает оплаты',
                item: +id,
                customer: 1,
            };
            const response = await axiosInstance.post('basket/', values);
            console.log(response);
        };
        addBasket();
    };

    return (
        <div className='m-8'>
            <div className='flex gap-1'>
                <Link to='/'>{category.title ? category.title : 'Главная'}</Link> <p>/</p>
                <Link to='#'>{product.name}</Link>
            </div>
            {!!product && (
                <div className='p-8 border bg-gray-100 w-1/2 flex flex-col justify-center items-center cursor-pointer mt-8'>
                    <img src={product.photo} alt={product.name} />
                    <p>
                        <strong>Название:</strong> {product.name}
                    </p>
                    <p>
                        <strong>Описание:</strong> {product.description}
                    </p>
                    <p>
                        <strong>Стоимость:</strong> {product.price}
                    </p>
                    {authorized && (
                        <button onClick={handleClick}>
                            <strong>Добавить в корзину</strong>
                        </button>
                    )}
                </div>
            )}
        </div>
    );
};
