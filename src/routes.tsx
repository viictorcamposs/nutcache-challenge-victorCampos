import { Switch, Route } from "react-router-dom";

import { EmployeesPage } from "./pages/EmployeesPage";

export const Routes = (): JSX.Element => {
  return (
    <Switch>
      <Route path="/" exact component={EmployeesPage} />
    </Switch>
  );
};
