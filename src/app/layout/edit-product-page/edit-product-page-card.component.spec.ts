import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProductPageCardComponent } from './edit-product-page-card.component';

describe('EditProductPageCardComponent', () => {
  let component: EditProductPageCardComponent;
  let fixture: ComponentFixture<EditProductPageCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProductPageCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditProductPageCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
