import { Lootable } from "@rbxts/loot/out/shared/Loot";
import { IItemData } from "../items/items";

export interface ICurrencyData extends Lootable, IItemData {
	name: string;
}

export interface ICurrencyDatabase {
	[id: string]: ICurrencyData;
}
