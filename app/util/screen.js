
export function screen_height(){
  var height = (window.innerHeight > 0) ? window.innerHeight : screen.height;
  return height;
}

export function screen_width(){
  var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
  return width;
}
