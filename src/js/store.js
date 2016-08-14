import { compose, createStore } from 'redux';
import reducers from './reducers';

const createStoreWithMiddleware = compose()(createStore);

export default createStoreWithMiddleware(reducers);
