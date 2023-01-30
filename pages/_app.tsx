import React, {FC} from 'react';
import {AppProps} from 'next/app';
import {wrapper} from '../store'
import MainLayout from "../layouts/MainLayout";


const WrappedApp: FC<AppProps> = ({Component, pageProps}) => (
    <MainLayout>
        <Component {...pageProps} />
    </MainLayout>
);

export default wrapper.withRedux(WrappedApp)

