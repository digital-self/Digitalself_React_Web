import React from 'react';
<<<<<<< HEAD
import { checkAuth } from '../../../app_functions/CheckAuth';
=======
import { Auth } from '../../../app_functions/Auth';
>>>>>>> f4fd94965c1206e0d148883d11b307175f591b2e
import LinksContainer from '../partial/LinksContainer';
import AuthenticatedComponents from './AuthenticatedComponents';
import AuthComponents from './UnauthenticatedComponents';

class Header extends React.Component {
    render() {
        let Contents;
<<<<<<< HEAD
        
        
        if(!checkAuth()) {
=======
        if(!Auth().isLoggedIn()) {
>>>>>>> f4fd94965c1206e0d148883d11b307175f591b2e
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
<<<<<<< HEAD
        
=======

>>>>>>> f4fd94965c1206e0d148883d11b307175f591b2e
        return (
            <div>
                <h1>Header</h1>
                <LinksContainer Contents = {Contents}>
                </LinksContainer>
            </div>
        )
    }
}

<<<<<<< HEAD
export default Header;
=======
export default Header;
>>>>>>> f4fd94965c1206e0d148883d11b307175f591b2e
