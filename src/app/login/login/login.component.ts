import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';

// import * as fromApp from '../../store';
import * as fromLogin from '../store';
import * as fromApp from '../../store';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    this.store.pipe(
      select(fromApp.selectLabels),
    ).subscribe((s: string[]) => console.log('labels: ', s));
  }

  onClick(): void {
    this.store.dispatch(fromLogin.login({username: 'hello', password: '123'}));
  }
}
