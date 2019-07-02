import { Component } from '@angular/core';
import { Feed } from './feed/feed.model';
import { FeedService } from './feed/feed.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {


  feeds:Feed[]

  constructor(private feedService: FeedService){
    feedService.postsfeed().subscribe(
      feedsDB => this.feeds = feedsDB,
      erroDB => console.log(erroDB)
    );
  }
}
