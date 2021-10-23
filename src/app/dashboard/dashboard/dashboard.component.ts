import { Component, OnInit } from '@angular/core';
import { EchelonapiService } from 'src/app/echelonapi.service';
import echelonApiItems from 'src/app/definitions/echelonApiItems';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  echelonData!: echelonApiItems[]
  filteredSelection: echelonApiItems[] | undefined 

  constructor(private echelon: EchelonapiService) { }

  ngOnInit(): void {
    this.echelon.retrieveData().subscribe(
      (response: echelonApiItems[]) => {
        this.echelonData = response
      }
    )
  }

  handleSelection(value: string) {
    const data: echelonApiItems[] = []

    this.echelonData.map((item: echelonApiItems) => {
      switch (value) {
        case item.inst:
          data.push(item)
          break;
        case item.level:
          data.push(item)
          break;
        case item.cat:
          data.push(item)
          break;
        default:
          break;
      }
    })

    this.filteredSelection = data
  }

  handleSelectionReset(value: echelonApiItems[]) {
    this.filteredSelection = undefined
    this.echelonData = value
  }
}
