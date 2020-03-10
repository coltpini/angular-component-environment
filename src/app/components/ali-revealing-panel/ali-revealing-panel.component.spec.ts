import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AliRevealingPanelComponent } from './ali-revealing-panel.component';

describe('AliPillComponent', () => {
  let component: AliRevealingPanelComponent;
  let fixture: ComponentFixture<AliRevealingPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AliRevealingPanelComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AliRevealingPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
