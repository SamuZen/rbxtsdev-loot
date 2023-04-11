import { LootServer } from "@rbxts/loot";
import {
	ServerLootCollectedSignalData,
	ServerLootDespawnSignalData,
	ServerLootSpawnSignalData,
} from "@rbxts/loot/out/shared/Loot";

LootServer.OnLootCollected((data: ServerLootCollectedSignalData) => {
	warn(data.player.Name, " collected ", data.loot.id);
});

LootServer.OnLootDespawned((data: ServerLootDespawnSignalData) => {
	warn(data.player.Name, " despawned ", data.lootId);
});

LootServer.OnLootSpawned((data: ServerLootSpawnSignalData) => {
	warn(data.player.Name, " spawned ", data.creationData.id);
});
