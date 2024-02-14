import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarPostComponent } from './actualizar-post.component';

describe('ActualizarPostComponent', () => {
  let component: ActualizarPostComponent;
  let fixture: ComponentFixture<ActualizarPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActualizarPostComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActualizarPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
