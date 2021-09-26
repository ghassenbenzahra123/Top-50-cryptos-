import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-crypto-details',
  templateUrl: './crypto-details.page.html',
  styleUrls: ['./crypto-details.page.scss'],
})
export class CryptoDetailsPage implements OnInit {
  datacrypto: any;

  constructor(public api: ApiService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    let idCyrpto = this.activatedRoute.snapshot.paramMap.get('id');
    this.getDataUser(idCyrpto);
  }
  async getDataUser(idCyrpto) {
    await this.api.getDataUser()
      .subscribe(res => {

        this.datacrypto = res.data.filter(function (el){
          return el.id == idCyrpto
        });
        console.log(this.datacrypto);

      }, err => {
        console.log(err);
      });
  }
}
