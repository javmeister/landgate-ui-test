export class Person {
  public id!: string; // This is used by the ngrx entity adapter

  // Index key signature to allow direct access to properties by their key name (for the edit forms)
  [k: string]: any;

  public firstName: string;
  public lastName: string;
  public age: number;
  public jobTitle: string;

  public bio?: string;

  public avatarImage?: string;
  public facebook?: string;
  public twitter?: string;
  public instagram?: string;

  public fullName?: string;

  constructor(dataIn?: any) {
    this.id = dataIn.id || Math.random().toString(36).substring(2, 7).toLowerCase();

    this.firstName = dataIn.firstName || '';
    this.lastName = dataIn.lastName || ''
    this.age = dataIn.age || ''
    this.jobTitle = dataIn.jobTitle || '';

    this.bio = dataIn.bio || '';

    this.avatarImage = dataIn.avatarImage || '';

    this.facebook = dataIn.facebook || '';
    this.twitter = dataIn.twitter || '';
    this.instagram = dataIn.instagram || '';

    this.fullName = `${this.firstName} ${this.lastName}`;
  }
}
