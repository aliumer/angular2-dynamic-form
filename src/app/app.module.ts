import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppFieldComponent } from './app-field/app-field.component';
import { DynamicFormService } from './common/services/dynamic-form-service';
import { DynamicFieldService } from './common/services/dynamic-field.service';
import { AppFormComponent } from './app-form/app-form.component';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    AppFieldComponent,
    AppFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [DynamicFormService, DynamicFieldService],
  bootstrap: [AppComponent]
})
export class AppModule { }
