import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {
  sub:string='';
  transform(value: unknown, args: string): string {
if (args === 'male') {
this.sub='Mr. '+value;}
else  {
this.sub='Ms. '+value;
}
    return this.sub;
  }

}
