
Human: "Pick up the red box from shelf C7"
  ↓ [Whisper transcribes]
Robot receives: "pick up the red box from shelf C7"
  ↓ [Parser extracts]
Intent: grasp, Object: box, Attribute: red, Location: shelf_C7
  ↓ [Validation]
Status: valid (shelf_C7 exists, "box" is safe object)
  ↓ [Execution - Vision]
Robot: [navigates to shelf_C7, uses computer vision to detect red box]
Robot: "I see the red box. Preparing to grasp."
  ↓ [Manipulation]
Robot: [extends arm, closes gripper around box]
Robot: "I've picked up the red box. Where should I place it?"