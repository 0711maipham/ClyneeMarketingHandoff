import './App.scss';
import React from 'react'
import Nav from './Nav/nav'
import Homepage from './Homepage/homepage'
import Partners from './Pages/partners'
import Team from './Pages/team'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

library.add(fab, far, faFacebookF, faTwitter, faInstagram, faCaretDown)

function App() {
  return (
    <Router>
        <Nav />
        <div className="w-100 main-container" style={{ maxWidth: '100%' }}>
          <div className="content-wrapper">
          <Switch>
              <Route exact path="/" component={Homepage} />
              <Route path="/team" component={Team} />
              <Route path="/partners" component={Partners} />
          </Switch>
          </div>
        </div>
    </Router>
  );
}

export default App;
