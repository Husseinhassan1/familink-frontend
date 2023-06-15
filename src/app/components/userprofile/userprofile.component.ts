import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserProfileComponent {

  userProfile: any;
  constructor(private route: ActivatedRoute) {
    this.userProfile = this.route.snapshot.data['userProfile'];
  }

    btnVal = "Follow";
   changeButton(){
     if(this.btnVal!="Following")
      this.btnVal="Following"
     else
       this.btnVal="Follow"
   }

   ConsoleLog(){
     console.log("Send report to admin")
   }
}
