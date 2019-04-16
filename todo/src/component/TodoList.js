import React from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../actions';

class TodoList extends React.Component {
    constructor() {
        super();
        this.state = {
            todo: ''
        }
    }
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    addTodo = () => {
        this.props.addTodo(this.state.todo);
        this.setState({
            todo: ''
        });
    }
    render() {
        return (
            <div>
                <h2>Todo List</h2>
                {this.props.tasks.map((todo) => (
                    <div>
                        <p>{todo.name}</p>
                    </div>
                ))}
                <input
                    type='text'
                    name='todo'
                    value={this.state.todo}
                    placeholder='Todo'
                    onChange={this.handleChange}
                />
                <button onClick={this.addTodo}>Add</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        tasks: state.todoReducer.tasks
    }
}

export default connect(mapStateToProps,{ addTodo })(TodoList);