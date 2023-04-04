import { IClassCachable } from "@rbxts/class-cache";

class RandomPoper extends IClassCachable {
	CacheCreated(): void {
		warn("RandomPoper Created");
	}
	CacheSetParent(parent: Instance | undefined): void {
		warn("RandomPoper SetParent");
	}
	CacheMakeNew(): IClassCachable {
		warn("RandomPoper MakeNew");
		return new RandomPoper();
	}
	CacheReturned(): void {
		warn("RandomPoper Returned");
	}
	CacheClear(): void {}
}
