import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookStadiumComponent } from './book-stadium.component';

describe('BookStadiumComponent', () => {
  let component: BookStadiumComponent;
  let fixture: ComponentFixture<BookStadiumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookStadiumComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookStadiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
