import { Component, OnInit } from '@angular/core';
import { Polstones } from "../polstones";


@Component({
  selector: 'app-polstones',
  templateUrl: './polstones.component.html',
  styleUrls: ['./polstones.component.css']
})
export class PolstonesComponent implements OnInit {

  polstonesArray: Polstones[] = [
    {
      name: "Citrine",
      size: "Medium (8.5 cm)",
      price: 16
    },
  
    {
      name: "Garnet",
      size: "Small (2.3 cm)",
      price: 12
    },
    
  
    
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
