import { Component, OnInit, Input } from '@angular/core';
import { WorkoutTimePipe } from 'src/app/pipes/workout-time.pipe';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  providers: [
    WorkoutTimePipe
  ]
})
export class CardComponent implements OnInit {
  @Input() echelonData: any
  
  constructor(private workoutTime: WorkoutTimePipe) { }

  ngOnInit(): void {
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
