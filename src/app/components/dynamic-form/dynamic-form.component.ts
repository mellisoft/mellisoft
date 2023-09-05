import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray, NG_VALUE_ACCESSOR } from '@angular/forms';
import {FloatLabelType, MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
})
export class DynamicFormComponent {
  @Input() formInfo: any;
  @Output() formDataInfo = new EventEmitter<any>();
  name = 'Angular';
  controls:any = {};
  dynamicForm:any= FormGroup;
  result:any ='';
  filesInfo:any;
  constructor() {
    // this.dynamicForm = new FormGroup(
    //   this.controls
    // );
  }
  ngOnInit(){
    this.formInfo.forEach((res:any) => {
      const validationsArray:any = [];
      if(res.type == 'file'){
        
      }
      res.validations.forEach((val:any) => {
        if (val.name === 'required') {
          validationsArray.push(
            Validators.required
          );
        }
        if (val.name === 'pattern') {
          validationsArray.push(
            Validators.pattern(val.validator)
          );
        }
      });
      this.controls[res.name] = new FormControl('', validationsArray);
      if(res.name == 'imageUrl'){
      this.controls['fileSource'] = new FormControl('', [Validators.required])
      }
    });
    this.dynamicForm = new FormGroup(
      this.controls
    );
    
  }
  onSubmit() {
    if(this.dynamicForm.valid){
      const keys = [];
      for (var k in this.dynamicForm.value) keys.push(k);
      if(keys.indexOf('imageUrl') != -1){
        const formData = new FormData();
        for (const [key, value] of Object.entries(this.dynamicForm.value)) {
          console.log(key, value);
        if(key == 'imageUrl'){
          formData.append('imageUrl', this.dynamicForm.get('fileSource').value);
        }else{
          const x:any = value;
          if(key != 'fileSource'){
          formData.append(key, x);
          }
        }
        }
        this.formDataInfo.emit(formData);
      }else{
        this.formDataInfo.emit(this.dynamicForm.value);
      }    
    }
  }
  onFileChange(event:any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.dynamicForm.patchValue({
        fileSource: file
      });
    }
  }
  // onChange(event:any){
  //   this.filesInfo = event.target.files[0]
  //     if (!Array.isArray(event.target.files)) {
  //       this.filesInfo = event.target.files;
  //     } else {
  //       this.filesInfo = event.target.files[0]
  //     }
    
  // }
}

