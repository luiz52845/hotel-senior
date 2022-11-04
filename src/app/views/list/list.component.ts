import { ServiceService } from './../../shared/service/service.service';
import { Hospede } from './../../shared/service/model/hospede.model';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';


export interface PeriodicElement {
  name: string;
  document: number;
  total: number;
}



const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'Hydrogen', document: 1.0079, total: 190.00 },
  { name: 'Helium', document: 4.0026, total: 500 },
  { name: 'Lithium', document: 6.941, total: 50 },
  { name: 'Beryllium', document: 9.0122, total: 60.90 },
  { name: 'Boron', document: 10.811, total: 190.00 },
  { name: 'Carbon', document: 12.0107, total: 190.00 },
  { name: 'Nitrogen', document: 14.0067, total: 190.00 },
  { name: 'Oxygen', document: 15.9994, total: 190.00 },
  { name: 'Fluorine', document: 18.9984, total: 190.00 },
  { name: 'Neon', document: 20.1797, total: 190.00 },
];

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})


export class ListComponent implements AfterViewInit {

  hospedePrevious: any[any];
  hospedeNext: any[any];
  displayedColumns: string[] = ['name', 'document', 'total'];
  //dataSource2 = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
 
  dadosPaginado: any ={};
  
  //dataSource = ELEMENT_DATA;

 
 
  @ViewChild(MatPaginator) paginator :any = MatPaginator;


  ngAfterViewInit() {
    
    this.dadosPaginado.paginator = this.paginator;
   
  }

  

  constructor(public serviceService: ServiceService) { }

  ngOnInit(): void {
    this.getHospedeList();
    console.log("hahah")

  }
  
  getHospedeList() {
    this.serviceService.getList('previous').subscribe(data => {
      
      this.hospedePrevious = data.content;
      this.dadosPaginado = new MatTableDataSource(data.content);

      
      console.log(this.hospedePrevious)
    })

    this.serviceService.getList('next').subscribe(data => {
      this.hospedeNext = data.content;
      console.log(this.hospedePrevious)
    })

  }

}
