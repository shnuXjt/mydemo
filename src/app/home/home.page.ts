import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  slideOpts = {
    loop: true
  }

  routes = [{
    icon: 'briefcase-outline',
    name: '信用卡礼遇'
  },
  {
    icon: 'briefcase-outline',
    name: '还款'
  },
  {
    icon: 'briefcase-outline',
    name: '临时调额'
  },
  {
    icon: 'briefcase-outline',
    name: '分期付'
  }]

  constructor() {}

}
