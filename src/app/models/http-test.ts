export class HttpTest {
  id: number;
  value: string;
  dateCreated: Date | null;
  dateUpdated: Date | null;

  constructor(id: number = 0, value: string = '') {
    this.id = id;
    this.value = value;
    this.dateCreated = null;
    this.dateUpdated = null;
  }
}
