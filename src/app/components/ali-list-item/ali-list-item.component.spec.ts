import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AliListItemComponent } from './ali-list-item.component';

describe('AliListItemComponent', () => {
  let component: AliListItemComponent;
  let fixture: ComponentFixture<AliListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AliListItemComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AliListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
