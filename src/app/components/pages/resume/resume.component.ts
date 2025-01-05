import { Component } from '@angular/core';
import { NgxExtendedPdfViewerModule,NgxExtendedPdfViewerService, pdfDefaultOptions } from 'ngx-extended-pdf-viewer';

@Component({
  selector: 'app-resume',
  imports: [NgxExtendedPdfViewerModule],
  providers: [NgxExtendedPdfViewerService],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.less'
})
export class ResumeComponent {

}
