import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Cafe } from '../../models/cafe';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent implements OnInit {
  ngOnInit(): void {
    this.mockCafes();
    this.currentCafe = this.cafes[0];
  }

  searchKey = new FormControl('');
  cafes: Cafe[] = [];
  allLocations = [
    'Barrie, ON, 750 Big Bay Point Road. Unit #9',
    'Barrie, ON, 347 Cundles RD East. Unit M1',
    'Toronto, ON, 347 Cundles RD East. Unit M1',
    'Calgary, ON, 347 Cundles RD East. Unit M1',
    'Vancouver, ON, 347 Cundles RD East. Unit M1',
  ];
  locations = [...this.allLocations];
  currentAddress = new FormControl(this.locations[0] || null);
  currentCafe: Cafe | null = this.cafes[0] || null;

  search() {
    const searchKey = this.searchKey.value || '';

    if (!searchKey) {
      this.locations = this.allLocations;
      return;
    }

    this.locations = this.allLocations.filter((value) =>
      value.toLowerCase().includes(searchKey.toLowerCase())
    );
    this.currentAddress.setValue(this.locations[0]);
    this.chooseCafe(this.currentAddress.value!);
  }

  chooseCafe(address: string) {
    this.cafes.forEach((cafe) => {
      if (cafe.address == address) {
        this.currentCafe = cafe;
      }
    });
  }

  private mockCafes() {
    this.allLocations.forEach((l) => {
      this.cafes.push({
        address: l,
        emails: ['random@gmail.com'],
        phones: ['1234567890'],
        hours: 'Always open',
        delivery: 'Free delivery in 5 km range',
      });
    });
  }
}
