import { LootServer } from "@rbxts/loot";
import { LootCollectedSignalData, LootDespawnSignalData, LootSpawnSignalData } from "@rbxts/loot/out/shared/Loot";

LootServer.OnLootCollected((data: LootCollectedSignalData) => {
	warn(data.player.Name, " collected ", data.loot.id);
});

LootServer.OnLootDespawned((data: LootDespawnSignalData) => {
	warn(data.player.Name, " despawned ", data.lootId);
});

LootServer.OnLootSpawned((data: LootSpawnSignalData) => {
	warn(data.player.Name, " spawned ", data.creationData.id);
});
