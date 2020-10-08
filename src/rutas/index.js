import React from "react";
import { Route, Switch } from "react-router-dom";
// components routing
import ListadoHeroes from "../components/heroes/ListadoHeroes";
import Comics from "../components/heroes/comics/Comics";
import Series from "../components/heroes/series/Series";
import Eventos from "../components/heroes/eventos/Eventos";
import Peleas from "../components/heroes/peleas/Peleas";

export default function Index() {
  return (
    <>
      <Switch>
        <Route exact path='/' component={ListadoHeroes} />
        <Route exact path='/heroes/comics' component={Comics} />
        <Route exact path='/heroes/series' component={Series} />
        <Route exact path='/heroes/eventos' component={Eventos} />
        <Route exact path='/heroes/peleas' component={Peleas} />
        <Route path='/' component={ListadoHeroes} />
      </Switch>
    </>
  );
}
