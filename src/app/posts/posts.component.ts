import { Component, OnInit } from '@angular/core';
import {RestApiService} from '../rest-api.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  private posts: any;

  constructor(private apiService: RestApiService) {
  }

  ngOnInit(): void {
    this.apiService.getPosts().subscribe(data => {
      this.posts = data;
      console.log(data, 'posts');
    });
  }

// , err => {
//   window.location.href = 'http://localhost:1880/api/v1/token';
//   localStorage.clear();
// }
}
