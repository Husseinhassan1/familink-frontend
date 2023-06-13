import { Component } from '@angular/core';
import {CommentsService} from "../../services/comment.service";
import { Comment } from "../../models/comment.model";

@Component({
  selector: 'app-post',
  templateUrl: './post-preview.component.html',
  styleUrls: ['./post-preview.component.css']
})
export class PostPreviewComponent {
  constructor(private commentsService: CommentsService) {}

  likeCount: number = 0;
  liked: boolean = false;
  comments: Comment[] = [];
  newComment: string = '';

  updateLikeButton() {
    if (this.liked) {
      this.liked = false;
    } else {
      this.liked = true;
    }
  }
  onLikeButtonClick() {
    this.likeCount++;
    this.updateLikeButton();
  }
  onUnlikeButtonClick() {
    if (this.likeCount > 0) {
      this.likeCount--;
      this.updateLikeButton();
    }
  }
  fetchComments() {
    this.commentsService.getComments().subscribe((comments: Comment[]) => {
      this.comments = comments;
    });
  }
  ngOnInit() {
    this.fetchComments();
  }
  submitComment() {
    if (this.newComment) {
      const newComment: Comment = {
        content: this.newComment,
        userId: 0 // Update with the appropriate userId
      };

      this.comments.push(newComment);
      this.newComment = '';
    }
  }

  deleteComment(index: number) {
    this.comments.splice(index, 1);
  }


}


