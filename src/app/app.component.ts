import { Component, inject } from '@angular/core';
import { HeroesComponent } from './Components/heroes/heroes.component';
import { MessagesComponent } from './Components/messages/messages.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { InMemoryDataService } from './in-memory-data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, RouterLink, MessagesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
})
export class AppComponent {
  title = 'Tour of Heroes';
}
