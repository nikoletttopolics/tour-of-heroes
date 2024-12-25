import { Component } from '@angular/core';
import { HeroesComponent } from './Components/heroes/heroes.component';
import { MessagesComponent } from './Components/messages/messages.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterModule, MessagesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Tour of Heroes';
}
