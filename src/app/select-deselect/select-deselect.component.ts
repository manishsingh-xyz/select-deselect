import { Component, OnInit, Input, Output, EventEmitter, Injectable } from '@angular/core';
import { List, listdata } from '../list';

@Injectable()

@Component({
  selector: 'app-select-deselect',
  templateUrl: './select-deselect.component.html',
  styleUrls: ['./select-deselect.component.css']
})

export class SelectDeselectComponent implements OnInit {

    @Input()  private dataList: List[];
    @Output() private updateList: EventEmitter<List[]> = new EventEmitter<List[]>();
    private currentDataList: listdata[];
    private availableDataList: listdata[];
    private addedValue: any;
    private indexValue: number;
    private addDisabled = true;
    private removeDisabled = true;
    
    constructor() { }

    ngOnInit() {       
          if (this.dataList[0].Available !== undefined || this.dataList[0].Available !== null) {
              this.availableDataList = this.dataList[0].Available;
          }
          else {
            this.availableDataList = [];
          }
          if (this.dataList[0].Current !== undefined || this.dataList[0].Current !== null) {
            this.currentDataList = this.dataList[0].Current;
          }
          else {
            this.currentDataList = [];
          }
    }

    private addData(): void {
      if (this.addedValue) {
        this.dataList[0].Current.push(this.addedValue);
        if (this.indexValue > -1) {
          this.dataList[0].Available.splice(this.indexValue, 1);
        }
      }
      this.addDisabled = true;
      this.updateList.emit(this.dataList);
    }

    private removeData(): void {
      if (this.addedValue && this.addedValue.required !== true) {
        this.dataList[0].Available.push(this.addedValue);
        if (this.indexValue > -1) {
          this.dataList[0].Current.splice(this.indexValue, 1);
        }
      }
      this.removeDisabled = true;
      this.updateList.emit(this.dataList);
    }

    private onAvaliableListChange(data, index): void {
      this.addDisabled = false;
      this.removeDisabled = true;
      this.addedValue = data;
      this.indexValue = index;
    }
    
    private onCurrentListChange(data, index): void {
      this.removeDisabled = true;
      this.addDisabled = true;
      if (data.required !== true) {
          this.addDisabled = true;
          this.removeDisabled = false;
      }
      this.addedValue = data;
      this.indexValue = index;
    }

    public getListData() {
      return this.dataList;
    }

    public getList2Data() {
      return this.dataList;
    }
}
