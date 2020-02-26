import React, { Component } from 'react'
import { FaExclamation } from 'react-icons/fa'
import { Link } from '@reach/router'

class Navigation extends Component {
    render() {
        const { user, logOutUser } = this.props;

        const navStyle = {
            opacity: 0.7
        }
        
        return (
            <nav className="site-nav family-sans navbar navbar-expand bg-dark navbar-dark higher" style={navStyle}>
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">
                        <FaExclamation className="mr-1"/> FN Lan
                    </Link>
                    <div className="navbar-nav ml-auto">
                        { user && (
                            <Link className="nav-item nav-link" to="/tournaments">
                                tournaments
                            </Link>
                        )}
                        { !user && (
                            <Link className="nav-item nav-link" to="/login">
                                log in
                            </Link>
                        )}
                        { !user && (
                            <Link className="nav-item nav-link" to="/register">
                                register
                            </Link>
                        )}
                        { user && (
                            <Link className="nav-item nav-link" to="/login" onClick={ e => logOutUser(e) }>
                                log out
                            </Link>
                        )}
                    </div>
                 </div>
            </nav>
        );
    }
}

export default Navigation;