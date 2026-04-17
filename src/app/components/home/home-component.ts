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

  formStep = 1

  userInfo = new UserInfo('', '', '')

  onSubmit(form: NgForm) {

    console.log('Your Data', this.userInfo)
  }

  nextStep() { 
    this.formStep++; 
  }

}
