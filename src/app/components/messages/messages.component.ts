import { Component, OnInit } from '@angular/core';

import { MessageService } from '@app/services/message/message.service';

@Component({
  selector: 'messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

		constructor(public messageService: MessageService) { }

		ngOnInit() {
		}

}
