import React from "react";
import Header from "../components/Header/Header";

const MainLayout = ({children}: {children: string | JSX.Element}) => {
    return (
        <div className='main'>
            <Header/>
            <div className='container'>
                {children}
            </div>
        </div>
    );
};

export default MainLayout;
