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

}
