import { Component, ViewChild } from '@angular/core';

import { SelectDeselectComponent } from './select-deselect/select-deselect.component';
import { ListdataService } from './listdata.service';
import { List } from './list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  listdata:  List[];
  listdata2: List[];
  listdataOutput: List[];
  listdataOutput2: List[];

  @ViewChild(SelectDeselectComponent)
  private SelectDeselectComponent: SelectDeselectComponent
  constructor(private listdataService: ListdataService) { }

  ngOnInit() {
    this.getData();
  }

  getData(): void {
    this.listdataService.getListData()
      .subscribe(productdata => {
        this.listdata = productdata;
    });

    this.listdataService.getList2Data()
      .subscribe(productdata => {
        this.listdata2 = productdata;
    });
  }

  getListData(): void {
    let finaldata = this.SelectDeselectComponent.getListData();
    console.log(finaldata);
  }

  getList2Data(): void {
    let finaldata2 = this.SelectDeselectComponent.getList2Data();
    console.log(this.listdataOutput);
  }

  updateData(list): void {
    console.log(list);
  }

  updateData2(list2): void {
    console.log(list2);
    this.listdataOutput = list2;
  }
}
