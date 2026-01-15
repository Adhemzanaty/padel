import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaffeComponent } from './caffe.component';

describe('CaffeComponent', () => {
  let component: CaffeComponent;
  let fixture: ComponentFixture<CaffeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CaffeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaffeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
