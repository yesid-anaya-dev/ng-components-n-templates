import { Component, DestroyRef, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit {
  currentStatus = 'online';
  serverStatusList = ['online', 'offline', 'unknown'];

  private destroyRef = inject(DestroyRef);

  ngOnInit() {
    const interval = setInterval(() => {
      this.currentStatus = this.serverStatusList[Math.floor(Math.random() * this.serverStatusList.length)]
    }, 5000);
    this.destroyRef.onDestroy(() => {
      clearInterval(interval);
    });
  }
}
