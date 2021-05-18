import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions } from '@kolkov/ngx-gallery';
import { Member } from 'src/app/models/Member';
import { MemberService } from 'src/app/services/member.service';

@Component({
  selector: 'app-member-details',
  templateUrl: './member-details.component.html',
  styleUrls: ['./member-details.component.scss']
})
export class MemberDetailsComponent implements OnInit {
  member:Member;
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor(
    private memberService:MemberService,
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.loadMember();
    this.galleryOptions = [
      {
        width: '600px',
        height: '500px',
        imagePercent:100,
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide,
        preview:false
      }
    ];

  }

  loadMember(){
    this.memberService.getmember(this.route.snapshot.paramMap.get('username')).subscribe(member =>{
      this.member = member;
      this.galleryImages = this.getImages();
      console.log("member",member);
    })
  }

  getImages():NgxGalleryImage[]{
    const imageUrls = [];
    for(const photo of this.member.photos){
      imageUrls.push({
        small:photo?.url,
        medium:photo?.url,
        big:photo?.url
      })
    }
    return imageUrls;
  }

}
