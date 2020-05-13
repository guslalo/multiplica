//core
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

//services
import { ApisService } from '../../services/servicio.services'
import { ClipboardService } from 'ngx-clipboard'

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.scss']
})

export class ColorsComponent implements OnInit {

  public currentItem:any;
  public color = [];
  private number = 1;
  public activeNext:boolean;
  public deactivePrev:boolean;
  public loading = false;

  constructor(private apisServices:ApisService, private _clipboardService: ClipboardService) { }

  ngOnInit() {
    this.getColor(this.number);
  }

  nextPage() {
    this.number ++
    this.getColor(this.number);
  }

  previousPage() {
    this.number --;
    this.getColor(this.number);
  }

  objectColor(object){
    this._clipboardService.copyFromContent(object.color);
    this.currentItem = object;
  } 

  //llamada colores
  getColor(page) {
    this.loading = true;
    this.apisServices.getColors(page).subscribe(
      data => {
        if (this.number === data.total_pages){
          this.activeNext = true;
          this.color = data.data;
          this.loading = false;
        } else {
          this.activeNext = false;
          this.color = data.data;
          this.loading = false;
        }
        if (this.number === data.total_pages -1){
          this.deactivePrev = true;
          this.color = data.data;
          this.loading = false;
        } else {
          this.color = data.data;
          this.deactivePrev = false;
          this.loading = false;
        }
      }, 
    error => {
      console.log(error);
    })
  }
}
