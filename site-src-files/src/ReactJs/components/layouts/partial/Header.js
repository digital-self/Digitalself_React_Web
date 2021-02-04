import React from 'react';
import { checkAuth } from '../../../app_functions/CheckAuth';
import LinksContainer from '../partial/LinksContainer';
import AuthenticatedComponents from './AuthenticatedComponents';
import AuthComponents from './UnauthenticatedComponents';

class Header extends React.Component {
    render() {
        let Contents;
        
        
        if(!checkAuth()) {
            Contents = () => {
                return (
                    <div>
                        <AuthComponents></AuthComponents>
                    </div>
                )
            }
        } else {
            Contents = () => {
                return (
                    <div>
                        <AuthenticatedComponents></AuthenticatedComponents>
                    </div>
                )
            }
        }
        
        return (
            <div>
                <h1>Header</h1>
                <LinksContainer Contents = {Contents}>
                </LinksContainer>
            </div>
        )
    }
}

export default Header;