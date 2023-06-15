import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserProfileService {
  getUserProfile(): any {
    return {
      name: 'Muhammad Ali',
      title: 'Champion of the World 🥊',
      profileImageUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Muhammad_Ali_NYWTS.jpg',
      about: '“I’ve wrestled with alligators. I’ve tussled with a whale. I done handcuffed lightning. And thrown thunder in jail.”',
      followers: 1,
      following: 1,
      posts: 6,
      socialMedia: [
        { icon: 'fab fa-twitter' },
        { icon: 'fab fa-pinterest' },
        { icon: 'fab fa-facebook' },
        { icon: 'fab fa-dribbble' },
      ],
      photos: [
        'https://cdn.theatlantic.com/thumbor/ZV-8Da37Lay-cYYwDqChqB0j65U=/233x42:2777x1950/1200x900/media/img/mt/2016/06/AP_6705110184-1/original.jpg',
        'https://hips.hearstapps.com/hmg-prod/images/on-this-day-in1974-muhammad-ali-beats-george-foreman-in-the-news-photo-830109608-1562104695.jpg?crop=0.998xw:0.425xh;0.00160xw,0.236xh&resize=1200:*',
        'https://ca-times.brightspotcdn.com/dims4/default/881c5f6/2147483647/strip/true/crop/1728x1152+160+0/resize/1440x960!/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F12%2Ff6%2F0a7b314bd61639f4089c3d19e828%2Flat-sp-muhammad-ali-angelo-dundee-20141228',
        'https://www.hollywoodreporter.com/wp-content/uploads/2016/06/muhammad_ali_vs_norton_0.jpg?w=3000',
        'https://cdn.europosters.eu/image/750/posters/muhammad-ali-vintage-i11179.jpg',
        'https://andscape.com/wp-content/uploads/2016/06/gettyimages-517259310_master1.jpg',
      ],
    };
  }
}
