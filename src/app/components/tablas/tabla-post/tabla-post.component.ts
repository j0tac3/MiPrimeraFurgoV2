import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PostModel } from 'src/app/models/post.model';
import { PostsService } from '../../../service/posts.service';

@Component({
  selector: 'app-tabla-post',
  templateUrl: './tabla-post.component.html',
  styleUrls: ['./tabla-post.component.css']
})
export class TablaPostComponent implements OnInit {
  @Output() showFormPost = new EventEmitter<PostModel>();

  public postsFromDB : PostModel[];

  constructor(private postService: PostsService) { }

  ngOnInit(): void { 
    this.getPost();
  }

  getPost(){
    this.postService.getTags()
    .subscribe( resp => {
      this.postsFromDB = resp['data'];
    })
  }

  onShowFormPost(currentPost: PostModel){
    this.showFormPost.emit(currentPost)
  }

  editPost( currentPost: PostModel ) {
    console.log(currentPost);
  }

  deletePost( currentPost: PostModel ) {
    this.postService.deleteTag(currentPost.id)
    .subscribe( () => this.postsFromDB.splice(this.postsFromDB.indexOf(currentPost), 1));
  }

}
