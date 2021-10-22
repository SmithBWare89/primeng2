import { Component, OnInit } from '@angular/core';
import { EchelonapiService } from './echelonapi.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  echelonData: any
  constructor(private echelon: EchelonapiService) {}

  ngOnInit(): void {
    this.echelon.retrieveData().subscribe((response: any) => console.log(response.items))
  }

}
