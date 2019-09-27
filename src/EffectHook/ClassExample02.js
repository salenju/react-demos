import React from 'react'

class ClassExample02 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOnline: null
    };
  }

  componentDidMount(){
    ChartAPI.subscribeToFridenStatus(
      this.props.friend.id,
      this.handleStatusChange
    );
  }

  componentWillMount(){
    ChartAPI.unsubscribeToFridenStatus(
      this.props.friend.id,
      this.handleStatusChange
    );
  }

  handleStatusChange(status){
    this.setState({
      isOnline:status.isOnline
    });
  }


  render() {
    if (this.state.isOnline === null) {
      return 'Loading...';
    }
    return this.state.isOnline ? 'Online' : 'Offline';
  }
}

export default ClassExample02