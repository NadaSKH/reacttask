import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Displaymem from "./components/Displaymem";
import Createmem from "./components/Createmem";



class App extends Component {
  state= {
    crew: [
      {
        id:1,
        name: "Nada",
        committee: "Technical"
      },
      {
        id:2,
        name: "Chantal",
        committee: "Technical"
      },
      {
        id:1,
        name: "Nadeen",
        committee: "Technical"
      }
    ]
  }

  
  render() {
  return (
    <BrowserRouter>
    <Route path = "/members" render={(props) => <Displaymem {...props}/>}/>
    <Route path = "/create" render={(props) => <Createmem {...props}/>}/>
    <Switch>
    <Route path = "/:id" component = {id}/>
    </Switch>
    
    </BrowserRouter>
  );
}
}

const id = ({match}) => (
  <div>
    <h3>Member data: {match.crew.id}</h3>
  </div>
);

export default App;
