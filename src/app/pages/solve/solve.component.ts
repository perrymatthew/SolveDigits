import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Component } from '@angular/core';
import { findSolution } from 'src/app/utils/solve-digits.util';

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

  public solved: string = '';

  constructor(private fb: FormBuilder) {}

  solveDigits() {
    if (this.form.valid) {
      const inputs = Object.values(this.form.value) as number[];
      const total = inputs.splice(6)[0];
      console.log(inputs, total);

      const solution = findSolution(inputs, total);

      if (solution !== null) {
        this.solved = 'Solution found:';
        for (let step of solution) {
          this.solved += `${step.num1} ${step.op.symbol} ${step.num2} = ${step.result}\n`;
        }
      } else {
        this.solved = 'No solution found';
      }
      // const solution = findSolution();
    }
  }
}
