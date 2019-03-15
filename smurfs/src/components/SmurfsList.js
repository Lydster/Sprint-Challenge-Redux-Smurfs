import React from 'react';
import {connect} from 'react-redux';
import {addSmurf, fetchData} from '../actions';



class SmurfList extends React.Component {
    state = {
            name: '',
            age: '',
            height: '',
    }


    handleChanges = e => {
        e.persist();
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    addSmurf = e => {
        e.preventDefault();
        const { name, age, height } = this.state;
        this.props.addNewSmurf({name, age, height});
        this.setState({name: '', age: '', height: ''});
    }

    

    render() {
        return(
            <div>
            <div>
                {this.props.smurfs.map((smurf, index) => (
                    <div>
                        <h4>{smurf.name}</h4>
                        <h6>{smurf.age}</h6>
                        <h6>{smurf.height}</h6>
                    </div>
                ))}
            </div>
            <input 
                type="text"
                value={this.state.name}
                placeholder="Add Smurf name"
                onChange={this.handleChanges}
                name="name"
            />
            <input 
                type="text"
                value={this.state.age}
                placeholder="Add Smurf age"
                onChange={this.handleChanges}
                name="age"
            />
            <input 
                type="text"
                value={this.state.height}
                placeholder="Add Smurf height"
                onChange={this.handleChanges}
                name="height"
            />
            </div>
        ) 
    }
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs
    }
}

export default connect(mapStateToProps, {addSmurf})(SmurfList)