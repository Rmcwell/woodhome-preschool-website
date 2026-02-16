import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseHeroComponent } from '../../components/hero/hero.component';
import { RouterModule } from '@angular/router';

interface Programs {
  title: string;
  subtitle?: string;
  times?: string | string[];
  description: string;
  image: string;
  reverse: boolean; // Used to toggle the layout side
}


@Component({
  selector: 'app-programs-page',
  standalone: true,
  imports: [
    CommonModule,
    BaseHeroComponent,
    RouterModule
  ],
  templateUrl: './programs.html',
  styleUrls: ['./programs.css']
})
export class ProgramsPage {

  programs: Programs[] = [
    {
      title: "2's Preschool Class",
      subtitle: "Discovering the World",
      times: "Tuesdays and Thursdays from 9am-12pm",
      description: "Supports independence, social awareness, sensory exploration, fine and gross motor skills development, and language enrichment. Children learn through purposeful play both indoors and outdoors with a variety of materials promoting exploration, creativity, and imagination.",
      image: "https://images.unsplash.com/photo-1453749024858-4bca89bd9edc?q=80&w=1120&auto=format&fit=crop",
      reverse: false
    },
    {
      title: "3's Preschool Class",
      subtitle: "Purposeful Play and Learning",
      times: "Monday, Wednesday, and Friday from 9am-12pm",
      description: "The perfect balance between fun and learning. It offers a clear pathway to academic growth and exploration through the basic preschool fundamentals such as shapes, letter and number recognition and gross and fine motor development.",
      image: "/assets/images/3sClass.jpg",
      reverse: true
    },
    {
      title: "4's Preschool Class",
      subtitle: "Kindergarten Readiness",
      times: "Monday-Friday from 9am-12pm",
      description: "Our 5 day 4’s program offers a clear pathway to Kindergarten through exploratory play and hands-on learning methods. This program reviews preschool fundamentals and focuses on kindergarten readiness skills such as:",
      image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      reverse: false
    },
    {
      title: "Afternoon Extended Learning Class",
      times: 
        "3 days: Monday, Wednesday, Friday from 12:30pm – 3:30pm" + "<br />" + "5 days: Monday – Friday from 12:30pm – 3:30pm",
      description: "Our afternoon program offers a collaborative learning experience where children grow from their current educational level. It serves as extended enrichment for children who attend a morning class.",
      image: "https://images.unsplash.com/photo-1554721299-e0b8aa7666ce?q=80&w=1170&auto=format&fit=crop",
      reverse: true
    },
    {
      title: "Summer Program",
      description: "Inquire directly about summer options",
      image: "https://images.unsplash.com/photo-1578349035260-9f3d4042f1f7?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      reverse: false
    }
  ];
}