import { Component, OnInit } from '@angular/core';
import { Rings } from "../rings";

@Component({
  selector: 'app-rings',
  templateUrl: './rings.component.html',
  styleUrls: ['./rings.component.css']
})
export class RingsComponent implements OnInit {

  ringsArray: Rings[] = [
  {
    name: "Smokey Quartz",
    size: 7.5,
    price: 38
  },

  {
    name: "Clear Quartz",
    size: 8.5,
    price: 25
  },
  
  {
    name: "Emerald",
    size: 7,
    price: 68
  },

  {
    name: "Aquamarine",
    size: 5.5,
    price: 107
  },
]
  constructor() { }

  ngOnInit(): void {
  }

}
