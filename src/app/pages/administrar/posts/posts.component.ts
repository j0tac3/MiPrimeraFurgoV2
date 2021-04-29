import { Component, OnInit } from '@angular/core';
import { EtiquetaModel } from 'src/app/models/etiqueta.model';
import { PostModel } from 'src/app/models/post.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  public post: PostModel = new PostModel();
  public hiddenForm: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  openFormPost(postToEdit: PostModel){
    this.post = postToEdit;
    this.hiddenForm = false;
  }

  openFormNewPost() {
    this.post = new PostModel();
    this.post.etiquetas = [];
    this.hiddenForm = false;
  }

  onHiddenForm(hiddenForm: boolean){
    this.hiddenForm = hiddenForm;
    this.post = undefined;
  }



}
