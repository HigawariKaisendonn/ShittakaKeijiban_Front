'use client'

import { Icon } from '@/components/atoms/icon/icon';
import { Menu } from 'lucide-react';
import { AuthButton } from '../authButton/authButton';
import './header.scss'

export const Header = () => {
    return (
        <div className='header-container'>
            <div className='header-left'>
                <Icon icon = {Menu}>
                </Icon>
                <span className='header-title'>しったか掲示板</span>
            </div>
            <AuthButton/>
        </div>
    );
}