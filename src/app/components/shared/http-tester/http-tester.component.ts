import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RyansHttpService } from '@services/ryans-http-service.service'
import { PopupModalService } from '@services/popup-modal.service'
import { CookieManagerService } from '@services/cookie-manager.service'
import { HttpTest } from '@models/http-test'
import { CommonModule } from '@angular/common'
import { ConfirmDialog } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';
import { v4 as uuidv4 } from 'uuid';

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
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private cookieManagerService: CookieManagerService,
  ) {}

  let formData = {
    id: 0,
    value: '',
    cookieValue: ''
  };
  let databaseTests: HttpTest[] = []
  let tastyCookie: string = ''

  ngOnInit() {
    this.tastyCookie = this.cookieManagerService.getCookie('httpTestCookie')
    if (this.tastyCookie == '') {
      this.tastyCookie = uuidv4();
      this.cookieManagerService.setCookie('httpTestCookie', this.tastyCookie, 7)
    }
    this.formData.cookieValue = this.tastyCookie
    this.pullDatabaseTests()
  }

  async pullDatabaseTests() {
    let dbResponse = await this.httpService.get('getAllDatabaseTestsByCookie', this.tastyCookie);
    if (dbResponse != null) {
      this.databaseTests = dbResponse
    }
  }

  copyToForm(id: number, value: string){
    this.formData.id = id
    this.formData.value = value
  }

  resetForm() {
    this.formData.id = 0
    this.formData.value = ''
  }

  openDeleteModal(id: number) {
    this.popupModalService.openConfirmPopup('Just making sure, you really want to delete it?').then((result) => {
      if (result) {
        this.deleteDatabaseTest(id)
      }
    });
  }

  async deleteDatabaseTest(id: number) {
    let deleteString = `${id}/${this.tastyCookie}`
    let dbResponse = await this.httpService.delete('deleteDatabaseTestByIdAndCookie', deleteString);
    if (dbResponse == true) {
      this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'Record deleted successfully' });
      this.pullDatabaseTests()
    } else {
      this.messageService.add({ severity: 'error', summary: 'D:', sticky: true,
        detail: `Either the record doesn't exist or you are tried to delete a record you don't own.  How dare you.  You should be ashamed.  I'm gonna be sick...` });
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
    let newTest = new HttpTest(this.formData.id, this.formData.value, this.formData.cookieValue)
    const dbResponse = await this.httpService.post('createOrUpdateDatabaseTest', newTest);
    if (dbResponse != null) {
      this.messageService.add({ severity: 'success', summary: ':D', detail: 'Record created or updated successfully' });
      this.pullDatabaseTests()
    } else {
      this.messageService.add({ severity: 'error', summary: 'D:', sticky: true,
        detail: `Either the record doesn't exist or you are tried to update a record you don't own.  How dare you.  You should be ashamed.  I'm gonna be sick...` });
    }
  }
}
