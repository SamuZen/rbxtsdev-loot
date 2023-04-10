//const randomCache = new ClassCache<RandomPartColor>(new RandomPartColor(), Workspace);
import { LootServer } from "@rbxts/loot";
import { Lootable } from "@rbxts/loot/out/shared/Loot";
import CurrenciesData from "database/replicatedStorage/game/currencies/data";
import { CurrencyIds } from "database/replicatedStorage/game/currencies/ids";

const Workspace = game.GetService("Workspace");
const Players = game.GetService("Players");

LootServer.Initialize();

const step = new Instance("Part");
step.Size = new Vector3(10, 10, 10);
step.Transparency = 0.5;
step.Anchored = true;
step.CFrame = new CFrame(0, 5, -10);
step.CanCollide = false;
step.Parent = Workspace;
step.Touched.Connect((part) => {
	if (part.Name === "HumanoidRootPart") {
		const player = Players.GetPlayerFromCharacter(part.Parent as Model);
		if (player === undefined) return;

		const position = spawn.CFrame.Position;
		const loots: Lootable[] = [
			CurrenciesData[CurrencyIds.Gold],
			CurrenciesData[CurrencyIds.Gold],
			CurrenciesData[CurrencyIds.Cristal],
		];

		loots.forEach((loot) => {
			LootServer.CreateLoot(player, loot, position);
		});
	}
});

const spawn = new Instance("Part");
spawn.Size = new Vector3(1, 1, 1);
spawn.Transparency = 0.5;
spawn.Anchored = true;
spawn.CanCollide = false;
spawn.CFrame = new CFrame(0, 5, -30);
