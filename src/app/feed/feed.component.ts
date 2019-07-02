import { Component, Input } from '@angular/core';

@Component({
    selector: 'feed-app',
    templateUrl: './feed.component.html',
    styleUrls: ['./feed.component.css']
})

export class FeedComponent{
  @Input() id: number;
  @Input() url:string;
  @Input() profilepic: string;
  @Input() profile: string
  @Input() likes: number;
  @Input() descricao:string;
  @Input() comment:string;  
  @Input() commentprofile:string;
  @Input() commenttext:string;
  
}