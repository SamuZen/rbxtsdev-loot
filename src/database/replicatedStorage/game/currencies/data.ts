import { LootTypes } from "@rbxts/loot/out/shared/LootTypes";
import { ItemType } from "../items/itemTypes";
import { ICurrencyDatabase } from "./currencies";
import { CurrencyIds } from "./ids";

const CurrenciesData: ICurrencyDatabase = {
	[CurrencyIds[CurrencyIds.Gold]]: {
		id: CurrencyIds[CurrencyIds.Gold],
		name: "Gold",
		icon: "rbxassetid://9341850470",
		lootType: LootTypes.Magnetic,
		itemType: ItemType.Currency,
	},
};

export default CurrenciesData;
