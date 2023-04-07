import * as LootClient from "@rbxts/loot/out/client/loot";

LootClient.InitializeLootClient();
LootClient.setPlayerCollectorSize(5);

const workspace = game.GetService("Workspace");

function create(pos: Vector3) {
	const part = new Instance("Part");
	part.Size = new Vector3(1, 1, 1);
	part.Anchored = true;
	part.CanCollide = false;
	part.PivotTo(new CFrame(pos));
	part.Parent = workspace;
}

LootClient.onLootCreated((lootData) => {
	warn("Loot created: ", lootData);
});

LootClient.onLootCollected((lootData) => {
	create(lootData.loot.handle.GetPivot().Position);
	warn("Loot collected: ", lootData);
});
