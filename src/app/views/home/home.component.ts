import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

interface Message {
  userName: string,
  text: string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  messages: Message[] = [{
    text: 'Olá',
    userName: 'Felipe'
  },
  {
    text: 'Salve',
    userName: 'Celso'
  },
  {
    text: 'Aoba',
    userName: 'Róger'
  }
];
  messageControl = new FormControl('');
  userName: string = 'Celso';
  
  constructor() {
   }

  ngOnInit(): void {
  
  }
  sendMessage() {}
}