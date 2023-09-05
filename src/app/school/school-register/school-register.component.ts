import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import {FloatLabelType, MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { DUMMY_FORM } from 'src/app/app.config';
import { UtilityService } from 'src/app/services/utility.service';
@Component({
  selector: 'app-school-register',
  templateUrl: './school-register.component.html',
  styleUrls: ['./school-register.component.scss']
})
export class SchoolRegisterComponent {
  name = 'Angular';
  fields = DUMMY_FORM;
  formDetails:any;
  currentItem = 'Television';
  constructor(private utilityService: UtilityService) {}
  onSubmit(event:any){
    this.formDetails= event;
    this.utilityService.uploadTest(this.formDetails).subscribe(res=>{
      console.log(res);
    })
  }
}
