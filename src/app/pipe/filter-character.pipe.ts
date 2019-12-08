import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCharacters',
  pure: false
})
export class FilterCharacterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let output = value || [];
    if (value.length) {
      if (args.searchValue) {
        output = output.filter(ob => ob.name.toLowerCase().includes(args.searchValue.toLowerCase()));
      }
      if (args.filterValues) {
        output = output.filter(ob =>
          (args.filterValues.Species ? (
            args.filterValues.Species !== 'other' ? ob.species === args.filterValues.Species :
            (ob.species !== 'Human' && ob.species !== 'Mytholog')) : true) &&
          (args.filterValues.Gender ? (ob.gender === args.filterValues.Gender) : true) &&
          (args.filterValues.Origin ? (
            args.filterValues.Origin !== 'other' ? ob.origin.name === args.filterValues.Origin :
            (ob.origin.name !== 'unknown' && ob.origin.name !== 'Post-Apocalyptic Earth' && ob.origin.name !== 'Nuptia 4')) : true)
          );
      }
      if (args.sortById) {
        output = output.sort((a, b) => {
          return (a.id - b.id) * (args.sortById === 'asc' ? 1 : -1);
        });
      }
    }
    return output;
  }

}
