export const logger = store => next => action => {
    //console.log('---store before: ', store.getState());
    console.log('---dispatching: ', action);
    next(action);
    //console.log('---state after: ', store.getState());
};