import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ExcelService {
    public url: string;
    constructor(private _http: Http) {
        this.url = 'https://vivaorganica.tk/v1/unit';
    }

    postProducto(fileList: FileList) {
        if (fileList.length > 0) {
            const file: File = fileList[0];
            const formData: FormData = new FormData();
            formData.append('uploadFile', file, file.name);
            const headers = new Headers();
            /** In Angular 5, including the header Content-Type can invalidate your request */
            headers.append('Content-Type', 'multipart/form-data');
            headers.append('Accept', 'application/json');
            const options = new RequestOptions({ headers: headers });

            return this._http.post(this.url, formData, options)
                .map(res => res.json()
                .catch(error => Observable.throw(error))
                .subscribe(
                    data => console.log('success'),
                    error => console.log(error)
                ));
        }


    }
}
