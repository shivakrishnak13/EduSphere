import { Component,ChangeDetectorRef,OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-instructor-navbar',
  templateUrl: './instructor-navbar.component.html',
  styleUrls: ['./instructor-navbar.component.css']
})
export class InstructorNavbarComponent implements OnInit{

  items : any ;
  constructor(public globalService: GlobalService,private cd: ChangeDetectorRef) {}


  ngOnInit(): void {
    this.items = [
      {
        label: this.globalService.getStudentLoginDetails()?.name,
        icon: '',
        items: [
            {
                label: 'Profile',
                icon: 'pi pi-fw pi-user-edit'
            },
            {
                label: 'Assignments',
                icon: 'pi pi-fw pi-book'
            },
            {
                label: 'Annoucements',
                icon: 'pi pi-fw pi-bell'
            },
            {
                label: 'Sign Out',
                icon: 'pi pi-fw pi-sign-out',
                command : ()=> this.globalService.logout()
                
            }
        ]
    },
    ]
  
     this.globalService.loginStatus$.subscribe(()=>{
       this.items = [
         {
           label: this.globalService.getStudentLoginDetails()?.name,
           icon: '',
           items: [
               {
                   label: 'Profile',
                   icon: 'pi pi-fw pi-user-edit'
               },
               {
                   label: 'Assignments',
                   icon: 'pi pi-fw pi-book'
               },
               {
                   label: 'Annoucements',
                   icon: 'pi pi-fw pi-bell'
               },
               {
                   label: 'Sign Out',
                   icon: 'pi pi-fw pi-sign-out',
                   command : ()=> this.globalService.logout()
                   
               }
           ]
       },
       ]
  
     })
    
  }

  getFirstLetter(): string {
    const name = this.globalService.getStudentLoginDetails()?.name || '';
    return name.charAt(0).toUpperCase();
  }

}
