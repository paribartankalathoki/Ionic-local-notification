import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;

  constructor(private activatedRoute: ActivatedRoute, private localNotifications: LocalNotifications) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

  simpleNotif() {
    console.log('cliecke');    
    this.localNotifications.schedule({
      id: 1,
      title: 'Notification',
      foreground: true,
      lockscreen: true,
      vibrate: true,
      wakeup: true,
      text: 'Local Notification for testing',
      icon:'../../assets/icon/favicon.png',
      data: { secret: 'secret' }
    });
  }

}
