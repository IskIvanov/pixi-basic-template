import { SceneLayer } from "../../controllers/SceneController";
import { loadedFiles, imagesRes } from "../../config/resources";
import { Scene } from "../../scene";
import { ScreenSize } from "../../config/settings";
// import * as GSAP from "gsap";

export class MainMenuScene extends Scene {

	private reelCov: PIXI.Sprite;
	private symbolOne: PIXI.Sprite;
	private symbolTwo: PIXI.Sprite;
	private symbolThree: PIXI.Sprite;
	private spinButton: PIXI.Sprite;
	public justSomeText: PIXI.Text;
	public tweening: []


    constructor(layer: SceneLayer) {
        super(layer);
        this.create();
    }

    protected create(): void {

		this.reel_Cover();
		this.symbols();
		this.spin();
	}

	//Build a reel
	public reel(): void {
		// adding a reel object
		const reel = {
			position: 0,
			symbols: [],
			previousPosition: 0,
			blur:  new PIXI.filters.BlurFilter()
		}
		reel.blur.blurX = 0;
		reel.blur.blurY = 0;
		
	}

	// Add reel Cover 
	public reel_Cover() :void {
		this.reelCov = PIXI.Sprite.fromImage('/src/assets/image/reel/reelCover.png');
        this.reelCov.anchor.set(0.5);
        this.reelCov.x = ScreenSize.width / 2;
		this.reelCov.y = ScreenSize.height / 2;
		this.reelCov.scale.y = 0.5;
		this.reelCov.scale.x = 0.5;
		this.sceneContainer.addChild(this.reelCov);
	}

	//Add Spin button
	public spin() :any {
		let symbolTexture = PIXI.Texture.fromImage('/src/assets/image/reel/spinButton.png');
		this.spinButton = new PIXI.Sprite(symbolTexture);
		this.spinButton.position.x = 820;
		this.spinButton.position.y = 470;
		this.sceneContainer.addChild(this.spinButton);

		this.spinButton.interactive = true;
		this.spinButton.buttonMode = true;

		this.spinButton.on('click',(): void => {
			this.spinButton.scale.x *= 1.25;
			this.spinButton.scale.y *= 1.25;
			// Tweening with GSAP
			// new GSAP.Animation(10, this.spinButton);
		})	
	}
	
	public symbols(): any {
		this.symbolOne = PIXI.Sprite.fromImage('/src/assets/image/reel/reelSimbol1.png');
		this.symbolOne.position.x = 548;
		this.symbolOne.position.y = 90;
		this.symbolOne.scale.x = 0.5;
		this.symbolOne.scale.y = 0.5;
		
		this.symbolTwo = PIXI.Sprite.fromImage('/src/assets/image/reel/reelSimbol2.png');
		this.symbolTwo.position.x = 548;
		this.symbolTwo.position.y = 460;
		this.symbolTwo.scale.x = 0.5;
		this.symbolTwo.scale.y = 0.5;
		
		let symbolTexture = PIXI.Texture.fromImage('/src/assets/image/reel/reelSimbol3.png')
		this.symbolThree = new PIXI.Sprite(symbolTexture);
		this.symbolThree.position.x = 548;
		this.symbolThree.position.y = 270;
		this.symbolThree.scale.x = 0.5;
		this.symbolThree.scale.y = 0.5;

		this.sceneContainer.addChild(this.symbolOne);
		this.sceneContainer.addChild(this.symbolTwo);
		this.sceneContainer.addChild(this.symbolThree);
	}

	public reelCover(): void {
	}
	
    public update(delta: number): void {
		console.log("update");

	   if(this.symbolTwo.position.y <= 500 && this.symbolTwo.position.y >= 100){
			this.symbolTwo.position.y-=1;
		}

		if(this.symbolTwo.position.y <= 100){
			this.symbolTwo.position.y+=500;
		}
		
    }
	
	//Mask to cover top and  bottom of reels
	public mask() :any {
		var graphics = new PIXI.Graphics();
		graphics.beginFill(0,1);
		graphics.drawRect(0,0,100,100);
		graphics.endFill();
		this.sceneContainer.addChild(graphics);
		this.sceneContainer.mask = graphics;
	}	
	//Creating tween effect
	// public tweenTo(object, property, target, time, easing, onchange, oncomplete): any {
	
		// 	const tween = {
		// 		object,
		// 		property,
		// 		propertyBeginValue: object[property],
		// 		target,
		// 		easing,
		// 		time,
		// 		change: onchange,
		// 		complete: oncomplete,
		// 		start: Date.now(),
		// 	};
	
		// 	// this.tweening.push(tween.time);
		// 	return tween;
		// }
}