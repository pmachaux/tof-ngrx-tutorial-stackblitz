import { Component, OnInit } from '@angular/core';
import {select, Store} from "@ngrx/store";
import {AppState} from "../state/app.state";
import {selectMessages} from "../state/message.selector";
import {clearMessages} from "../state/message.actions";

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  messages$ = this.store.pipe(select(selectMessages));
  constructor(private store: Store<AppState>) {}

  ngOnInit() {
  }

  clear(): void {
    this.store.dispatch(clearMessages())
  }
}
