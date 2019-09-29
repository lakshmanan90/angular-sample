import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PostService } from '../post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  public addForm: FormGroup;

  constructor(private fb: FormBuilder, private postService: PostService, private router: Router) { }

  ngOnInit() {
    this.addForm = this.fb.group({
      'userId': ['', Validators.required],
      'id': ['', Validators.required],
      'title': ['', Validators.required],
      'body': ['', Validators.required]
    });

  }
  get s() {
    return this.addForm.controls;
  }
  onSubmit() {
    this.postService.getNewPost(this.addForm.value).subscribe((data) => {
      this.router.navigate(['postList']);
    })
  }
}
