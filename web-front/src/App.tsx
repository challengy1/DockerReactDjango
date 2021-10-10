import React, { FC } from 'react';
import { Switch, Route } from 'react-router-dom';
import { ListBook } from './Book/ListBook';
import { BookEdit } from './Book/EditBook';
import { Header } from './Header/Header';

const App: FC = () => (
  <>
    <Header />
    <Switch>
      <Route exact path="/">
        <ListBook />
      </Route>
    </Switch>
    <Switch>
      <Route path="/edit">
        <BookEdit />
      </Route>
    </Switch>
  </>
);

export default App;
