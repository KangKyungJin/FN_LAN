import React, { Component } from "react"
import { Link } from '@reach/router'
import { FaBlackTie } from "react-icons/fa";

class Home extends Component {
    render() {
        const {user} = this.props;

        const biggerLead = {
            fontSize: 1.5 + 'em',
            fontWeight: 200
        };

        
        return (
            <div className="text-center mt-4" onSubmit={ this.handleSubmit }>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="card bg-light">
                                <div className="card-body">
                                        <div className="display-4 text-dark mt-3 mb-2" style={{fontSize: 4 + 'em'}}>
                                            fn lan
                                        </div>
                                        <p className="lead text-dark" style={biggerLead}>
                                        to create, log, and enjoy our friday night tournaments.
                                        </p>

                                        {user == null && (
                                            <span>
                                                <Link 
                                                    to="/login" 
                                                    className="btn btn-outline-dark mr-2"
                                                >
                                                Log In
                                                </Link>
                                                <Link 
                                                    to="/register" 
                                                    className="btn btn-outline-dark mr-2"
                                                >
                                                Register
                                                </Link>

                                            </span> 
                                        )}

                                        {user && (
                                            <span>
                                                <Link 
                                                    to="/tournaments" 
                                                    className="btn btn-light"
                                                >
                                                tournaments
                                                </Link>
                                            </span>
                                        )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        )
    }
}

export default Home;