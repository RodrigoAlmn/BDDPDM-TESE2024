import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  alertButtons = ['Action'];
  startDate = {
    day: new Date().getDate(),
    month: new Date().getMonth(),
    year: new Date().getFullYear()
  };
  endDate = {
    day: new Date().getDate(),
    month: new Date().getMonth(),
    year: new Date().getFullYear()
  };
  monthNames: string[] = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];
  displayMonthName(event: any) {
    const monthIndex = event.detail.value;
    if (monthIndex >= 0 && monthIndex < this.monthNames.length) {
      this.startDate.month = monthIndex; // Update model if valid
    }
    
  };

  
description: any;
puesto: any;
empresa: any;
nombrep: any;


  constructor() {}

}
