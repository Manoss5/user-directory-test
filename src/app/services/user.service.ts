import { Injectable } from '@angular/core';
import { User, UserResponse } from '../models/user.model';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map } from 'rxjs';
import { userMapper } from '../mappers/user.mapper';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users$ = new BehaviorSubject<User[]>([]);

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http
      .get<{
        results: UserResponse[];
      }>('https://randomuser.me/api/?results=10')
      .pipe(
        map((res) =>
          // We can handle the case of undefined attributes here
          // either autofill with empty strings or hide the
          // false data ex. id = undefined
          res.results.map((user) => userMapper(user))
        )
      )
      .subscribe((res) => {
        this.users$.next(res);
      });
  }
}
