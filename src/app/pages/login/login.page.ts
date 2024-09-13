import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  providers: [DatePipe],
})
export class LoginPage {
  credentials = this.fb.nonNullable.group({
    email: ['c@d.com', [Validators.required, Validators.email]],
    password: ['123456', [Validators.required, Validators.minLength(6)]],
  });

  constructor(
    private fb: FormBuilder,
    private loadingController: LoadingController,
    private alertController: AlertController,
    private authService: AuthService,
    private router: Router
  ) {}

  // Easy access for form fields
  get email() {
    return this.credentials.controls.email;
  }

  get password() {
    return this.credentials.controls.password;
  }

  async register() {
    const loading = await this.loadingController.create();
    await loading.present();

    const user = await this.authService.register(
      this.credentials.getRawValue()
    );
    console.log(
      '🚀 ~ file: login.page.ts:42 ~ LoginPage ~ register ~ user',
      user
    );
    await loading.dismiss();

    if (user) {
      this.router.navigateByUrl('/home', { replaceUrl: true });
    } else {
      this.showAlert('Registration failed', 'Please try again!');
    }
  }

  async login() {
    const loading = await this.loadingController.create();
    await loading.present();

    const user = await this.authService.login(this.credentials.getRawValue());
    console.log('🚀 ~ file: login.page.ts:60 ~ LoginPage ~ login ~ user', user);
    await loading.dismiss();

    if (user) {
      this.router.navigateByUrl('/exerciselist', { replaceUrl: true });
    } else {
      this.showAlert('Login failed', 'Please try again!');
    }
  }

  async sendReset() {
    const loading = await this.loadingController.create();
    await loading.present();
    await this.authService.resetPw(this.email.value);
    await loading.dismiss();

    this.showAlert(
      'Email sent',
      'Please check your inbox for next steps to reset your password!'
    );
  }

  async showAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK'],
    });
    await alert.present();
  }
}
