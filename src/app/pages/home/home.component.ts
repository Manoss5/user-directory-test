import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Subject, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { search } from '../../pipes/search.pipe';
import { NoResultsComponent } from '../../components/no-results/no-results.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, NoResultsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit, OnDestroy {
  users: User[] = [];

  private searchText$ = new Subject<string>();
  private subscriptions$: Subscription[] = [];

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.subscriptions$.push(
      this.userService.users$.subscribe((res) => (this.users = res)),
      this.searchText$.pipe(search()).subscribe((searchQuery) => {
        this.users = this.userService.users$.value.filter(
          (u) =>
            u.fullName.includes(searchQuery) || u.email.includes(searchQuery)
        );
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions$.forEach((sub) => sub.unsubscribe());
  }

  searchUsers(event: Event) {
    if (!(event.target instanceof HTMLInputElement)) {
      throw new Error('Something went wrong!');
    }
    this.searchText$.next(event.target.value);
  }

  goToUserDetails(user: User) {
    this.router.navigate(['/users/' + user.id]);
  }
}
