import { Component, OnInit } from '@angular/core';
import { FileUploadService } from '../../file-upload.service';
import { WizardLayoutService } from '../../wizard-layout.service';

@Component({
  selector: 'app-documents',
  templateUrl: './mismahim.component.html',
  styleUrls: ['./mismahim.component.scss'],
})
export class MismahimComponent implements OnInit {
  constructor(
    public fileUploadService: FileUploadService,
    public wizard: WizardLayoutService
  ) {}

  ngOnInit(): void {}

  noticeText = 'block';
  hidePopup() {
    this.noticeText = 'none';
  }
  ok() {}

  left_desc =
    'לרשותכם מערכת ניהול מאובטחת המאפשרת הרשמה מקוונת להגשת מועמדות לקבלת מלגה מאגודת הסטודנטים הקריה האקדמית אונו.';

  left_desc2 =
    'אגודת הסטודנטים בקריה האקדמית אונו הינה עמותה רשומה, שהוקמה מתוך מטרה לפעול למען ציבור הסטודנטים בקריה האקדמית בתחומים חברתיים כלכליים ותרבותיים.';

  fileToUpload: File | any = null;

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }

  uploadFileToActivity() {
    this.fileUploadService.postFile(this.fileToUpload);

    // .subscribe(
    //   (data) => {
    //     // do something, if upload success
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );
  }
}
