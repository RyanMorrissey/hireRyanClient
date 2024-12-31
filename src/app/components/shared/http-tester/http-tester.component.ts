import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RyansHttpService } from '@services/ryans-http-service.service'
import { PopupModalService } from '@services/popup-modal.service'
import { HttpTest } from '@models/http-test'
import { CommonModule } from '@angular/common'
import { ConfirmDialog } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-http-tester',
  imports: [FormsModule, CommonModule, ConfirmDialog, ToastModule],
  providers: [ConfirmationService, MessageService],
  templateUrl: './http-tester.component.html',
  styleUrl: './http-tester.component.less'
})
export class HttpTesterComponent implements OnInit {
  constructor(
    private httpService: RyansHttpService,
    private popupModalService: PopupModalService,
    private confirmationService: ConfirmationService, private messageService: MessageService) {}

  formData = {
    id: 0,
    value: ''
  };
  databaseTests: HttpTest[] = []

  ngOnInit() {
    this.pullDatabaseTests()
  }

  async pullDatabaseTests() {
    let dbResponse = await this.httpService.get('getAllDatabaseTests');
    if (dbResponse != null) {
      this.databaseTests = dbResponse
    }
  }

  copyToForm(id: number, value: string){
    this.formData = {
      id: id,
      value: value
    };
  }

  resetForm() {
    this.formData = {
      id: 0,
      value: ''
    };
  }

  openDeleteModal(id: number) {
    this.popupModalService.openConfirmPopup('Just making sure, you really want to delete it?').then((result) => {
      if (result) {
        this.deleteDatabaseTest(id)
      }
    });
  }

  async deleteDatabaseTest(id: number) {
    let dbResponse = await this.httpService.delete('deleteDatabaseTestById', id);
    if (dbResponse == true) {
      this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'Record deleted successfully' });
      this.pullDatabaseTests()
    }
  }

  openSubmitModal() {
    let message = this.formData.id == 0 ? 'This will create a new record, is that alright?' : `This will update record ${this.formData.id}, is that alright?`
    this.popupModalService.openConfirmPopup(message).then((result) => {
      if (result) {
        this.onSubmit()
      }
    });
  }

  async onSubmit() {
    let newTest = new HttpTest(this.formData.id, this.formData.value)
    const data = await this.httpService.post('createOrUpdateDatabaseTest', newTest);
    this.pullDatabaseTests()
  }
}
