import { Component, OnInit } from '@angular/core';
import { Codes, Locations } from '../locations';
import { InputService } from '../input.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  src: SafeResourceUrl;

  constructor(private inputService: InputService, private sanitizer: DomSanitizer) {}

  ngOnInit() {
  }

  ngAfterContentInit() {
    this.inputService.getVideoIndex().subscribe(index => {
      const id = Locations[index]['id'];
      console.log(id);
      this.src = this.sanitizer.bypassSecurityTrustResourceUrl(`https://drive.google.com/file/d/${ id }/preview`);
      // this.src = this.sanitizer.bypassSecurityTrustResourceUrl(`https://drive.google.com/uc?id=${ id }`);
    })
  }

}
