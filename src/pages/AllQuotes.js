import QuoteList from '../components/quotes/QuoteList';

const DUMMY_QUOTES = [
  { id: 'p1', author: 'Pat', text: 'My first quote', },
  { id: 'p2', author: 'Patrick', text: 'My second quote', },
];

const AllQuotes = () => {
  return (
    <QuoteList quotes={DUMMY_QUOTES} />
  );
};

export default AllQuotes;