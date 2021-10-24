import { Component, OnInit } from '@angular/core';
import { WorkoutTimePipe } from 'src/app/pipes/workout-time.pipe';
import { EchelonapiService } from 'src/app/echelonapi.service';
import echelonApiItems from 'src/app/definitions/echelonAPIItems';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  providers: [
    WorkoutTimePipe
  ]
})
export class CardComponent implements OnInit {
  echelonData!: echelonApiItems[]
  filteredData!: echelonApiItems[] | undefined
  dataFiltered!: boolean

  echelonDataSubscription!: Subscription
  filteredDataSubscription!: Subscription
  dataFilteredSubscription!: Subscription

  constructor(private echelon: EchelonapiService) { }

  ngOnInit(): void {
    this.echelonDataSubscription = this.echelon.getEchelonData().subscribe(
      (value) => this.echelonData = value
    )

    this.filteredDataSubscription = this.echelon.getFilteredSelection().subscribe(
      (selection) => {
        console.log(selection)
        if (selection.length) {
          const data: echelonApiItems[] = []

          this.echelonData.map(item => {
            item.inst === selection
              ? data.push(item)
              : item.level === selection
                ? data.push(item)
                : item.cat === selection
                  ? data.push(item)
                  : []
          })
           this.filteredData = data
        }
      }
    )

    this.dataFilteredSubscription = this.echelon.getDataFiltered().subscribe(
      selection => this.dataFiltered = selection
    )
  }

  findClass(level: string) {
    switch (level) {
      case 'Beginner':
        return 'tag-style beginner'
      case 'Intermediate':
        return 'tag-style intermediate'
      case 'Advanced':
        return 'tag-style advanced'
      case 'Not Yet Rated':
        return 'tag-style not-rated'
      default: 
        return 'tag-style beginner'
    }
  }
}
