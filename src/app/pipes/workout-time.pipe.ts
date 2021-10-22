import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'workoutTime'
})
export class WorkoutTimePipe implements PipeTransform {

  transform(workoutTime: string): string | null {
    console.log(workoutTime)
    const minutes = parseInt(workoutTime.split(':')[1], 10)
    const hours = parseInt(workoutTime.split(':')[0], 10)

    if (hours === 0 && minutes > 0) {
        return `${minutes} min`
    } else if (hours === 1 && minutes === 0) {
        return `${hours} hr`
    } else if (hours === 1 && minutes > 0) {
        return `${hours} hr ${minutes} mins`
    } else if (hours === 1 && minutes === 1) {
        return `${hours} hr ${minutes} min`
    } else if (hours > 1 && minutes === 0) {
        return `${hours} hrs`
    } else if (hours > 1 && minutes === 1) {
        return `${hours} hrs ${minutes} mins`
    } else if (hours > 1 && minutes > 1) {
        return `${hours} hrs ${minutes} mins`
    } else {
        return null
    }
  }

}
