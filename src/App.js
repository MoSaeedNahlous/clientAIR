
import './App.css';
import AddQuestion from './screens/AddQuestion';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import SearchScreen from './screens/SearchScreen';
import ExtendedSearchScreen from './screens/ExtendedSearchScreen';
import VSMSearchScreen from './screens/VSMSearchScreen';
import Header from './components/Header'

function App() {
  return (
    <Router>
      <Header />
      <div className="App">
        <Route path="/addquestion" component={AddQuestion} />
        <Route exact path="/" component={SearchScreen} />
        <Route exact path="/extended" component={ExtendedSearchScreen} />
        <Route exact path="/vsm" component={VSMSearchScreen} />
      </div>
    </Router>
  );
}

export default App;
