import type { Type, NewType, UpdateType } from "../entities/type";

export interface ITypeRepository {
	addNewType(type: NewType): Promise<Type>;
	updateType(id: number, type: UpdateType): Promise<Type | null>;

	getAllTypes(): Promise<Type[]>;

	getTypeById(id: number): Promise<Type | null>;
}
