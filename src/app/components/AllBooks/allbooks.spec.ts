import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AllBooks } from './allbooks';

describe('AddTutorialComponent', () => {
  let component: AllBooks;
  let fixture: ComponentFixture<AllBooks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllBooks],
      imports: [FormsModule], // Import FormsModule if your component uses forms
    }).compileComponents();

    fixture = TestBed.createComponent(AllBooks);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call onSubmit when Submit button is clicked', () => {
    spyOn(component, 'onSubmit');
    const button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    expect(component.onSubmit).toHaveBeenCalled();
  });

  it('should have an empty title initially', () => {
    expect(component.title).toBeUndefined(); // Check initial state
  });

  it('should update title when input changes', () => {
    const inputElement =
      fixture.debugElement.nativeElement.querySelector('#title');
    inputElement.value = 'New Tutorial Title';
    inputElement.dispatchEvent(new Event('input'));
    expect(component.title).toBe('New Tutorial Title');
  });
});
