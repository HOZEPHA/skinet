import { Component, OnInit } from '@angular/core';
import { BasketService } from '../../basket/basket.service';
import { Observable } from 'rxjs';
import { Basket, IBasket, IBasketItem } from 'src/app/shared/models/basket';
import { IUser } from 'src/app/shared/models/user';
import { AccountService } from '../../account/account.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  basket$: Observable<IBasket> |any;
  currentUser$: Observable<IUser> | any;
 
  constructor(private basketService: BasketService, private accountService: AccountService) { }

  ngOnInit() {
    this.basket$ = this.basketService.basket$;
    this.currentUser$ = this.accountService.currentUser$;
  }

  logout() {
    this.accountService.logout();
  }

}
