import React, { useState } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/Navbar';
import HomePage from './components/HomePage';
import Login from './components/LoginForm';
import SignUp from './components/SignupForm';

function App() {
  const axios = require('axios');
  const APP_ID = '7b632c32';
  const APP_KEY = '005154710d7c48250feb6e1dbd9bd7d6';
  const [searchState, setSearchState] = useState('');

  const [foodData, setFoodData] = useState();

  function getFoodData() {
    const apiGetLink = `https://api.edamam.com/api/nutrition-data?app_id=${APP_ID}&app_key=${APP_KEY}&ingr=${searchState}`;
    axios
      .get(apiGetLink)
      .then((response) => {
        console.log(response.data);
        setFoodData(response.data);
        const food = {
          calories: response.data.calories,
          protein: response.data.totalNutrients.PROCNT.quantity,
          carbs: response.data.totalNutrients.CHOCDF.quantity,
          fiber: response.data.totalNutrients.FIBTG.quantity,
          fat: response.data.totalNutrients.FAT.quantity,
        };
        axios
          .post('/', food)
          .then((data) => console.log(data))
          .catch((err) => console.log(err));
      })
      .catch((err) => console.error(err));
  }

  return (
    <Router>
      q
      <div>
        <Nav />
        <Switch>
          {/* <Route exact path="/signin" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/" component={HomePage} /> */}
          <HomePage getFoodData={getFoodData} />
        </Switch>
      </div>
    </Router>
  );
}
export default App;
