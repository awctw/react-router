import { Route, Switch, Redirect } from "react-router-dom";
import NewQuote from "./pages/NewQuote";
import AllQuotes from "./pages/AllQuotes";
import QuoteDetails from "./pages/QuoteDetails";
import Layout from "./components/layout/Layout";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path={"/"} exact>
          <Redirect to={"/all"} />
        </Route>
        <Route path={"/new"}>
          <NewQuote />
        </Route>
        <Route path={"/all/:quoteId"}>
          <QuoteDetails />
        </Route>
        <Route path={"/all"}>
          <AllQuotes />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
