import React, { Fragment } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'reactstrap'
import { logout } from '../../../../actions/authAction';

export default function Logout() {
    const dispatch = useDispatch();
    const handleClick = (e) => {
        dispatch(logout())
    }
    return (
        <div>
            
                <NavLink className="header__link" onClick={handleClick}>
                    Logout
                </NavLink>
            
        </div>
    )
}
