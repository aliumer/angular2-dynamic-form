import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { DropdownField } from '../model/field-dropdown';
import { FieldBase } from '../model/field-base';
import { TextboxField } from '../model/field-textbox';

@Injectable()
export class DynamicFormService {
  private mockData: string = '../assets/form-data.json';
  constructor(private _http: Http) { }
  getQuestions(): Observable<Array<FieldBase<any>>> {
    return this._http.get(this.mockData)
      .map(this.handleResponse)
      .catch(this.handleError);
  }

  private handleResponse(response: Response) {
    const fields: FieldBase<any>[] = [];
    response.json().forEach((item) => {
      const controlType = item['type'];
      if (controlType === 'text') {
        fields.push(new TextboxField(item));
      }
      if (controlType === 'dropdown') {
        fields.push(new DropdownField(item));
      }

    });
    return fields.sort((a, b) => a.order - b.order);
  }

  private handleError(err: Error) {
    return Observable.throw(err.message);
  }

}
