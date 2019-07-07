import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FeedService } from './feed.service';
import { CommentSession } from './feed.model';

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
  @Input() comment: string;
  
  /* commentForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private feedService: FeedService) { }

  ngOnInit() {
    this.commentForm = this.formBuilder.group(
      {
        comment: ['', Validators.required]
      }
    );
  }

  addComment() {
    const novoComment = this.commentForm.getRawValue() as CommentSession;
    this.feedService.adcComment(novoComment).subscribe(
        err => {
          console.log(err)
          this.commentForm.reset();
        }
      );
  }*/
}