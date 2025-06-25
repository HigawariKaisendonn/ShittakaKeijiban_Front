'use client'

import { Icon } from '@/components/atoms/icon/Icon';
import { Menu } from 'lucide-react';
import { Button } from '@/components/atoms/button/Button';
import './header.scss'

export const Header = () => {
    return (
        <div className='container'>
            <Icon icon = {Menu}>
            </Icon>
            <h1>しったか掲示板</h1>
            <div className='header-buttons'>
                <Button variant="secondary" onClick={() => alert("Hello")}>
                    サインイン
                </Button>
                <Button variant = "primary" onClick = {() => alert("2回目のボタン")} >
                    新規登録
                </Button>
            </div>
        </div>
    );
}