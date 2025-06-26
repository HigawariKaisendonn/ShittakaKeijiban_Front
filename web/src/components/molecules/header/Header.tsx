'use client'

import { Icon } from '@/components/atoms/icon/Icon';
import { Menu } from 'lucide-react';
import { AuthButton } from '../authButton/AuthButton';
import './header.scss'

export const Header = () => {
    return (
        <div className='header-container'>
            <div className='header-left'>
                <Icon icon={Menu} />
                <text className='header-title'>しったか掲示板</text>
            </div>
            <AuthButton/>
        </div>
    );
}