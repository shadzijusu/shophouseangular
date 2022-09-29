import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  total = 0
  numberOfProducts = 0

  constructor(private router: Router) {
    this.total = Number(JSON.parse(localStorage.getItem("total") || '0'))
    
    this.numberOfProducts = Number(JSON.parse(localStorage.getItem("products") || '0').length)
   }

  ngOnInit(): void {
  }
}
