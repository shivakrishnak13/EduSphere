import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.css']
})
export class AnnouncementComponent implements OnInit {

  announcements : any | undefined

  constructor (private http : HttpClient,private globalservice : GlobalService){}

  ngOnInit(): void {
    
  }

  
}
