import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertNewProductComponent } from './insert-new-product.component';

describe('InsertNewProductComponent', () => {
  let component: InsertNewProductComponent;
  let fixture: ComponentFixture<InsertNewProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertNewProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertNewProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
