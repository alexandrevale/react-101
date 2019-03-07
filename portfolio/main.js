import Home from "./components/home/home";
import Contact from "./components/contact/contact";
import { Container } from 'react-materialize';
import { Switch, Route } from 'react-router-dom'

const Main = () => (
  <main>
    <Container>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/contact' component={Contact}/>
      </Switch>
    </Container>
  </main>  
);

export default Main;