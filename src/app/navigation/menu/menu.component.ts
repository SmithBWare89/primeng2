import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  items!: MenuItem[]

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Home',
        url: 'https://echelonstudio.com/',
        target: '_self'
      },
      {
        label: 'Shop',
        url: 'https://echelonfit.com/',
        target: '_self'
      },
      {
        label: 'Profile',
        url: 'https://echelonfit.com/',
        target: '_self'
      },
      {
        label: 'Logout',
        url: 'https://echelonstudio.com/',
        target: '_self'
      }
    ]
  }
}
