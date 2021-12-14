import { Component, OnInit } from '@angular/core';
import { Rate } from '../models/rate.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: []
})

export class HeaderComponent implements OnInit {

  public rates: Rate[] = [];

  constructor() { }

  ngOnInit(): void {
  }
}
