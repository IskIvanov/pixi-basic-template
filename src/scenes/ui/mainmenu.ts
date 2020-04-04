
import { SceneLayer } from "../../controllers/SceneController";
import { loadedFiles, imagesRes } from "../../config/resources";
import { Scene } from "../../scene";
import { ScreenSize } from "../../config/settings";

export class MainMenuScene extends Scene {

	private reelCov: PIXI.Sprite;
	private spinButton: PIXI.Sprite;

    constructor(layer: SceneLayer) {
        super(layer);
        this.create();
    }

    protected create(): void {

		this.spinButton = new PIXI.Sprite(loadedFiles[imagesRes.spinButton].texture);
		this.spinButton.anchor.set(0.5);
		this.spinButton.x = ScreenSize.width / 2;
		this.spinButton.y = ScreenSize.height / 2;


        this.reelCov = new PIXI.Sprite(loadedFiles[imagesRes.reelCov].texture);
        this.reelCov.anchor.set(0.5);
        this.reelCov.x = ScreenSize.width / 2;
		this.reelCov.y = ScreenSize.height / 2;
		this.reelCov.scale.y = 0.5;
		this.reelCov.scale.x = 0.5;

        this.sceneContainer.addChild(this.reelCov);
    }

	public reelCover(): void {

	}

    public update(delta: number): void {
    }
}