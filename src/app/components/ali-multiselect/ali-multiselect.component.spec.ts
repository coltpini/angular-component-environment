import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AliMultiselectComponent } from './ali-multiselect.component';

describe('AliPillComponent', () => {
  let component: AliMultiselectComponent;
  let fixture: ComponentFixture<AliMultiselectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AliMultiselectComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AliMultiselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
