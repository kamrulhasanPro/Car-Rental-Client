import React from 'react';
import { NavLink } from 'react-router';

const MyLink = ({to, children}) => {
    const defaultStyle = `text-lg text-neutral`
    return (
        <li>
            <NavLink className={({isActive})=>isActive?` ${defaultStyle} text-primary`: defaultStyle} to={to}>{children}</NavLink>
        </li>
    );
};

export default MyLink;