
import { PlayerRepository } from '../../domain/player/PlayerRepository';
import { Player } from '../../domain/player/Player';
import { v4 as uuidv4 } from 'uuid';

interface CreatePlayerRequest {
  username: string;
  email: string;
  passwordHash: string;
}

export class CreatePlayerUseCase {
  constructor(private readonly playerRepository: PlayerRepository) {}

  async execute(request: CreatePlayerRequest): Promise<Player> {
    const existingPlayer = await this.playerRepository.findByEmail(request.email);

    if (existingPlayer) {
      throw new Error('Email já está em uso');
    }

    const player = new Player(
      uuidv4(),
      request.username,
      request.email,
      request.passwordHash,
      new Date()
    );

    await this.playerRepository.save(player);

    return player;
  }
}
