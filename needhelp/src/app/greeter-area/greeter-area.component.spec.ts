import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreeterAreaComponent } from './greeter-area.component';

describe('GreeterAreaComponent', () => {
  let component: GreeterAreaComponent;
  let fixture: ComponentFixture<GreeterAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GreeterAreaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GreeterAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
