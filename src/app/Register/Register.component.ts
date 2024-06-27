import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientService } from '../services/client.service';
import { Router } from '@angular/router';
import { CreateClientDto } from '../DTO/createClient.dto';
import { Client } from '../models/Client';


@Component({
  selector: 'app-Register',
  templateUrl: './Register.component.html',
  styleUrls: ['./Register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private clientService: ClientService,
    private router: Router
  ) {
    this.registerForm = this.formBuilder.group({
      dni: ['', [Validators.required, Validators.pattern('^[0-9]{8,15}$')]],
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(60)]],
      mail: ['', [Validators.required, Validators.email, Validators.maxLength(50)]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{8}$')]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(60)]]
    })
   }

  ngOnInit() {
  }

  public registerForm: FormGroup;

  public register(): void {
    if(this.registerForm.valid){
      const dni: number = this.registerForm.get('dni')?.value
      const createClientDto: CreateClientDto= {name: this.registerForm.get('name')?.value, password: this.registerForm.get('password')?.value, mail: this.registerForm.get('mail')?.value, phone: this.registerForm.get('phone')?.value, dni: this.registerForm.get('dni')?.value, status: true}
      this.clientService.getDataReg(dni).subscribe((response: any) =>{
        console.log(response)
        if(response){
          this.clientService.saveNewUser(createClientDto);
          alert("Account registred successfully")
          this.router.navigateByUrl('login')
        }else{
          alert("We're sorry.\nThere is already an account registered with that DNI.\nPlease check your DNI and try to register again or ask Customer Service for assistance.")
        }
      })
    }else{
      alert("We're sorry.\nYou must complete the required data in the fields with your valid personal information to create your bank account.")
    }
  }


}
