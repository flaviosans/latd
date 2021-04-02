import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Hero } from '../heroes/hero.model';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit, OnChanges {

  @Input() name: string;
  @Output() liked = new EventEmitter<boolean>();
  heroes: Hero[] = [
    { id: 1, name: 'Boothstomper', team: 'avengers' },
    { id: 2, name: 'Drogfisher', team: 'avengers' },
    { id: 3, name: 'Bloodyllips', team: 'villains' },
    { id: 4, name: 'Mr Bu Moverse', team: 'villains' },
    { id: 5, name: 'Piranhaelli', team: '' }
  ];
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    const hero = changes['name'];
    const oldValue = hero.previousValue;
    const newValue = hero.currentValue;
    if (!hero.isFirstChange) {
      console.log(`Hero changed from ${oldValue} to ${newValue}`);
    }
    
  }

}
