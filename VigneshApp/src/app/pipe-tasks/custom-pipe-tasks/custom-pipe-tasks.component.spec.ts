import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomPipeTasksComponent } from './custom-pipe-tasks.component';

describe('CustomPipeTasksComponent', () => {
  let component: CustomPipeTasksComponent;
  let fixture: ComponentFixture<CustomPipeTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomPipeTasksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomPipeTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
