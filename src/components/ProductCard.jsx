import React from 'react';
import { useNavigate } from 'react-router-dom';

export const ProductCard = (props) => {
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`/product/${props.id_item}`);
    };
    return (
        <div
            onClick={handleNavigate}
            className='p-8 border bg-gray-100 w-[560px] flex flex-col justify-center items-center cursor-pointer my-8'
        >
            <img src={props.photo} alt={props.name} />
            <p>
                <strong>Название:</strong> {props.name}
            </p>
            <p>
                <strong>Стоимость:</strong> {props.price}
            </p>
        </div>
    );
};
