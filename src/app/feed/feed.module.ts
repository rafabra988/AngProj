import { NgModule } from "@angular/core";
import { FeedComponent } from './feed.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations:[
        FeedComponent
    ],
    imports:[
        CommonModule,
        HttpClientModule
    ],
    exports: [
        FeedComponent
    ]
})

export class FeedModule{
    
    
}