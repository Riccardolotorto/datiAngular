import { Component } from '@angular/core';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent {
  name: string; // <-- aggiunta la proprietà name
  constructor() { 
    this.name = 'Riccardo'; // setta il nome nel costruttore
  }
  ngOnInit() {
  }
}
