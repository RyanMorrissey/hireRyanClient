export class HttpTest {
  id: number;
  note: string;
  dateCreated: Date | null;
  dateUpdated: Date | null;
  browserCookie: string;

  constructor(id: number = 0, note: string = '', browserCookie: string = '') {
    this.id = id;
    this.note = note;
    this.browserCookie = browserCookie
    this.dateCreated = null;
    this.dateUpdated = null;
  }
}
