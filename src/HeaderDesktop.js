import React from 'react';
import '../src/App.css';
import { List, GridRow, GridColumn, Image, Button } from 'semantic-ui-react';
import logoImage from "../src/redment.png";



function HeaderDesktop() {
    return (
        <>
            <GridRow className="menuBar" textAlign='center'>
                <GridColumn>
                    <Image style={{ width: "30px" }} size="tiny" src={logoImage} />
                </GridColumn>
                <GridColumn width={10}>
                    <List floated='right' horizontal>
                        <List.Item>
                            <Button className='headerButton' content='Product' icon='angle down' />
                        </List.Item>
                        <List.Item>
                            <Button className='headerButton' content='Feautures' icon='angle down' />
                        </List.Item>
                        <List.Item>
                            <Button className='headerButton' content='Pricing' />
                        </List.Item>
                        <List.Item>
                            <Button className='headerButton' content='Company' />
                        </List.Item>
                        <List.Item>
                            <Button className='headerButton' content='Help' icon='angle down' />
                        </List.Item>
                    </List>
                </GridColumn>
                <GridColumn>
                    <Button className='contactButton' secondary>Contact Us</Button>
                </GridColumn>
            </GridRow>
        </>
    );
}

export default HeaderDesktop;