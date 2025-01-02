export class HttpTest {
  personalId: number;
  note: string;
  dateCreated: Date | null;
  dateUpdated: Date | null;
  browserCookie: string;

  constructor(personalId: number = 0, note: string = '', browserCookie: string = '') {
    this.personalId = personalId;
    this.note = note;
    this.browserCookie = browserCookie
    this.dateCreated = null;
    this.dateUpdated = null;
  }
}
