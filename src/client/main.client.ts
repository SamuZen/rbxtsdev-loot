import * as LootClient from "@rbxts/loot/out/client/loot";

LootClient.Initialize();
LootClient.SetCollectorSize(5);

const workspace = game.GetService("Workspace");

function create(pos: Vector3, color: Color3) {
	const part = new Instance("Part");
	part.Size = new Vector3(1, 1, 1);
	part.Anchored = true;
	part.CanCollide = false;
	part.PivotTo(new CFrame(pos));
	part.Color = color;
	part.Parent = workspace;
}

LootClient.OnLootSpawned((data) => {
	warn("Loot spawned: ", data);
	create(data.loot.handle.Position, new Color3(0, 1, 0));
});

LootClient.OnLootDespawned((data) => {
	warn("Loot Despawned: ", data);
	create(data.loot.handle.Position, new Color3(1, 0, 0));
});

LootClient.OnLootCollected((data) => {
	warn("Loot Collected: ", data);
	create(data.loot.handle.Position, new Color3(0.86, 1, 0.14));
});

LootClient.OnLootTouched((data) => {
	warn("Loot Touched: ", data);
	create(data.loot.handle.Position, new Color3(1, 0, 0.73));
});
