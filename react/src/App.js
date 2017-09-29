import React from 'react';
import { Route, IndexRoute, BrowserRouter as Router} from 'react-router-dom';
import BlogIndex from './containers/BlogIndex';

const App = props => {
    return(
      <Router >
          <Route path="/" component={BlogIndex} />
      </Router>
    );
  };

export default App;
