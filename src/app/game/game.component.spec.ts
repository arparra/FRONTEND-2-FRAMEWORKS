import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GAMEComponent } from './game.component';

describe('GAMEComponent', () => {
  let component: GAMEComponent;
  let fixture: ComponentFixture<GAMEComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GAMEComponent]
    });
    fixture = TestBed.createComponent(GAMEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
