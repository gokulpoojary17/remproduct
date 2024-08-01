import { Component } from '@angular/core';

@Component({
  selector: 'app-assgn21',
  templateUrl: './assgn21.component.html',
  styleUrl: './assgn21.component.css'
})
export class Assgn21Component {

  year: number | undefined;
  result: { isLeapYear: boolean; numberOfDays: number; holidays: number; } | undefined;

  showCalendar() {
    if (this.year) {
      const isLeapYear = this.checkLeapYear(this.year);
      const numberOfDays = isLeapYear ? 366 : 365;
      const holidays = this.calculateHolidays(this.year);
      this.result = { isLeapYear, numberOfDays, holidays };
    }
  }

  checkLeapYear(year: number): boolean {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  }

  calculateHolidays(year: number): number {
    let holidays = 0;
    for (let month = 0; month < 12; month++) {
      for (let day = 1; day <= new Date(year, month + 1, 0).getDate(); day++) {
        const date = new Date(year, month, day);
        if (date.getDay() === 0 || date.getDay() === 6) { // Sunday or Saturday
          holidays++;
        }
      }
    }
    return holidays;
  }
}
