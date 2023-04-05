//const randomCache = new ClassCache<RandomPartColor>(new RandomPartColor(), Workspace);
import { CreateLootForPlayer, InitializeLootServer } from "@rbxts/loot/out/server/loot";
import { Lootable } from "@rbxts/loot/out/shared/Loot";
import CurrenciesData from "database/replicatedStorage/game/currencies/data";
import { CurrencyIds } from "database/replicatedStorage/game/currencies/ids";

const Workspace = game.GetService("Workspace");
const Players = game.GetService("Players");

InitializeLootServer();

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

		warn("Touched");
		const position = spawn.CFrame.Position;
		const loots: Lootable[] = [CurrenciesData[CurrencyIds.Gold]];

		loots.forEach((loot) => {
			CreateLootForPlayer(player, loot, position);
		});
	}
});

const spawn = new Instance("Part");
spawn.Size = new Vector3(1, 1, 1);
spawn.Transparency = 0.5;
spawn.Anchored = true;
spawn.CanCollide = false;
spawn.CFrame = new CFrame(0, 5, -30);
