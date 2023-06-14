import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowerlistComponent } from './followerlist.component';

describe('FollowerlistComponent', () => {
  let component: FollowerlistComponent;
  let fixture: ComponentFixture<FollowerlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FollowerlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FollowerlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
