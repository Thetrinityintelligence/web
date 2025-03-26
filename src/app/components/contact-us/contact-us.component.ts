import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent implements OnInit {
  email: string = 'info@theshreeramgroup.com';
  // contactForm:FormGroup | undefined;
  contactForm!: FormGroup;
  isFormValid = true;
  showLoader = false;
  constructor(private fb: FormBuilder, private httpService: HttpService) {
    window.scrollTo(0, 0);
  }
  ngOnInit(): void {
    this.formInIt();
  }
  formInIt() {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required]],
      message: ['', [Validators.required]],
    });
  }
  onSubmit() {
    if (this.contactForm.valid) {
      this.showLoader = true;
      this.isFormValid = true;
      this.httpService.sendMessage(this.contactForm.value).subscribe(
        (res: any) => {
          this.showLoader = false;
          this.contactForm.reset();
          alert('Message sent successfully!'); // Add success message
        },
        (error) => {
          this.showLoader = false;
          console.error('Error sending message:', error); // Log error
          alert('Failed to send message. Please try again.'); // Add error message
        }
      );
    } else {
      this.isFormValid = false;
    }
  }
}
