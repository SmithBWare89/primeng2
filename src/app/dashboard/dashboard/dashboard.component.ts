import { Component, OnInit } from '@angular/core';
import { EchelonapiService } from 'src/app/echelonapi.service';
import echelonApiItems from 'src/app/definitions/echelonApiItems';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public echelon: EchelonapiService) { }

  ngOnInit(): void {
    this.echelon.retrieveData().subscribe(
      (response: echelonApiItems[]) => {
        this.echelon.updateEchelonData(response)
      }
    )
  }
}
