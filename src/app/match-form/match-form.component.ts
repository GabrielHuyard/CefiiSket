import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-match-form',
  templateUrl: './match-form.component.html',
  styleUrls: ['./match-form.component.scss'],
})
export class MatchFormComponent implements OnInit {

  constructor() { }
  @Input() edit: boolean;
  @Input() opponent: string;
  @Input() date: string;
  @Input() loc: string;

  btnValid: String;

  ngOnInit() {
    if (this.edit) {
      this.btnValid = "Modifier le match";
    }else{
      this.btnValid = "Ajouter le match";
    }
  }
  onSubmit(val){
    console.log(val);
  }

}
