import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
const MaterialComponents=[
  MatCardModule,
  MatFormFieldModule,
  MatButtonModule,
  MatInputModule
  
  
]

@NgModule({
  imports: [MaterialComponents],
  exports:[MaterialComponents]
})
export class MaterialModule { }
