var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["66b951bf-203f-48e6-bba5-be6c1403eb62","08ecd8e9-200f-4210-884e-9cfdf0ef8a75","507e0a9f-9a70-4335-8c4a-b2089f998019"],"propsByKey":{"66b951bf-203f-48e6-bba5-be6c1403eb62":{"name":"cactus_01_1","frameCount":1,"frameSize":{"x":387,"y":400},"looping":true,"frameDelay":2,"categories":["video_games"],"jsonLastModified":"2021-03-29 19:32:53 UTC","pngLastModified":"2021-03-29 19:32:53 UTC","version":"1Bfj2ZM1EuRQZteZ_QgN5e8YXdTg3LEu","sourceUrl":"assets/api/v1/animation-library/gamelab/1Bfj2ZM1EuRQZteZ_QgN5e8YXdTg3LEu/category_video_games/cactus_01.png","sourceSize":{"x":387,"y":400},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/api/v1/animation-library/gamelab/1Bfj2ZM1EuRQZteZ_QgN5e8YXdTg3LEu/category_video_games/cactus_01.png"},"08ecd8e9-200f-4210-884e-9cfdf0ef8a75":{"name":"gameplayobject_arrow_01_1","categories":["video_games"],"frameCount":1,"frameSize":{"x":284,"y":400},"looping":true,"frameDelay":2,"jsonLastModified":"2021-03-29 19:32:23 UTC","pngLastModified":"2021-03-29 19:31:59 UTC","version":"qeOQ9SjGOZiqQlX34uSJNh7cLECJTHQZ","sourceUrl":"assets/api/v1/animation-library/gamelab/qeOQ9SjGOZiqQlX34uSJNh7cLECJTHQZ/category_video_games/gameplayobject_arrow_01.png","sourceSize":{"x":284,"y":400},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/api/v1/animation-library/gamelab/qeOQ9SjGOZiqQlX34uSJNh7cLECJTHQZ/category_video_games/gameplayobject_arrow_01.png"},"507e0a9f-9a70-4335-8c4a-b2089f998019":{"name":"mushrooms_02_1","frameCount":1,"frameSize":{"x":284,"y":395},"looping":true,"frameDelay":2,"categories":["video_games"],"jsonLastModified":"2021-03-29 19:30:58 UTC","pngLastModified":"2021-03-29 19:30:59 UTC","version":"ieNQleM3gT_FstKtZC1hd3TqStJaT.Nx","sourceUrl":"assets/api/v1/animation-library/gamelab/ieNQleM3gT_FstKtZC1hd3TqStJaT.Nx/category_video_games/mushrooms_02.png","sourceSize":{"x":284,"y":395},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/api/v1/animation-library/gamelab/ieNQleM3gT_FstKtZC1hd3TqStJaT.Nx/category_video_games/mushrooms_02.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

function draw() {
  playSound("assets/category_achievements/sharp_win_3.mp3")
  playSound("assets/category_achievements/vibrant_game_slot_machine_win_3.mp3")
  playSound("assets/category_achievements/bubbly_game_achievement_sound.mp3")
  playSound("assets/category_achievements/lighthearted_bonus_objective_2.mp3")
  playSound("assets/category_bell/vibrant_game_bell_ding.mp3")
  playSound("assets/category_explosion/air_explode_bonus_5.mp3")
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
