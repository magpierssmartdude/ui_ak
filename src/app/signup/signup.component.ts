import { Component, OnInit, OnDestroy } from '@angular/core';
import { SignUpModel } from './model/signup.model';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { VendorSignUpService } from './services/signup.service';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit, OnDestroy {
  signUpModel: SignUpModel;
  constructor(private readonly formBuilder: FormBuilder,
    private readonly vendorSignUpService: VendorSignUpService) {
    this.signUpModel = new SignUpModel();
  }

  ngOnInit() {
    this.signupFormInit();
  }
  ngOnDestroy() {
    this.signUpModel.subscriberFlag = false
  }
  signupFormInit() {
    this.signUpModel.signupForm = this.formBuilder.group({
      vendorName: [''],
      vendorCode: [''],
      OrgName: [''],
      email: [''],
      phoneNumber: [''],
      OrgType: [''],
    });
  }
  signUp() {
    // console.log(this.signUpModel.signupForm.value)
    // const formValue = this.signUpModel.signupForm.value;
    const signUpDto = this.createSignUpDto(this.signUpModel.signupForm.value);
    console.log(JSON.stringify(signUpDto));

    this.vendorSignUpService.setSignUpDetaills(signUpDto)
      // .pipe(takeWhile(() => this.signUpModel.subscriberFlag))
      .subscribe((data => {
        console.log(data);
      }))
  
  }
  createSignUpDto(formValue) {
   return {
      vendorcode: formValue.vendorName,
      vendorname: formValue.vendorCode,
      organizationtype: formValue.OrgType,
      organizationname: formValue.OrgName,
      phonenumber: formValue.phoneNumber,
      status: 0
    }
  }
}
