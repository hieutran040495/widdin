import { Component, OnInit, Input } from '@angular/core';
import { TemplateStory } from 'src/shared/models/temp-story';
import { TemplateImage } from 'src/shared/models/temp-image';

@Component({
  selector: 'app-m-template04-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryMasterTemplate04Component implements OnInit {
  @Input('stories') stories: TemplateStory[];
  @Input('allImages') allImages: TemplateImage[];

  public icons = [
    {
      name: 'fa fa-pagelines'
    },
    {
      name: 'fa fa-umbrella',
    },
    {
      name: 'fa fa-sun-o',
    },
    {
      name: 'fa fa-moon-o',
    },
    {
      name: 'fa-snowflake-o'
    },
    {
      name: 'fa fa-star-o',
    },
    {
      name: 'fa fa-heart',
    },
  ];

  constructor() { }

  ngOnInit() {
    console.log(this.allImages);

  }

}
