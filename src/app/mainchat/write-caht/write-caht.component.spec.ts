import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteCahtComponent } from './write-caht.component';

describe('WriteCahtComponent', () => {
  let component: WriteCahtComponent;
  let fixture: ComponentFixture<WriteCahtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WriteCahtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WriteCahtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
