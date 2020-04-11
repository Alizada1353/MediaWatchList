import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { map, catchError } from "rxjs/operators";
import { throwError } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MediaItemService {

  constructor(private http: HttpClient) { }

  get(medium) {
    const getOptions = {
      params: { medium }
    };
    return this.http.get<mediaItemResponse>('mediaitems', getOptions)
    .pipe(map(response => {
      return response.mediaItems
    }),
    catchError(this.handleError));
  }

  add(mediaItem: any) {
    return this.http.post('mediaitems', mediaItem)
    .pipe(catchError(this.handleError));
  }

  delete(mediaItem: any) {
    return this.http.delete(`mediaitems/${mediaItem.id}`)
    .pipe(catchError(this.handleError));
  }
  private handleError(error: HttpErrorResponse) {
    console.log(error);
    return throwError('Something went wrong, please try again.')
  }
}

interface mediaItem {
  id: number;
  name: string;
  medium: string;
  category: string;
  year: number;
  watchedOn: number;
  isFavorite: boolean;
}

interface mediaItemResponse {
  mediaItems: mediaItem[];
}