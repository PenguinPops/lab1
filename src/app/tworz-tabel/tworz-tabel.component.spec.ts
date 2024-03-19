import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TworzTabelComponent } from './tworz-tabel.component';

describe('TworzTabelComponent', () => {
  let component: TworzTabelComponent;
  let fixture: ComponentFixture<TworzTabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TworzTabelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TworzTabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
