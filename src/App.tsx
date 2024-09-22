import React, {FunctionComponent} from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import PokemonsDetail from "./pages/pokemon-detail";
import PokemonsList from "./pages/pokemon-list";
import PageNotFound from "./pages/page-not-found";
import PokemonEdit from "./pages/pokemon-edit";
import PokemonAdd from "./pages/pokemon-add";
import Login from "./pages/login";
import PrivateRoute from "./PrivateRoute";

const App: FunctionComponent = () => {

    return (
        <Router>
            <div>
                <nav>
                    <div className="nav-wrapper teal">
                        <Link to="/" className="brand-logo center">Pokédex</Link>
                    </div>
                </nav>
                <Switch>
                    <PrivateRoute exact path="/" component={PokemonsList} />
                    <Route exact path="/login" component={Login} />
                    <PrivateRoute exact path="/pokemons" component={PokemonsList} />
                    <PrivateRoute exact path="/pokemons/edit/:id" component={PokemonEdit} />
                    <PrivateRoute exact path="/pokemon/add" component={PokemonAdd} />
                    <PrivateRoute path="/pokemons/:id" component={PokemonsDetail} />
                    <Route component={PageNotFound} />
                </Switch>
            </div>
        </Router>
    )
}

export default App;