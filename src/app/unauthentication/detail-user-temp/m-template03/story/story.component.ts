import { Component, OnInit, Input } from '@angular/core';
import { TemplateStory } from 'src/shared/models/temp-story';

@Component({
  selector: 'app-m-template03-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryMasterTemplate03Component implements OnInit {
  @Input('story') story: TemplateStory;

  constructor() { }

  ngOnInit() {
  }

}
