import React from "react";
import User from "./components/ToDos";
import { Persons } from "./Mock/data";

const App = () => {
  return (
    <div>
      <h3>hi</h3>

      <div className="div">
        {Persons &&
          Persons.map((users) => (
            <User
              key={users.id} // Adding a unique key for each list item is a good practice in React
              name={users.name}
              surname={users.surname}
              email={users.email}
            />
          ))}
      </div>
    </div>
  );
};

export default App;
