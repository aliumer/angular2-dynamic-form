import { Component, OnInit, OnDestroy } from '@angular/core';
import { DynamicFormService } from './common/services/dynamic-form-service';
import { FieldBase } from './common/model/field-base';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  fields: FieldBase<any>[] = [];
  errmsg: string;
  private sub: Subscription;

  constructor(private dfs: DynamicFormService) { }

  ngOnInit(): void {
    this.sub = this.dfs.getQuestions()
      .subscribe((data) => {
        this.fields = data;
      }, (error) => {
        this.errmsg = <string>error;
      });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
