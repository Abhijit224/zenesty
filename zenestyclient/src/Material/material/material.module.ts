import { ModuleWithProviders, NgModule, Type } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatCheckboxModule} from '@angular/material/checkbox';
const MaterialComponents = [
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatRadioModule,
    MatListModule,
    MatExpansionModule,
    MatSelectModule,
    MatTabsModule,
    MatTableModule,
    MatGridListModule,
    MatCheckboxModule
]

@NgModule({

    imports: [MaterialComponents],
    exports: [MaterialComponents]
})
export class MaterialModule { }