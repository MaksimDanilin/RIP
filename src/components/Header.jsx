import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setAuth } from '../store/reducers/userReducer';

export const Header = () => {
    const { authorized } = useSelector((store) => store.user);
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(setAuth());
    };
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <Link to='/'>Яндекс.Лавка</Link>
            <div>
                {authorized && <Link to='/basket'>Корзина</Link>}
                <button style={{ marginLeft: '12px' }} onClick={handleClick}>
                    {authorized ? 'Выйти' : 'Войти'}
                </button>
            </div>
        </div>
    );
};
