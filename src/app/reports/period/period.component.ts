import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-period',
  templateUrl: './period.component.html',
  styleUrls: ['./period.component.scss']
})
export class PeriodComponent implements OnInit {

  id: string;

  constructor(
  ) { }

  ngOnInit(): void {
  }

}
