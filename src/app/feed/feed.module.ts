import { NgModule } from "@angular/core";
import { FeedComponent } from './feed.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations:[
        FeedComponent
    ],
    imports:[
        CommonModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
    exports: [
        FeedComponent
    ]
})

export class FeedModule{
    
    
}