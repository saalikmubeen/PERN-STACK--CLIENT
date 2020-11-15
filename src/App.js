import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import HomePage from "./routes/HomePage";
import DetailPage from "./routes/DetailPage";
import UpdatePage from "./routes/UpdatePage";

function App() {
  return (
    <div className="App">
         <Switch>
            <Route path="/" exact  component={HomePage}/>
            <Route path="/restaurants/:id" exact component={DetailPage}/>
            <Route path="/restaurants/:id/update" exact component={UpdatePage}/>
         </Switch>
    </div>
  );
}

export default App;
