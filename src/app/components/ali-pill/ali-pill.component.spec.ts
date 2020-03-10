import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AliPillComponent } from './ali-pill.component';

describe('AliPillComponent', () => {
  let component: AliPillComponent;
  let fixture: ComponentFixture<AliPillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AliPillComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AliPillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
