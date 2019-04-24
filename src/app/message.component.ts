import { Component, Input, OnInit, HostBinding,ViewChild } from '@angular/core';

@Component({
   selector: 'app-message',
    template: `<h2>{{message}}</h2>`,
    styleUrls: ['./app.component.css']

})
export class MessageComponent implements OnInit {

    @Input() message: string;
    @HostBinding('style.color')
    color:string;
    @HostBinding('class.font-italic') isItalic:boolean;
    @HostBinding('class.font-bold') isBold:boolean;

  constructor() { }

  ngOnInit() {

  }

}

