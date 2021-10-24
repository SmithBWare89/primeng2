import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  items: MenuItem[] = [
    {
      label: 'Home'
    },
    {
      label: 'Schedule'
    },
    {
      label: 'Shop'
    },
    {
      label: 'Logout'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }
}
