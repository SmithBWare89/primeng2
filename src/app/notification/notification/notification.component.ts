import { Component, OnInit, Input } from '@angular/core';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  @Input() workoutName: string = ''

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
  }

  showMessage() {
    this.messageService.add(
      {
        severity: 'success',
        summary: 'Success!',
        detail: `You've successfully added ${this.workoutName} to your scheduled workout`
      }
    )
  }
}
