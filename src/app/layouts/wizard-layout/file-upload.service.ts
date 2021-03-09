import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class FileUploadService {
  constructor(public http: HttpClient) {}

  //   postFile(file: any) {
  //     return this.http.get('aasdad');
  //   }

  yourHeadersConfig = {};

  postFile(fileToUpload: File) {
    const endpoint = 'your-destination-url';
    const formData: FormData = new FormData();
    formData.append('fileKey', fileToUpload, fileToUpload.name);
    return this.http
      .post(endpoint, formData, { headers: this.yourHeadersConfig })
      .subscribe((as) => {});
    //   .map(() => {
    //     return true;
    //})
    //.catch((e) => this.handleError(e));
  }
}
