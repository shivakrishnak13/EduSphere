import { Component,OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    
  isLogin: boolean = false;
  items : any;
  constructor(public globalService: GlobalService) {}

  ngOnInit(): void {
    this.isLogin = this.globalService.isStudentLogin;

    this.items = [
      {
        label: this.globalService.getStudentLoginDetails()?.name,
        icon: '',
        items: [
            {
                label: 'Left',
                icon: 'pi pi-fw pi-align-left'
            },
            {
                label: 'Right',
                icon: 'pi pi-fw pi-align-right'
            },
            {
                label: 'Center',
                icon: 'pi pi-fw pi-align-center'
            },
            {
                label: 'Justify',
                icon: 'pi pi-fw pi-align-justify'
            }
        ]
    },
    ]
    
  }

  getFirstLetter(): string {
    const name = this.globalService.getStudentLoginDetails()?.name || '';
    return name.charAt(0).toUpperCase();
  }

}
