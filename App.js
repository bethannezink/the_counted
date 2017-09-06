import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state  = {
      data: []
    };
  }

  componentDidMount() {
    fetch('https://thecountedapi.com/api/counted/')
    .then(results => {
      return results.json();
    }).then(data => {
      data = data.map((info) => {
        return(
          <div key={info._id}>
            <p> {info.name} </p>
          </div>
        )
      })
      this.setState({data: data});
    })
  }

  render() {
    return (
      <div>
        <div>
          {this.state.data}
        </div>
      </div>
    )
  }

}

export default App;