// src/domain/player/Player.ts

export class Player {
  constructor(
    public readonly id: string,
    public username: string,
    public email: string,
    public passwordHash: string,
    public createdAt: Date,
  ) {}

  changeUsername(newUsername: string) {
    this.username = newUsername;
  }

  changeEmail(newEmail: string) {
    this.email = newEmail;
  }

  changePasswordHash(newPasswordHash: string) {
    this.passwordHash = newPasswordHash;
  }
}
