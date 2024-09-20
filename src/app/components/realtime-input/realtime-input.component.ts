import {Component, effect, OnInit, signal, WritableSignal} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-realtime-input',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './realtime-input.component.html',
  styleUrl: './realtime-input.component.scss',
})
export class RealtimeInputComponent implements OnInit {
  name: WritableSignal<string> = signal('');
  nameControl: FormControl<string> = new FormControl(this.name());
  nameControl2: FormControl<string> = new FormControl(this.name());

  constructor() {
    effect(() => {
      this.nameControl.setValue(this.name());
      this.nameControl2.setValue(this.name());
    });
  }

  ngOnInit(): void {
    this.nameControl.valueChanges.pipe().subscribe((nameValue: string) => this.name.update(() => nameValue));
    this.nameControl2.valueChanges.pipe().subscribe((nameValue: string) => this.name.update(() => nameValue));
  }
}
