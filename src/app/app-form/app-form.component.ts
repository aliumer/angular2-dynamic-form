import { Component, Input, OnChanges } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FieldBase } from '../common/model/field-base';
import { DynamicFieldService } from '../common/services/dynamic-field.service';

@Component({
  moduleId: module.id,
  selector: 'app-form',
  templateUrl: './app-form.component.html'
})
export class AppFormComponent implements OnChanges {
  @Input() fields: FieldBase<any>[] = [];
  form: FormGroup;

  constructor(private qcs: DynamicFieldService) { }

  ngOnChanges() {
    const group: any = {};
    this.fields.forEach ((field) => {
        group[field.key] = new FormControl(field.key);
    });
    this.form = new FormGroup(group);
  }

  onSubmit(form: FormGroup) {
    console.log('saving form:', form.value);
  }

}
