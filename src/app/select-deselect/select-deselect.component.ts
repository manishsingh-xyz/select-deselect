import { Component, OnInit } from '@angular/core';
import { TestserviceService } from '../testservice.service';
import { Test } from '../test';
import { AVALIABLE, CURRENT } from '../testdata';

@Component({
  selector: 'app-select-deselect',
  templateUrl: './select-deselect.component.html',
  styleUrls: ['./select-deselect.component.css']
})

export class SelectDeselectComponent implements OnInit {

    availablelist: Test[];
    currentlist: Test[];
    avaliableSelectedView: string;
    currentSelectedView: string;
    addedValue: any;
    indexValue: number;
    addDisabled: boolean = true;
    removeDisabled: boolean = true;

    constructor(private testService: TestserviceService) { }

    ngOnInit() {
      this.getData();
    }

    getData(): void {
      this.testService.getAvailableViewData()
        .subscribe(productdata => {
          this.availablelist = productdata[0].results;
        });

      this.testService.getCurrentViewData()
        .subscribe(productdata => {
          this.currentlist = productdata[0].results;
        });
    }

    addData(): void {
      if (this.avaliableSelectedView) {
        this.currentlist.push(this.addedValue);
        if (this.indexValue > -1) {
          this.availablelist.splice(this.indexValue, 1);
        }
      }
      this.avaliableSelectedView = null;
    }

    removeData(): void {
      if (this.currentSelectedView && this.addedValue.required !== true) {
        this.availablelist.push(this.addedValue);
        if (this.indexValue > -1) {
          this.currentlist.splice(this.indexValue, 1);
        }
      }
      this.currentSelectedView = null;
    }

    onAvaliableListChange(d, i): void {
      this.currentSelectedView = null;
      this.addDisabled = false;
      this.removeDisabled = true;
      this.addedValue = d;
      this.indexValue = i
    }

    onCurrentListChange(d, i): void {
      this.avaliableSelectedView = null;
      this.removeDisabled = true;
      this.addDisabled = true;
      if(d.required !== true){
        this.addDisabled = true;
        this.removeDisabled = false;
      }
      this.addedValue = d;
      this.indexValue = i;
    }
}
