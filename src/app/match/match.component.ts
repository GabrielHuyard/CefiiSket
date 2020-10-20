import { Component, Input, } from '@angular/core';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss'],
})
export class MatchComponent {
  @Input() date: any;
  @Input() loc: string;
  @Input() equipe1: string;
  @Input() equipe2: string;
  constructor() { }

}
