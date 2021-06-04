import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { FileUploadModule } from 'ng2-file-upload';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgxGalleryModule,
    FileUploadModule,
    ToastrModule.forRoot(),
    TabsModule.forRoot(),
  ],
  exports: [ToastrModule, TabsModule, NgxGalleryModule, FileUploadModule],
})
export class SharedModule {}
