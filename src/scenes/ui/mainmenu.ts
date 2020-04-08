import { SceneLayer } from "../../controllers/SceneController";
import { loadedFiles, imagesRes } from "../../config/resources";
import { Scene } from "../../scene";
import { ScreenSize } from "../../config/settings";
import Dust from "pixi-dust";
import easingFormulas from "pixi-charm";


export class MainMenuScene extends Scene {

	private reelCov: PIXI.Sprite;
	private symbolOne: PIXI.Sprite;
	private symbolTwo: PIXI.Sprite;
	private symbolThree: PIXI.Sprite;
	private spinButton: PIXI.Sprite;
	public justSomeText: PIXI.Text;


    constructor(layer: SceneLayer) {
        super(layer);
        this.create();
    }

    protected create(): void {

		this.reel_Cover();
		this.symbols();
		this.spin();
		// this.particles();
		// this.mask();
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

	public particles(): void {
		let dust = new Dust(PIXI);
		let starPng = PIXI.Sprite.fromImage('/src/assets/image/stars.png');
		
		// let starContainer = new PIXI.ParticleContainer()

		let stars = dust.create(
			128,
			128,
			()=>starPng,
			// starContainer,
			50,
		);
		this.sceneContainer.addChild(stars);
	}

	// Add reel Cover 
	public reel_Cover() :void {
		this.reelCov = PIXI.Sprite.fromImage('/src/assets/image/reelCover.png');
        this.reelCov.anchor.set(0.5);
        this.reelCov.x = ScreenSize.width / 2;
		this.reelCov.y = ScreenSize.height / 2;
		this.reelCov.scale.y = 0.5;
		this.reelCov.scale.x = 0.5;
		this.sceneContainer.addChild(this.reelCov);
	}

	//Add Spin button
	public spin() :any {
		let symbolTexture = PIXI.Texture.fromImage('/src/assets/image/spinButton.png');
		this.spinButton = new PIXI.Sprite(symbolTexture);
		this.spinButton.position.x = 820;
		this.spinButton.position.y = 470;
		this.sceneContainer.addChild(this.spinButton);

		this.spinButton.interactive = true;
		this.spinButton.buttonMode = true;

		this.spinButton.on('click',(): void => {
			// this.spinButton.rotation += 1;
			// Tweening with GSAP
		})	
	}

	public tweening(symbol: PIXI.Sprite): PIXI.Sprite {
		let c = new easingFormulas(PIXI);
		
		let slider = c.slide(this.symbolOne,128,128,128,"smoothstep",true);
		
		return slider
	}
	
	public symbols(): any {
		this.symbolOne = PIXI.Sprite.fromImage('/src/assets/image/reelSimbol1.png');
		this.symbolOne.position.x = 548;
		this.symbolOne.position.y = 90;
		this.symbolOne.scale.x = 0.5;
		this.symbolOne.scale.y = 0.5;
		
		this.symbolTwo = PIXI.Sprite.fromImage('/src/assets/image/reelSimbol2.png');
		this.symbolTwo.position.x = 548;
		this.symbolTwo.position.y = 460;
		this.symbolTwo.scale.x = 0.5;
		this.symbolTwo.scale.y = 0.5;
		
		this.symbolThree = PIXI.Sprite.fromImage('/src/assets/image/reelSimbol3.png');
		this.symbolThree.position.x = 548;
		this.symbolThree.position.y = 270;
		this.symbolThree.scale.x = 0.5;
		this.symbolThree.scale.y = 0.5;

		this.tweening(this.symbolOne)

		this.sceneContainer.addChild(this.symbolOne);
		this.sceneContainer.addChild(this.symbolTwo);
		this.sceneContainer.addChild(this.symbolThree);
	}
	
    public update(delta: number): void {

		// let symbols = [this.symbolOne, this.symbolTwo, this.symbolTwo];
		// console.log(symbols);
		// symbols.forEach(symbol => {
		// 	if(symbol.position.y<= 500 && symbol.position.y >= 100){
		// 		symbol.position.y -= 1;
		// 	}
		// 	if(symbol.position.y <= 100){
		// 		this.symbolTwo.position.y+=500;
		// 	}
		// })	
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