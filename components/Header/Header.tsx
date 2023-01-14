import React from 'react';
import Image from 'next/image';
import styles from '../../styles/Header.module.scss';
import Link from "next/link";

const Header = () => {
    return (
        <div className={styles.header}>
            <div>
                <Image src='/logo.png'  alt='logo' width={100} height={100}/>
            </div>
            <div>
                <ul className={styles.nav}>
                    <li>
                        <Link href='/'>Главная</Link>
                    </li>
                    <li>
                        <Link href='/news'>Новости</Link>
                    </li>
                    <li>
                        <Link href='/events'>События</Link>
                    </li>
                    <li>
                        <Link href='/documents'>Документы</Link>
                    </li>
                    <li>
                        <Link href='/'>Комитеты</Link>
                    </li>
                    <li>
                        <Link href='/'>Члены клуба</Link>
                    </li>
                    <li>
                        <Link href='/contacts'>Контакты</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
