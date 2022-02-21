import React, { useEffect, useState } from 'react';
import HeaderDesktop from "./HeaderDesktop.js";
import HeaderMobile from './HeaderMobile';


const HeaderMenu = () => {


    const [isMobile, setisMobile] = useState(window.matchMedia("(max-width: 812px)").matches);

    useEffect(() => {
        window.addEventListener("resize", () => {
            setisMobile(window.matchMedia("(max-width: 812px)").matches)
        });
    }, [isMobile]);



    return (
        isMobile ?
            (
                <HeaderMobile />
            ) :
            (
                <HeaderDesktop />
            )

    )
}

export default HeaderMenu;
