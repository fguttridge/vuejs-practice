import {Observable} from 'rxjs';
import axios from 'axios';

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
    }
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
    }
}

//https://jsonplaceholder.typicode.com/users