import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// const URL = 'http://127.0.0.1:8000';
const URL = 'https://solvedigitsapi-1-a7154843.deta.app';

@Component({
  selector: 'app-solve',
  templateUrl: './solve.component.html',
  styleUrls: ['./solve.component.scss'],
})
export class SolveComponent {
  public form: FormGroup = this.fb.group({
    num1: [null, Validators.required],
    num2: [null, Validators.required],
    num3: [null, Validators.required],
    num4: [null, Validators.required],
    num5: [null, Validators.required],
    num6: [null, Validators.required],
    total: [null, Validators.required],
  });

  public solved: any;
  public loading: boolean = false;

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  solveDigits() {
    if (this.form.valid) {
      this.loading = true;
      const numbers = Object.values(this.form.value) as number[];
      const total = numbers.splice(6)[0];
      console.log(numbers, total);

      this.http.post(`${URL}/find_solution`, { numbers, total }).subscribe(
        (data) => {
          this.solved = data;
          this.loading = false;
        },
        (error) => {
          console.error('Error:', error);
          this.loading = false;
        }
      );
    }
  }
}
