import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  @Output() additionalFunction = new EventEmitter();
  @Input() mode2: boolean = false
  searchForm = this.fb.group(
    {
      search: ['', Validators.required]
    }
  );


  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
  }

  onSearch() {
    if (this.searchForm.valid) {
      this.additionalFunction.emit('')
      const search = this.searchForm.value.search
      this.router.navigate(['/search'], { queryParams: { search } });
    }
  }

}
