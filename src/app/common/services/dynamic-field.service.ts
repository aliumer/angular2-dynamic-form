import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

import { FieldBase } from '../model/field-base';

@Injectable()
export class DynamicFieldService {
    constructor() { }
    toFormGroup(questions: FieldBase<any>[]) {
        let group: any = {};

        questions.forEach(question => {
            group[question.key] = question.required ? new FormControl(question.value || '', Validators.required)
                : new FormControl(question.value || '');
        });
        return new FormGroup(group);
    }
}
