import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFormComponent } from '../components/dynamic-form/dynamic-form.component';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { UtilityService } from '../services/utility.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [DynamicFormComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialFileInputModule,
    MaterialFileInputModule,
    HttpClientModule,
  ],
  providers:[UtilityService],
  exports:[DynamicFormComponent]
})
export class SharedModule { }
