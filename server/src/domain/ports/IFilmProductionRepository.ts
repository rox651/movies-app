import type {
	FilmProduction,
	NewFilmProduction,
	UpdateFilmProduction,
} from "../entities/filmProduction";

export interface IFilmProductionRepository {
	addNewFilmProduction(
		filmProduction: NewFilmProduction,
	): Promise<FilmProduction>;
	updateFilmProduction(
		id: number,
		filmProduction: UpdateFilmProduction,
	): Promise<FilmProduction | null>;

	getAllFilmProductions(): Promise<FilmProduction[]>;

	getFilmProductionById(id: number): Promise<FilmProduction | null>;
}
