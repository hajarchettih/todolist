import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input-button-unit.component.html',
  styleUrls: ['./input-button-unit.component.scss']
})

export class InputButtonUnitComponent {
title = 'Hello World';

constructor() { 
  this.title = 'I Love Angular';
}
changeTitle(newTitle: string): void {
  this.title = newTitle;
}

}
