import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { axiosInstance } from '../api';
import { setBasket } from '../store/reducers/basketReducer';

export const BasketPage = () => {
    const { basket } = useSelector((store) => store.basket);
    const { authorized } = useSelector((store) => store.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchBasket = async () => {
            await axiosInstance.get('basket-depth').then((response) => dispatch(setBasket(response?.data)));
        };
        authorized ? fetchBasket() : navigate('/');
    }, [authorized, dispatch, navigate]);

    const handleDelete = (id) => {
        const fetchDelete = async (id) => {
            await axiosInstance
                .delete(`basket/${id}`)
                .then(
                    async () =>
                        await axiosInstance.get('basket-depth').then((response) => dispatch(setBasket(response?.data)))
                );
        };
        fetchDelete(id);
    };

    return (
        <div>
            <div className='flex gap-1'>
                <Link to='/'>Главная</Link> <p>/</p>
                <Link to='#'>Корзина</Link>
            </div>
            <ul>
                {basket.map((note) => (
                    <li key={note.id} className='p-4 m-4'>
                        <p>Статус: {note.status}</p>
                        <p>Название: {note?.item.name}</p>
                        <p>Стоимость: {note?.item.price}</p>
                        <img src={note?.item.photo} alt={note?.item.name} />
                        <button onClick={() => handleDelete(note.id)}>Удалить</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};
