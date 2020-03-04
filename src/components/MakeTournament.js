import React, { Component } from "react";

class MakeTournament extends Component {
    constructor(props) {
        super(props);
        this.state = {
          tournamentName: '',
          tournamentDate: null,
          tournamentGame: '',
          numPlayers: null
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(e) {
        const itemName = e.target.name;
        const itemValue = e.target.value;
    
        this.setState({ [itemName]: itemValue });
      }
    
      handleSubmit(e) {
        e.preventDefault();
        this.props.addTournament(this.state.meetingName);
        this.setState({ tournamentName: '' });
      }



    render() {
        return (
            <div className="text-center mt-4" onSubmit={ this.handleSubmit }>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="card bg-light">
                                <div className="card-body">
                                    <h1>create a tourney</h1>
                                    <form
                                        className="formgroup"
                                        onSubmit={ this.handleSubmit }
                                    >
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="tournamentName"
                                                placeholder="tourney name"
                                                value={ this.state.tournamentName }
                                                onChange={ this.handleChange }
                                            />
                                            <br />
                                            <input
                                                type="date"
                                                className="form-control"
                                                name="date"
                                                value={ this.state.tournamentDate }
                                                onChange={ this.handleChange }
                                            />
                                            <br />
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="game"
                                                placeholder="game"
                                                value={ this.state.tournamentGame }
                                                onChange={ this.handleChange }
                                            />
                                            <br />
                                            <input
                                                type="number"
                                                className="form-control"
                                                name="number of participants"
                                                value={ this.state.numPlayers }
                                                onChange={ this.handleChange }
                                            />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MakeTournament;