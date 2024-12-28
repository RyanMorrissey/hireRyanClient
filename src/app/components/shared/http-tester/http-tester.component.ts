import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RyansHttpService } from '@services/ryans-http-service.service'
import { HttpTest } from '@models/http-test'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-http-tester',
  imports: [FormsModule, CommonModule],
  templateUrl: './http-tester.component.html',
  styleUrl: './http-tester.component.less'
})
export class HttpTesterComponent {
  constructor(private httpService: RyansHttpService) {}

  formData = {
    id: 0,
    value: ''
  };
  databaseTests: HttpTest[] = []

  async pullDatabaseTests() {
    let dbResponse = await this.httpService.get('getAllDatabaseTests');
    if (dbResponse != null) {
      this.databaseTests = dbResponse
    }
  }

  async onSubmit() {
    let newTest = new HttpTest(this.formData.id, this.formData.value)
    try {
      const data = await this.httpService.post('createOrUpdateDatabaseTest', newTest);
      console.log('HttpTest created:', data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
}
