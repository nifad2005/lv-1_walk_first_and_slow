export const handleSound = ()=>{
  const audio = new Audio('/sounds/ting.mp3')
  audio.volume = 0.01
  audio.play()
}