import React from 'react';

export default class UserDetailsComp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      viewDetails: false,
      userName: this.props.user.name,
    }

    this.viewDetails = this.viewDetails.bind(this);
    this.hideDetails = this.hideDetails.bind(this);
  }

  viewDetails() {
    this.setState({
      viewDetails: true
    });
  }

  hideDetails() {
    this.setState({
      viewDetails: false
    });
  }

  render() {
    const user = this.props.user || { company: {}};

    return (
      <div>
        <span>{user.name}</span>
        <span>{user.email}</span>
        <span>{user.company.name}</span>
        <button onClick={this.viewDetails}>EDIT</button>
        <button onClick={this.hideDetails}>CLOSE</button>
        {this.state.viewDetails ?
          <div>
            <input type="text" value={this.state.userName} onChange={(event, props,value) => {
              this.setState({ userName: event.target.value })}}
            />
            <span>{user.email}</span>
            <span>{user.company.name}</span>
            <button onClick={()=> { console.log(this.state.userName);}}>SAVE</button>
          </div>
          : <span>!! no edit</span>
        }
      </div>
    )
  }
}
