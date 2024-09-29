import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css',
})
export class UserDetailsComponent implements OnInit {
  user?: User;
  selectedUserId?: string;

  private subscriptions$: Subscription[] = [];

  constructor(private userService: UserService, private route: ActivatedRoute) {
    this.subscriptions$.push(
      this.route.params.subscribe((res) => (this.selectedUserId = res['id']))
    );
  }

  ngOnInit() {
    this.userService.users$.subscribe(
      (res) => (this.user = res.find((u) => u.id === this.selectedUserId))
    );
  }
}
