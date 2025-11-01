import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent {
  private fb: FormBuilder = inject(FormBuilder);

  public contactForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.pattern(/^[a-zA-Zа-яА-ЯёЁ\s]+$/)]],
  });
}
