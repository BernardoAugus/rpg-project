import { Player } from "./Player";

export interface PlayerRepository {
  findById(id: string): Promise<Player | null>;
  findByEmail(email: string): Promise<Player | null>;
  save(player: Player): Promise<void>;
}
