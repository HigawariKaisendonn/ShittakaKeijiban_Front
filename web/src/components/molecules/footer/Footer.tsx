'use client';

import { Icon } from '@/components/atoms/icon/Icon';
import { Text } from '@/components/atoms/text/Text';
import './footer.scss';

export const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='footer-title-container'>
                <Icon imageUrl='/images/icon.png'/>
                <Text variant='subtitle' className='footer-title'>
                    Pretender<br/>Board
                </Text>
            </div>
            <div className='footer-caption-container'>
                <Text variant='caption'  className='footer-caption'>
                    利用規約
                </Text>
                <Text variant='caption' className='footer-caption'>
                    プライバシーポリシー
                </Text>
                <Text variant='caption' className='footer-caption'>
                    お問い合わせ
                </Text>
            </div>
        </div>
    );
}