import { Injectable } from '@angular/core';
import { List } from './list';
import { LIST,LIST2 } from './listdata';

import { Observable, } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class ListdataService {

    constructor() { }

    getListData(): Observable<List[]> {
            return of(LIST);
    }

    getList2Data(): Observable<List[]> {
        return of(LIST2);
    }
}
