import React from 'react'
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router'
import Menu from './components/Menu'
import TableContainer from './containers/TableContainer'

const Home = () => <h1>Home</h1>
const HomeBody = () => <div>this is the home body</div>
const TableTitle = () => <h1>TableTitle</h1>

const Container = (props) =>
  <div><Menu />{props.header}{props.body}</div>


class App extends React.Component {
  render(){
    return (
      <Router history={ hashHistory }>
        <Route path="/" component={Container}>
          <IndexRoute components={ { header: Home, body: HomeBody } }></IndexRoute>
          <Route path="/other" components={ { header: TableTitle, body: TableContainer} }></Route>
        </Route>
      </Router>
    );
  }
}

export default App;
