import { Component, OnInit } from '@angular/core';
import { PostModel } from 'src/app/models/post.model';
import { PostsService } from 'src/app/service/posts.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  public postsFromDB: PostModel[];
  public mostRecentPosts: PostModel[];

  constructor( private postService: PostsService ) { }

  ngOnInit(): void {
    this.getPosts();
    this.getMostRecentPosts();
  }
  
  getPosts() {
    this.postService.getTags()
    .subscribe( resp => {
      this.postsFromDB = resp['data'];
    })
  }

  getMostRecentPosts(){
    this.postService.getMostRecentPosts()
    .subscribe( resp => {
      this.mostRecentPosts = resp['data'];
    })
  }
}
