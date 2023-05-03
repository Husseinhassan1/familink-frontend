import { Component } from '@angular/core';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent {
  title: string = '';
  description: string = '';
  ageGroup: string = 'kids';
  file: any = null;
  tags: string[] = [];
  privacy: string = 'private';
  newTag: string = ''; // Define newTag variable

  onFileSelected(event: any) {
    this.file = event.target.files[0];
  }

  onTagAdded(tag: string) {
    this.tags.push(tag);
  }

  onTagRemoved(tag: string) {
    const index = this.tags.indexOf(tag);
    if (index > -1) {
      this.tags.splice(index, 1);
    }
  }

  onSubmit() {
    // Handle form submission
    console.log('Form submitted');
    console.log('Title:', this.title);
    console.log('Description:', this.description);
    console.log('Age Group:', this.ageGroup);
    console.log('File:', this.file);
    console.log('Tags:', this.tags);
    console.log('Privacy:', this.privacy);
  }
}
