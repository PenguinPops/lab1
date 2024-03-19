import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudFormComponent } from './bud-form.component';

describe('BudFormComponent', () => {
  let component: BudFormComponent;
  let fixture: ComponentFixture<BudFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BudFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BudFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
