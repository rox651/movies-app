import { parse } from "valibot";
import type {
	FilmProduction,
	NewFilmProduction,
} from "../../domain/entities/filmProduction";
import type { IFilmProductionRepository } from "../../domain/ports/IFilmProductionRepository";
import { createFilmProductionSchema } from "../../domain/validation/filmProductionValidator";

export class FilmProductionService {
	constructor(private filmProductionRepository: IFilmProductionRepository) {}

	async addNewFilmProduction(
		filmProduction: NewFilmProduction,
	): Promise<FilmProduction> {
		const validatedFilmProduction = parse(
			createFilmProductionSchema,
			filmProduction,
		);
		return this.filmProductionRepository.addNewFilmProduction(
			validatedFilmProduction,
		);
	}

	async updateFilmProduction(
		id: number,
		filmProduction: Partial<NewFilmProduction>,
	): Promise<FilmProduction | null> {
		return this.filmProductionRepository.updateFilmProduction(
			id,
			filmProduction,
		);
	}

	async getAllFilmProductions(): Promise<FilmProduction[]> {
		return this.filmProductionRepository.getAllFilmProductions();
	}

	async getFilmProductionById(id: number): Promise<FilmProduction | null> {
		return this.filmProductionRepository.getFilmProductionById(id);
	}
}
