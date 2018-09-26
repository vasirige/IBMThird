import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ObservableService {

    data: Observable<any>;

    constructor() {
    }

    test() {
        this.data = new Observable(observer => {
            setTimeout(() => {// set time out is call back observer
                observer.next(1);// call back for setTimeout method
            }, 5000);

            setTimeout(() => {
                observer.next(2);
            }, 10000);

            setTimeout(() => {
                observer.next(3);
            }, 15000);

            setTimeout(() => {
                observer.next({ name: 'Vara' });
            }, 20000);
        });

        return this.data;
    }

    //Anonymous Function examples
    f = function()
    {

    };

    // Lambda exmaple parameterised
   // let f = (x,y) =>
    //{
      //  a =x+5;
       // b= y-10;
        //return a+b;
    //};

    //3 . Lamda paramter less
    //() =>{}

    //4 Lamda single paramter
    //myparam => {}

    //5 Lamda - only one expression statement and it returns
    //param => expression;
}
