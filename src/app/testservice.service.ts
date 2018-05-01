import { Injectable } from '@angular/core';
import { Test } from './test';
import { AVALIABLE, CURRENT } from './testdata';

import { Observable, } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class TestserviceService {

    constructor() { }


    getAvailableViewData(): Observable<Test[]> {
        return of(AVALIABLE);
    }

    getCurrentViewData(): Observable<Test[]> {
        return of(CURRENT);
    }


}
