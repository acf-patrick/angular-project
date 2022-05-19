import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
@Component({
  selector: 'app-loan-create',
  templateUrl: './loan-create.component.html',
  styleUrls: ['./loan-create.component.scss'],
})
export class LoanCreateComponent implements OnInit {
  public date: Date = new Date();

  public formgroup: FormGroup = new FormGroup({});

  constructor() {}

  ngOnInit(): void {
    this.formgroup = new FormGroup({
      Responsable: new FormControl(),
      money: new FormControl(),
      pourcentage: new FormControl(),
      dateDePret: new FormControl(this.date.toLocaleDateString()),
      dateDeRenboursement: new FormControl(),
      ModeDeRemboursement: new FormControl(),
      ModeDePayemmentcapital: new FormControl(),
      ModeDePayemmentinteret: new FormControl(),
      Commentaire: new FormControl(),
    });
  }

  handleSubmit() {
    console.log(this.formgroup);
  }
}
