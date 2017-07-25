import React from 'react';


//const App = () => <h1> Hello vamsi </h1>

class App  extends React.Component
{
  render (){

   // return React.createElement('h1',null,'hello world 2600 ')
   let txt = this.props.txt
      return( <h1>{txt} {this.props.cat} {this.props.howdy} {this.props.temp}</h1>   )
  }
}

App.propTypes = {
  txt: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired
  

}

App.defaultProps = {
  txt: " this is the new default text ",
  howdy: " how do you do ",
  temp: "this is a 3465 text"
}

export default App;
