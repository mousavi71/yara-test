import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PostsComponent} from './posts/posts.component';
import {EachPostComponent} from './each-post/each-post.component';

const routes: Routes = [{
  path: '',
  component: PostsComponent,
}, {
  path: 'posts/:postId',
  component: EachPostComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
