import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { User, UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  userForm!: FormGroup;
  isEditMode = false;
  userId!: number;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      nome: ['', Validators.required],
      idade: [null, [Validators.required, Validators.min(0)]],
      estadoCivil: ['', Validators.required],
      cpf: ['', [Validators.required, Validators.minLength(11)]],
      cidade: ['', Validators.required],
      estado: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(2)]]
    });

    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.isEditMode = true;
      this.userId = +idParam;
      this.userService.getById(this.userId).subscribe((user: User) => {
        this.userForm.patchValue(user);
      });
    }
  }

  onSubmit(): void {
    if (this.userForm.invalid) return;

    const user: User = { ...this.userForm.value };
    if (this.isEditMode) {
      user.id = this.userId;
      this.userService.update(user).subscribe(() => {
        this.router.navigate(['/usuarios']);
      });
    } else {
      this.userService.create(user).subscribe(() => {
        this.router.navigate(['/usuarios']);
      });
    }
  }

  cancel(): void {
    this.router.navigate(['/usuarios']);
  }
}
