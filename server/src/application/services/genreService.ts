import type { Genre, NewGenre } from "../../domain/entities/genre";
import type { IGenreRepository } from "../../domain/ports/IGenreRepository";
import { parse } from "valibot";
import { createGenreSchema } from "../../domain/validation/genreValidator";

export class GenreService {
	constructor(private genreRepository: IGenreRepository) {}

	async addNewGenre(genre: NewGenre): Promise<Genre> {
		const validatedGenre = parse(createGenreSchema, genre);
		return this.genreRepository.addNewGenre(validatedGenre);
	}

	async updateGenre(
		id: number,
		genre: Partial<NewGenre>,
	): Promise<Genre | null> {
		return this.genreRepository.updateGenre(id, genre);
	}

	async getAllGenres(): Promise<Genre[]> {
		return this.genreRepository.getAllGenres();
	}

	async getGenreById(id: number): Promise<Genre | null> {
		return this.genreRepository.getGenreById(id);
	}
}
