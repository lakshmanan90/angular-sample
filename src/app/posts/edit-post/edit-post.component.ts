import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PostInterface } from '../post.interface';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  public editForm: FormGroup;
  public editList: PostInterface;
  public id: number;

  constructor(private postService: PostService, private route: ActivatedRoute, private router: Router, private fb: FormBuilder) {
    this.route.params.subscribe(data => this.id = data['id']);
  }

  ngOnInit() {

    this.postService.getPostById(this.id).subscribe((data) => {
      this.editList = data,
        //console.log(this.editList);
        this.getEditFormDetails();
    });
  }

  getEditFormDetails() {
    this.editForm = this.fb.group({
      'userId': [this.editList ? this.editList.userId : ''],
      'id': [this.editList ? this.editList.id : ''],
      'title': [this.editList ? this.editList.title : ''],
      'body': [this.editList ? this.editList.body : '']
    });

  }

  onSubmit() {
    this.postService.getUpdateById(this.id, this.editForm.value).subscribe((data) => {
      data;
      this.router.navigate(['postList'])
    });
  }
}
