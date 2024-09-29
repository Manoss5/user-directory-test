import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'user-directory-test';

  constructor(private userService: UserService) {
    // On page refresh the data is going to be lost.
    // We can fix this problem if we use local or session
    // storage to save and retrieve the data.
    // This is out of the scope of this project or sometimes
    // the expected behaviour so I am leaving it as is.
    this.userService.getUsers();
  }
}
