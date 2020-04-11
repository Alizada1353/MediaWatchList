import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'categoryList',
    pure: true //this is optional to say if it is stateless 
})

export class CategoryListPipe implements PipeTransform {
    transform(mediaItems) {
        const categories = [];
        mediaItems.forEach(mediaItem => {
            if (categories.indexOf(mediaItem.category) <= -1) {
                categories.push(mediaItem.category)
            }
        });
        return categories.join(', ')
    }
}