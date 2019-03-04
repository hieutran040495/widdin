import { Component, OnInit } from '@angular/core';

import { PostService } from '../../../shared/services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public posts = [];

  constructor(
    private _postService: PostService,
  ) { }

  ngOnInit() {
    this._getPosts();
  }

  private _getPosts() {
    this._postService.getPosts()
    .subscribe(res => {
      this.posts = res;
    });
  }
}
