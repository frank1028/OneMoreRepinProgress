import { NgModule} from '@angular/core';
import { MaintitleComponent } from './maintitle/maintitle.component';
import { PyramidComponent } from './pyramid/pyramid.component';
import { WeighthelpComponent } from './weighthelp/weighthelp.component';
import { RepsinstructComponent } from './repsinstruct/repsinstruct.component';

@NgModule({
    declarations: [
        MaintitleComponent,
        WeighthelpComponent,
        PyramidComponent,
        RepsinstructComponent,
           ],
    exports: [
        MaintitleComponent,
        WeighthelpComponent,
        PyramidComponent,
        RepsinstructComponent,
           ],

})
export class ComponentsModule { }
