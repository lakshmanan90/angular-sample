import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { PostInterface } from '../post.interface';
import { StaticInjector } from '@angular/core/src/di/injector';
import { Router } from '@angular/router';
import { errorHandler } from '@angular/platform-browser/src/browser';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  public postList: PostInterface[] = [];
  public errorMsg: string;
  public search: string;

  constructor(private postService: PostService, private router: Router) { }

  ngOnInit() {
    this.postService.getPostList().subscribe(
      (response) => this.postList = response,
      (error: string) => this.errorMsg = error
    );
  }

  deletePost(id: number) {
    this.postService.deletePost(id).subscribe(data => this.postList );
  }

}
