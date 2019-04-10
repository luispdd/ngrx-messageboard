import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Message } from '../message/message.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() messages: Message[];
  @Input() isLoading: boolean;
  @Output() deleteMessage = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

}
