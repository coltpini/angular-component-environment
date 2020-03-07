import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AliIconComponent } from './ali-icon.component';

describe('AliIconComponent', () => {
  let component: AliIconComponent;
  let fixture: ComponentFixture<AliIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AliIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AliIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
