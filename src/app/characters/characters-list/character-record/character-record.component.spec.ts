import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterRecordComponent } from './character-record.component';

describe('CharacterRecordComponent', () => {
  let component: CharacterRecordComponent;
  let fixture: ComponentFixture<CharacterRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
