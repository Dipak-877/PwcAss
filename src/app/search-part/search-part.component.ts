import { Component, OnInit } from '@angular/core';
import { services } from '../shoping-part/shoping-part.services';

@Component({
  selector: 'app-search-part',
  templateUrl: './search-part.component.html',
  styleUrls: ['./search-part.component.css']
})
export class SearchPartComponent implements OnInit {
  searchedKeywords: any = null;
  constructor(public searchService: services) { }

  ngOnInit() {
  }

  onSearch (keywords) {
    this.searchService.onSearch(keywords);
  }

}
