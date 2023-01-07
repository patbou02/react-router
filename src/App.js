import {Route} from 'react-router-dom';
import Header from './components/temp/Header';
import AllQuotes from './components/pages/AllQuotes';
import QuoteDetail from './components/pages/QuoteDetail';
import NewQuote from './components/pages/NewQuote';

function App() {
  return (
    <div>
      <Header />
      <section>
        Welcome to the quotes app.
      </section>
      <Route path="/quotes" exact>
        <AllQuotes />
      </Route>
      <Route path="/quotes/:quoteId">
        <QuoteDetail />
      </Route>
      <Route path="/new-quote">
        <NewQuote />
      </Route>
    </div>
  );
}

export default App;

// all quotes - /all-quotes

// single quote (detailed-page) - /detailed-quote/:quoteId

// add brand new quote - /add-quote