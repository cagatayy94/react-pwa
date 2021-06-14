import React from 'react'
import BottomMenu from './BottomMenu';
import Capsule from './Capsule';
import Header from './Header';
import Search from './Search';
import Sidebar from './Sidebar';

export default function Authenticated() {
    return (
        <div>
            <Header/>
            <Search/>
            <Capsule/>
            <BottomMenu/>
            <Sidebar/>
        </div>
    )
}
