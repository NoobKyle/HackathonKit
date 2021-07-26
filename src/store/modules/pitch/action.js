export function pitchUpdate(images, powerpoint, youtube){
  return{
    type: "pitch/UPDATE",
    payload: {images, powerpoint, youtube}
  };
}
