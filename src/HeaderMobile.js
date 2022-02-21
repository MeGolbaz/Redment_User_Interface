import React from 'react';
import '../src/App.css';
import { GridRow, GridColumn, Button, Image } from 'semantic-ui-react';
import logoImage from "../src/redment.png";



function HeaderMobile() {
    return (
        <>
            <GridRow className="menuBar" textAlign='center'>
                <GridColumn>
                    <Image style={{ width: "30px" }} size="tiny" src={logoImage} />
                </GridColumn>
                <GridColumn>
                    <Button className='contactButtonMobile' secondary>Contact Us</Button>
                </GridColumn>
                <GridColumn>
                    <Button className='headerMobileButton' icon='bars' />
                </GridColumn>
            </GridRow>
        </>
    );
}

export default HeaderMobile;