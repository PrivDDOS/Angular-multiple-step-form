import { Component } from '@angular/core';
import { FormsModule, NgForm} from '@angular/forms';
import { UserInfo } from '../../models/class/user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-component',
  standalone: true,
  imports: [CommonModule ,FormsModule],
  templateUrl: './home-component.html',
  styleUrl: './home-component.css',
})
export class HomeComponent {

  formStep = 1;

  userInfo = new UserInfo('', '', '')

  selectedPlan: string = '';
  planOptionSelect: boolean = false;
  selectedAddOns: string[] = [];

  onSubmit(form: NgForm) {

    console.log('Your Data', this.userInfo)
  }

  nextStep(form: NgForm) { 
    if (form.valid) {
      this.formStep++; 
    }
  }

  lastStep(form: NgForm) {
    this.formStep--;
  }

  selectPlan(plan: string) {
    if (this.selectedPlan === plan) {
      this.selectedPlan = '';
    } else {
      this.selectedPlan = plan;
    }
  }


  togglePlan() {
    this.planOptionSelect = !this.planOptionSelect
  }

  selectAddOn(addOn: string) {
    const addOns = this.selectedAddOns.indexOf(addOn);
    if(addOns > -1) {
      this.selectedAddOns.splice(addOns, 1)
      console.log(this.selectedAddOns)
    } else {
      this.selectedAddOns.push(addOn)
      console.log(this.selectedAddOns)
    }
  }

}

