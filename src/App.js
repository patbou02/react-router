import {Route} from 'react-router-dom';
import AddQuote from './components/temp/AddQuote';
import AllQuotes from './components/temp/AllQuotes';
import DetailedQuote from './components/temp/DetailedQuote';
import Header from './components/temp/Header';

function App() {
  return (
    <div>
      <Header />
      <section>
        Welcome to the quotes app.
      </section>
      <Route path="/add-quote">
        <AddQuote />
      </Route>
      <Route path="/detailed-quote">
        <DetailedQuote />
      </Route>
      <Route path="/all-quotes">
        <AllQuotes />
      </Route>
    </div>
  );
}

export default App;

// all quotes - /all-quotes

// single quote (detailed-page) - /detailed-quote/:quoteId

// add brand new quote - /add-quote