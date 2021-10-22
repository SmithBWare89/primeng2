import { Component, OnInit, EventEmitter, Output } from '@angular/core';

type MenuOptions = {
  name: string,
  code: string
}

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})

export class DropdownComponent implements OnInit {
  
  levels: MenuOptions[]
  selectedLevel!: MenuOptions

  categories: MenuOptions[]
  selectedCategory!: MenuOptions

  trainers: MenuOptions[]
  selectedTrainer!: MenuOptions

  constructor() { 
    this.levels = [
      {
        name: 'Beginner',
        code: 'Beginner'
      },
      {
        name: 'Advanced',
        code: 'Advanced'
      },
      {
        name: 'Intermediate',
        code: 'Intermediate'
      },
      {
        name: 'Not Yet Rated',
        code: 'Not Yet Rated'
      }
    ]

    this.categories = [
      {
        name: 'Getting started',
        code: 'Getting started'
      },
      {
        name: 'Rhythm Runs',
        code: 'Rhythm Runs'
      },
      {
        name: 'Rock N Fit ',
        code: 'Rock N Fit '
      },
      {
        name: 'Promotional Rides',
        code: 'Promotional Rides'
      },
      {
        name: 'Flex All',
        code: 'Flex All'
      },
      {
        name: 'Core Lounge Ultra',
        code: 'Core Lounge Ultra'
      },
      {
        name: 'Vertical Cycle',
        code: 'Vertical Cycle'
      },
      {
        name: 'Strength Row',
        code: 'Strength Row'
      },
      {
        name: 'Flex Core X',
        code: 'Flex Core X'
      },
      {
        name: 'FitNation Treadmill',
        code: 'FitNation Treadmill'
      }
    ]

    this.trainers = [
      {
        name: 'Amy Hager',
        code: 'Amy Hager'
      },
      {
        name: 'Brian Hager',
        code: 'Brian Hager'
      },
      {
        name: 'Eden Lusk',
        code: 'Eden Lusk'
      },
      {
        name: 'Jaime Wilbanks',
        code: 'Jaime Wilbanks'
      },
      {
        name: 'Matt Titus',
        code: 'Matt Titus'
      },
      {
        name: 'Nancy McCaffrey',
        code: 'Nancy McCaffrey'
      },
      {
        name: 'Patricia Ochoa',
        code: 'Patricia Ochoa'
      },
      {
        name: 'Rachel Hardinge',
        code: 'Rachel Hardinge'
      },
      {
        name: 'Sam Jackson',
        code: 'Sam Jackson'
      },
      {
        name: 'Shelley Meredith',
        code: 'Shelley Meredith'
      }
    ]
  }

  ngOnInit(): void {
  }

  handleTrainerSelect(value: string){
    console.log(value)
  }

  handleLevelSelect(value: string){
    console.log(value)
  }

  handleCategorySelect(value: string){
    console.log(value)
  }

}
