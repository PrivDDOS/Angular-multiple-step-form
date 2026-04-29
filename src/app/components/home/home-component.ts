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

}

/*
To switch between monthly and yearly plans in Angular, use a state variable (e.g., isYearly: boolean) managed by a toggle button or radio group, and use *ngIf or [ngClass] to display the corresponding pricing data. Bind the switch to a function that updates the displayed price structure. 
AngularUI
AngularUI
 +3
Implementation Approaches
Toggle Switch/Button Group: Implement a UI button that toggles a boolean variable, such as isYearly = !isYearly, which changes the data rendered in the pricing table. 
StackBlitz
StackBlitz
Data Binding [(ngModel)]: Use a radio group with [(ngModel)] to select between 'monthly' and 'yearly' string values, then use *ngIf in the HTML to show the relevant pricing data based on the selection. 
Soft Suave Technologies
Soft Suave Technologies
Dynamic Component View: Change the display to a checkbox or dropdown that, upon change, triggers a function to update the available subscription options in the view. 
AngularUI
AngularUI
Sample Code (Toggle Approach)
typescript
// component.ts
selectedPlan: string = 'monthly'; // or 'yearly'

togglePlan(plan: string) {
  this.selectedPlan = plan;
  // Update price list based on selection
}
html
<!-- template.html -->
<div class="toggle-container">
  <button (click)="togglePlan('monthly')" [class.active]="selectedPlan === 'monthly'">Monthly</button>
  <button (click)="togglePlan('yearly')" [class.active]="selectedPlan === 'yearly'">Yearly</button>
</div>

<div *ngIf="selectedPlan === 'monthly'">...Monthly Prices...</div>
<div *ngIf="selectedPlan === 'yearly'">...Yearly Prices...</div>
This approach allows seamless switching between subscription cycles, typically used with price calculations in the component TypeScript file.
*/