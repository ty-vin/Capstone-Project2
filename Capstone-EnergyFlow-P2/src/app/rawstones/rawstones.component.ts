import { Component, OnInit } from '@angular/core';
import { Rawstone } from "../rawstone";

@Component({
  selector: 'app-rawstones',
  templateUrl: './rawstones.component.html',
  styleUrls: ['./rawstones.component.css']
})
export class RawstonesComponent implements OnInit {

  rawstoneArray: Rawstone[] = [
    {
      name: "Tourmalne",
      size: "Small (3 cm)",
      price: 2
    },
  
    {
      name: "Blue Kyanite",
      size: "Medium (5.8 cm)",
      price: 5
    },
    
    {
      name: "Prehnite",
      size: "Extra-Small (1.5 cm)",
      price: 1
    },
  
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
