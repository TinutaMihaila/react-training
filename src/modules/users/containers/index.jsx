import React from 'react';
import UserDetails from '../components/userDetails';

class Users extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      users: [],
    }

    this.getUsers = this.getUsers.bind(this);
  }

  componentDidMount() {
  this.getUsers();
  }

  getUsers() {
    const API = 'https://jsonplaceholder.typicode.com/users';

    $.get(API, (response) => {
      if (response) {
      this.setState({
        users: response,
      })
      }
    })
  }

  render() {
    const users = this.state.users;
    console.log('all users list', users)
    return (
    <div>
      {users.map((user) => (
        <UserDetails
          key={user.id}
          user={user}
          type="users"
        />
      ))}
      </div>
    );
  }
}

export default Users;
