import { Component } from '@angular/core';
// import { CommentsService} from "../services/comment.service";
// import { Comment } from "../models/comment.model";

@Component({
  selector: 'app-post',
  templateUrl: './post-preview.component.html',
  styleUrls: ['./post-preview.component.css']
})
export class PostPreviewComponent {
  // constructor(private commentsService: CommentsService) {}

  likeCount: number = 0;
  liked: boolean = false;

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
  //comments$ = this.commentsService.comments$;

  comments: string[] = [
    'This is a comment',
    'This is another comment'
  ];
  // newComment = '';

  // submitComment() {
  //   if (this.newComment) {
  //     this.comments.push(this.newComment);
  //     this.newComment = '';
  // }
// }
//   deleteComment(index: number) {
//     this.comments.splice(index, 1);
// }


}


