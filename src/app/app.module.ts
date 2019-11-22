import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { EachPostComponent } from './each-post/each-post.component';
import {HttpClientModule} from '@angular/common/http';
import { TitleShortenerPipe } from './title-shortener.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    EachPostComponent,
    TitleShortenerPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    [ HttpClientModule ]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
