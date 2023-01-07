import {Route, useParams} from 'react-router-dom';
import Comments from '../components/comments/Comments';

const QuoteDetail = () => {
  const params = useParams();

  return (
    <>
      <h1>Quote Detail Page - {params.quoteId}</h1>
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetail;