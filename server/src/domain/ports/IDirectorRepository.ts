import type {
	Director,
	NewDirector,
	UpdateDirector,
} from "../entities/director";

export interface IDirectorRepository {
	addNewDirector(director: NewDirector): Promise<Director>;
	updateDirector(
		id: number,
		director: UpdateDirector,
	): Promise<Director | null>;

	getAllDirectors(): Promise<Director[]>;

	getDirectorById(id: number): Promise<Director | null>;
}
