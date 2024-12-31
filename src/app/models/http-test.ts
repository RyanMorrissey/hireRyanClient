export class HttpTest {
  id: number;
  value: string;
  dateCreated: Date | null;
  dateUpdated: Date | null;
  browserCookie: string;

  constructor(id: number = 0, value: string = '', browserCookie: string = '') {
    this.id = id;
    this.value = value;
    this.browserCookie = browserCookie
    this.dateCreated = null;
    this.dateUpdated = null;
  }
}
