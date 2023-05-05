export class PersonModel {
  private _slug!: string;

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

  constructor(dataIn?: any) {
    this.firstName = dataIn.firstName || '';
    this.lastName = dataIn.lastName || ''
    this.age = dataIn.age || ''
    this.jobTitle = dataIn.workTitle || '';

    this.bio = dataIn.bio || '';

    this.avatarImage = dataIn.avatarImage || '';

    this.facebook = dataIn.facebook || `${this.slug}`;
    this.twitter = dataIn.twitter || `${this.slug}`;
    this.instagram = dataIn.instagram || `${this.slug}`;

    // Create the slug in the constructor so it is always the same for this instance.
    this._slug = Math.random().toString(36).substring(2, 8).toLowerCase();
  }

  /**
   * Returns a URL friendly slug for the person based on their first and last name.
   * If the last name is not provided, returns an alphanumeric slug.
   *
   * @readonly
   * @memberof PersonModel
   */
  get slug() {
    if (!this.lastName) {
      return this._slug;
    }
    return `${this.firstName.toLowerCase()}-${this.lastName.toLowerCase()}`;
  }

  /**
   * Returns the full name of the person as: first name + last name.
   *
   * @readonly
   * @memberof PersonModel
   */
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
