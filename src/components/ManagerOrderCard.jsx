import dayjs from 'dayjs';
import React from 'react';
import { useDispatch } from 'react-redux';
import axiosInstance from '../api';
import { setOrders } from '../store/reducers/orderReducer';

export const ManagerOrderCard = (props) => {
    const dispatch = useDispatch();
    const handleUpdate = async (status) => {
        const values = { status };
        await axiosInstance.put(`orders/${props.id}/`, values).then(async () => {
            await axiosInstance.get('orders-depth').then((response) => dispatch(setOrders(response?.data)));
        });
    };
    return (
        <div className='p-8 md:w-[720px] border rounded-md flex flex-col md:flex-row gap-8 items-start'>
            <img src={props?.item.photo} alt={props?.item.name} className='w-96' />
            <div>
                <p>Название: {props?.item.name}</p>
                <p>Стоимость: {props?.item.price}</p>
                <p>Пользователь: {props?.customer?.email}</p>
                <p>Дата оформления заказа: {dayjs(props.order_date).format('YYYY.MM.DD HH:mm')}</p>
                {(props.status === 'Отменен' || props.status === 'Выдан') && (
                    <p>Дата завершения заказа: {dayjs(props.completion_date).format('YYYY.MM.DD HH:mm')}</p>
                )}
                {props.status === 'Готов к выдачи' && (
                    <p>Дата сборки заказа: {dayjs(props.assembly_date).format('YYYY.MM.DD HH:mm')}</p>
                )}
                {props.status !== 'Отменен' && props.status !== 'Выдан' && (
                    <p>Статус заказа: {props.status}</p>
                )}
                {props.status !== 'Отменен' && props.status !== 'Выдан' && props.status !== 'Готов к выдачи' && (
                    <select onChange={(e) => handleUpdate(e.target.value)}>
                        <option disabled>Статус заказа</option>
                        <option selected={props.status === 'Оформлен'} value='Оформлен'>
                            Оформлен
                        </option>
                        <option selected={props.status === 'Готов к выдачи'} value='Готов к выдачи'>
                            Готов к выдачи
                        </option>
                        <option selected={props.status === 'Отменен'} value='Отменен'>
                            Отменен
                        </option>
                    </select>
                )}
                {(props.status === 'Отменен' || props.status === 'Выдан') && (
                    <p>Статус заказа: {props?.status}</p>
                )}
                {props.status === 'Готов к выдачи' && (
                    <select onChange={(e) => handleUpdate(e.target.value)}>
                        <option disabled>Статус заказа</option>
                        <option selected={props.status === 'Готов к выдачи'} value='Готов к выдачи'>
                            Готов к выдачи
                        </option>
                        <option selected={props.status === 'Выдан'} value='Выдан'>
                            Выдан
                        </option>
                        <option selected={props.status === 'Отменен'} value='Отменен'>
                            Отменен
                        </option>
                    </select>
                )}
            </div>
        </div>
    );
};
