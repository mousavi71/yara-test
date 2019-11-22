import { Component, OnInit } from '@angular/core';
import {RestApiService} from '../rest-api.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  private posts: Array<Post>;

  constructor(private apiService: RestApiService) {
  }

  ngOnInit(): void {
    this.apiService.getPosts().subscribe(data => {
      this.posts = data;
    });
  }
}

export interface Post {
  body: string;
  id: number;
  title: string;
  userId: string;
}
