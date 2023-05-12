import { Component, OnInit  } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {

  images = ['uni_pic1.jpg', 'uni_pic2.jpg', 'uni_pic3.jpg'];
  headlines = [
    'Bring engineering to the next level',
    'Learn from the best',
    'Get your degree',
  ]
  currentImage = 0;
  currentHeadline = 0;
  showImage = true;
  showHeadline = true;

  ngOnInit() {
    this.updateImages();
  }

  updateImages() {
    setInterval(()=> {
      this.currentImage++;
      this.currentImage = this.currentImage % this.images.length;
      this.showImage = false;

      setTimeout(()=> {
        this.showImage = true;
      }, 10);
    }, 6000);
  }

}
