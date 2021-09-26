import { Component } from '@angular/core';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  datacrypto: any;
  constructor(
    public api: ApiService
  ) { }
  ngOnInit() {
    this.getDataUser();
  }

  async getDataUser() {
    await this.api.getDataUser()
      .subscribe(res => {
        console.log(res);

        this.datacrypto = res.data.slice(0, 50);

      }, err => {
        console.log(err);
      });
  }
}
