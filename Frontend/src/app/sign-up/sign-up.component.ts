import { Component } from '@angular/core';


interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  date: Date | undefined;

  value!: number;
    
    paymentOptions: any[] = [
        { name: 'Male', value: 1 },
        { name: 'Female', value: 2 },
        { name: 'Others', value: 3 }
    ];

    cities: City[] | undefined;

    selectedCity: City | undefined;

    ngOnInit() {
        this.cities = [
            { name: 'New York', code: 'NY' },
            { name: 'Rome', code: 'RM' },
            { name: 'London', code: 'LDN' },
            { name: 'Istanbul', code: 'IST' },
            { name: 'Paris', code: 'PRS' }
        ];
    }

}
