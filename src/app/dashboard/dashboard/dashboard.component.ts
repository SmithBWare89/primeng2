import { Component, OnInit } from '@angular/core';
import { EchelonapiService } from 'src/app/echelonapi.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  echelonData!: any

  constructor(private echelon: EchelonapiService) { }

  ngOnInit(): void {
    this.echelon.retrieveData().subscribe((response: any) => {
      this.echelonData = response
    })
  }

}
