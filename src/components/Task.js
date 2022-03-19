import React, {Component} from 'react';
import './Task.css'

class Task extends Component {
    TaskCompleted() {
        return {
            fontSize: '20px',
            color: this.props.texto ? 'gray' : 'black'
        }
    }

    render() {
        return ( 
        <h1 style={this.TaskCompleted()}>Tasks: {this.props.texto}
        <input type="checkbox" />
        </h1>
        );
    }
}

export default Task;