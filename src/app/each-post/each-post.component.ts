import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RestApiService} from '../rest-api.service';
import {Post} from '../posts/posts.component';

@Component({
  selector: 'app-each-post',
  templateUrl: './each-post.component.html',
  styleUrls: ['./each-post.component.scss']
})
export class EachPostComponent implements OnInit {
  private postId: string;
  private post: Post;

  constructor(
    private apiService: RestApiService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.postId = this.route.snapshot.paramMap.get('postId');
    this.apiService.getPostById(this.postId).subscribe(data => {
      this.post = data;
    });
  }

}
