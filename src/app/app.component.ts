import { Component, OnInit } from '@angular/core';
import { EchelonapiService } from './echelonapi.service';
import echelonApiItems from './definitions/echelonAPIItems';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  constructor(public echelon: EchelonapiService) {}

  ngOnInit(): void {
    this.echelon.retrieveData().subscribe(
      (response: echelonApiItems[]) => {
        this.echelon.updateEchelonData(response)
      }
    )
  }
}
