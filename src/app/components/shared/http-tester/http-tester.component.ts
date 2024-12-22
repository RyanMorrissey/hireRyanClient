import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RyansHttpService } from '@services/ryans-http-service.service'
import { HttpTest } from '@models/http-test'

@Component({
  selector: 'app-http-tester',
  imports: [FormsModule],
  templateUrl: './http-tester.component.html',
  styleUrl: './http-tester.component.less'
})
export class HttpTesterComponent {
  constructor(private httpService: RyansHttpService) {}

  formData = {
    id: 0,
    value: ''
  };

  async onSubmit() {
    console.log('Form Data:', this.formData);
    let newTest = new HttpTest(this.formData.id, this.formData.value)
    console.log('newTest:', newTest);

    try {
      const data = await this.httpService.post('addHttpTest', newTest);
      console.log('HttpTest created:', data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
}
