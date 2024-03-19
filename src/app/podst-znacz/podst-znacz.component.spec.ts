import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PodstZnaczComponent } from './podst-znacz.component';

describe('PodstZnaczComponent', () => {
  let component: PodstZnaczComponent;
  let fixture: ComponentFixture<PodstZnaczComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PodstZnaczComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PodstZnaczComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
