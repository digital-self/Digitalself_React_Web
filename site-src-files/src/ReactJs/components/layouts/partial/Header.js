import React from 'react';
import { Auth } from '../../../app_functions/Auth';
import LinksContainer from '../partial/LinksContainer';
import AuthenticatedComponents from './AuthenticatedComponents';
import AuthComponents from './UnauthenticatedComponents';

class Header extends React.Component {
    render() {
        let Contents;
        if(!Auth().isLoggedIn()) {
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
