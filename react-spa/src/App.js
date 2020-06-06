import React from 'react';
import { Route, Switch, Redirect} from 'react-router-dom';
import "./App.css";
import Header from "./components/Header/Header";
import ProjectPage from "./pages/project/index";
import HomePage from "./pages/home/index";

class App extends React.Component {
    render() {
        return (
            <div className='app'>
                <Header brand='Иван Иванов'></Header>

                <main className='main'>
                    <Switch>
                        <Route path='/project/:id' component={ProjectPage} />
                        <Route exact path='/' component={HomePage} />
                        <Redirect to='/' />
                    </Switch>
                </main>
            </div>
        );
    }
}

export default App;