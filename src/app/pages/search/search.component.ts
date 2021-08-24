import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { Music } from 'src/app/interfaces/music.interface';
import { MusicService } from 'src/app/services/music.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  musicList: Music[] = []
  unsubscribe: Subject<any> = new Subject<any>();
  search: string = ''

  constructor(private route: ActivatedRoute, private musicService: MusicService) { }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        this.search = params.search ?? ''
        this.musicService.searchMusic(this.search).subscribe(res => {
          this.musicList = res.results
        })
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
