import React, { Component } from 'react'

class Test extends Component {

   state = {
       title: '',
       body:''
   } 
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => response.json())
        .then(json => this.setState({
            title: json.title,
            body: json.body
        }))
  }
//   componentDidUpdate(){
//       console.log('componentDidUpdate!')
//   }
//   static getDerivedStateFromProps(nextProps, nextState){
//      console.log('componentWillReceiveProps...'); 
//      return null;
//   }
//   getSnapshotBeforeUpdate(prevProps, prevState){
//       console.log('getSnapshotBeforeUpdate');
//   }

  render() {
      const {title, body} = this.state;
    return (
      <div>
          <h1>{title}</h1>
          <p>{body}</p>
      </div>
    );
  }
}

export default Test;
