import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.scss']
})

export class ModalsComponent implements OnInit {
  @Input() item: any;

  constructor() { }

  ngOnInit(): void {

  }

}
