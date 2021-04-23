import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Culture from './Components/Culture';
import Fashion from './Components/Fashion';
import Celebrity from './Components/Celebrity';
import Beauty from './Components/Beauty';
import TravelAndFood from './Components/TravelAndFood';
import Story from './Components/Story';
import Search from './Components/Search';

function App(){
    return(
        <>
        <Header />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/fashion" component={Fashion} />
            <Route exact path="/story/:data" component={Story} />
            <Route path="/beauty" component={Beauty} />
            <Route path="/culture" component={Culture} />
            <Route path="/celebrity" component={Celebrity} />
            <Route path="/travelAndFood" component={TravelAndFood} />
            <Route path="/search/:data" component={Search} />
        </Switch>
        <Footer />
        </>
    )
}

export default App;