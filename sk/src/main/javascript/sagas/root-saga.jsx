import loadData from './saga-data';
import startup from './saga-startup';

/*
 * saga-middleware requires a single entry point for sagas, so
 * bundle up each "child" saga into a single root that gets called
 * by the middleware.
 */
export default function* root(dispatch) {
    yield* loadData(dispatch);
    yield* startup(dispatch);
}
