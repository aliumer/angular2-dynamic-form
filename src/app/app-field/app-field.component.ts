import { Component, Input, OnChanges } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';
import { FieldBase } from '../common/model/field-base';

@Component({
  moduleId: module.id,
  selector: 'app-field',
  templateUrl: './app-field.component.html',
})
export class AppFieldComponent implements OnChanges {
  @Input() field: FieldBase<any>;
  @Input() form: FormGroup;

  constructor() { }

  ngOnChanges(): void {
    if (this.field.required) {
      this.updateValidator();
    }
  }

  updateValidator(): void {
    console.log('need to add validator on field');
  }

}
