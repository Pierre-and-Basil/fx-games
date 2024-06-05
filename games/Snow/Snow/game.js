
var gameInstance = UnityLoader.instantiate(
    "gameContainer",
    "https://cdn.jsdelivr.net/gh/Vrkids2009/snowrider3d@6b7c2b9167b592528b221428414e63f06c4640b9/Build/SnowRider3D-gd-1.json",
    {
      onProgress: UnityProgress,
      Module: {
        onRuntimeInitialized: function () {
          UnityProgress(gameInstance, "complete");
        },
      },
    }
  );
