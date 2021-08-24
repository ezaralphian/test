import { Component, Input, OnInit } from '@angular/core';
import { Music } from 'src/app/interfaces/music.interface';

@Component({
  selector: 'app-card-music',
  templateUrl: './card-music.component.html',
  styleUrls: ['./card-music.component.css']
})
export class CardMusicComponent implements OnInit {
  @Input() music: Music = {}
  constructor() { }

  ngOnInit(): void {
  }

}
