import { RegisterToLootCollected } from "@rbxts/loot/out/server/loot";
import { LootCollectedAlertData } from "@rbxts/loot/out/shared/Loot";

RegisterToLootCollected((data: LootCollectedAlertData) => {
	warn(data.player.Name, " collected ", data.loot.id);
});
