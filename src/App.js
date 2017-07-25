      import React from 'react';

      class App  extends React.Component{

        constructor(){
          super();
          this.state = {
            txt : 'This is the state txt',
            cat : 99
          }
        }
        update (e)
        {
          this.setState({txt:e.target.value})

        }

        render (){
          return( 

            <div> 
            <h1> hello world</h1>   
            <input type="text" onChange={this.update.bind(this)} />
            <h1> {this.state.txt} - {this.state.cat} </h1>
            </div>

            
            )
        }
      }


      export default App;
