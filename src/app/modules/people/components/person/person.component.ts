import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { PersonModel } from 'src/app/models/person-model';
import { FormControl, NgForm } from '@angular/forms';



@Component({
  selector: 'app-person-component',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent {
  // Angular 16 route params binding FTW!
  @Input() slug?: string;
  @Input() person!: PersonModel;

  @ViewChild('personBasicInfo') personBasicInfoForm!: NgForm;
  @ViewChild('personSocialMedia') personSocialMediaForm!: NgForm;

  public readonly PERSON_INFO_FORM_KEY = 'personBasicInfo';
  public readonly SOCIAL_MEDIA_FORM_KEY = 'personSocialMedia';

  onSubmit(form: NgForm) {
    // Save the data directly to the model
    Object.keys(form.value).forEach(key => {
      this.person[key] = form.value[key];
    });
    // Reset the form state
    this.reset(form);
  }

  isDirty(form: NgForm) {
    return form.dirty && form.touched;
  }

  reset(form: NgForm) {
    form.reset(this.person);
  }
}
