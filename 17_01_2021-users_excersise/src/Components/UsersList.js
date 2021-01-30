import React, { Component } from 'react';
import User from './User'

class UsersList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userList: []
        }
    }


    addUser = (event) => {
        event.preventDefault()
        let user = {
            name: this.inputContent.value,
            key: Date.now()
        }
        this.setState((prevState) => { //prevState jest readonly
            return {
                userList: prevState.userList.concat(user)
            }
        })
    }

    deleteUser = (key) => {
        let newListUser = this.state.userList.filter(user => user.key !== key)
        this.setState({
            userList: newListUser
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.addUser}>
                    <input ref={(inputObject) => { this.inputContent = inputObject }} type="text"></input>
                    <button type="submit">Add User</button>
                </form>

                <h2>Users List:</h2>
                <User userList={this.state.userList} delete={this.deleteUser}></User>
            </div>
        )
    }
}
export default UsersList