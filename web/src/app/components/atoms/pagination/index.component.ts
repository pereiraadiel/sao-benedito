import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class PaginationComponent implements OnInit {
  @Input()
  totalPages: number = 5;
  currentPage: number = 1;
  autoSwitchPage: boolean = true;

  @Input()
  switchBySeconds = '5';

  @Output()
  onChangePage = new EventEmitter<number>();

  get pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => 1 + i);
  }

  ngOnInit() {
    this.autoSwitchNextPage();
  }

  autoSwitchNextPage() {
    if (this.autoSwitchPage) {
      setTimeout(() => {
        this.handleNextPage();
        this.autoSwitchNextPage();
      }, Number(this.switchBySeconds) * 1000);
    }
  }

  handlePreviousPage() {
    this.handleChangePage(
      (this.currentPage =
        this.currentPage - 1 > 0 ? this.currentPage - 1 : this.totalPages)
    );
  }

  handleNextPage() {
    this.handleChangePage(
      this.currentPage + 1 <= this.totalPages ? this.currentPage + 1 : 1
    );
  }

  handleChangePage(page: number) {
    this.currentPage = page;
    console.warn(page);
    this.onChangePage.emit(this.currentPage);
  }
}
