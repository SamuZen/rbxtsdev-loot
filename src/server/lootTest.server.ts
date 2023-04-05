//const randomCache = new ClassCache<RandomPartColor>(new RandomPartColor(), Workspace);
import { InitializeLootServer } from "@rbxts/loot/out/server/loot";

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
		// const mobData = MobsData.mobs[MobIds[MobIds.Pirate]];
		// const position = spawn.CFrame.Position;

		//const randomPartClass = randomCache.Get();
		//randomPartClass.Display(position);

		//task.delay(2, () => {
		//	randomCache.Return(randomPartClass);
		//});

		// const dropSelectionParams: IDropSelectionParams = {
		// 	participants: Players.GetPlayers(),
		// 	lastDamaged: player,
		// 	damageContributions: new Map(Players.GetPlayers().map((player) => [player, math.random(0, 100)])),
		// };

		// mobData.dropTables.forEach((dropTable) => {
		// 	const dropResult: IDropSelectionResult = SelectItemToDrop(dropTable, dropSelectionParams);
		// 	dropResult.playerItemsMap.forEach((loots, player) => {
		// 		loots.forEach((loot) => {
		// 			CreateLootForPlayer(player, loot, position);
		// 		});
		// 	});
		// });
	}
});

const spawn = new Instance("Part");
spawn.Size = new Vector3(1, 1, 1);
spawn.Transparency = 0.5;
spawn.Anchored = true;
spawn.CanCollide = false;
spawn.CFrame = new CFrame(0, 5, -30);
