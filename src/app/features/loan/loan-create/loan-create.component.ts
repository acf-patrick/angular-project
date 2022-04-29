import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-loan-create',
  templateUrl: './loan-create.component.html',
  styleUrls: ['./loan-create.component.scss']
})
export class LoanCreateComponent implements OnInit {
  public date: Date = new Date();
  formgroup: FormGroup;

  constructor(private formulaire: FormBuilder) {
    this.formgroup = this.formulaire.group({
      "money":[5000,Validators.required],
      "pourcentage":[0,Validators.required],
      "dateDePret":[this.date.toLocaleDateString(),Validators.required],
      "dateDeRenboursement": [null,Validators.required],
      "ModeDeRemboursement":[null,Validators.required],
      "ModeDePayemment":[null,Validators.required],
      "Commentaire":[null,Validators.required]

    })


  }

  get formControl():any{
    return this.formgroup.controls;
  }

  ngOnInit(): void {
  }

  handleSubmit(formgroup:any){
    console.log(formgroup);
  }

}
