import React from 'react';
import {connect} from 'react-redux';
import {addNewSmurf, filterSmurfs} from '../actions';


class SmurfList extends React.Component {
    state = {
        newSmurf: ''
    }


    handleChanges = e => {
        this.setState({
            newFriends: e.target.value
        })
    }

    addSmurf = e => {
        e.preventDefault();
        this.props.addNewSmurf(this.state.newSmurf);
    }

    filterSmurfs = e => {
        e.preventDefault();
        this.props.filterFriends();
    }

    render() {
        return(
            <div>
                {this.props.smurfs.map((smurf, index) => (
                    <div>
                        <h4>{smurf.name}</h4>
                        <h6>{smuft.age}</h6>
                        <h6>{smurf.height}</h6>
                    </div>
                ))}
            </div>
            <input 
                type="text"
                value={this.state.newSmurf}
                placeholder="Add Smurf"
                onChange={this.handleChanges}
            />
        ) 
    }
}