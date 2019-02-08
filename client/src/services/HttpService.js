import {Observable} from 'rxjs';

// This is quite dirty, had to mix import styles due to lack of registered variables.
var axios = require('axios');
var MockAdapter = require('axios-mock-adapter');
 
// This sets the mock adapter on the default instance
var mock = new MockAdapter(axios);
// var mockData = require("../mocks/mockData.json");
 
// Mock any GET request to /users
// arguments for reply are (status, data, headers)
mock.onGet('https://localhost:8080/ping').reply(200, {});
mock.onAny(/\/(?!localhost:8080)\//).passThrough();

export default class RestService {
    get(url) {
        let observable$ = Observable.create( ( observer ) => {

            axios.get( url )
            .then( ( response ) => {
                observer.next( response.data );
                observer.complete();
            } )
            .catch( ( error ) => {
                observer.error( error );
            } );
        } );
        return observable$
    };
    post(url, data) {
        let observable$ = Observable.create( ( observer ) => {
            axios.post( url, data  )
            .then( ( response ) => {
                observer.next( response.data );
                observer.complete();
            } )
            .catch( ( error ) => {
                observer.error( error );
            } );
        } );
        return observable$
    };
}

//https://jsonplaceholder.typicode.com/users