import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentPopUpComponent } from './content-pop-up.component';

describe('ContentPopUpComponent', () => {
  let component: ContentPopUpComponent;
  let fixture: ComponentFixture<ContentPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentPopUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
