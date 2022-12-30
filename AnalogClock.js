const AnalogClock = $container => {

  const get = (target) => document.querySelector(target)
  const $analogClock = get('.analog-clock')

  const createClockElement = () => {
    $analogClock.innerHTML = `
      <div class="hand hour"></div>
      <div class="hand minute"></div>
      <div class="hand second"></div>
      <div class="time time1">|</div>
      <div class="time time2">|</div>
      <div class="time time3">|</div>
      <div class="time time4">|</div>
      <div class="time time5">|</div>
      <div class="time time6">|</div>
      <div class="time time7">|</div>
      <div class="time time8">|</div>
      <div class="time time9">|</div>
      <div class="time time10">|</div>
      <div class="time time11">|</div>
      <div class="time time12">|</div> `
  }
  
  const runClock = () =>{
    const $hour = get('.hour')
    const $minute = get('.minute')
    const $second = get('.second')
    let h_angle_value = 0,
        m_angle_value = 0,
        s_angle_value = 0

    setInterval(() => {
      s_angle_value += 1
      if (s_angle_value == 60){
        s_angle_value = 0
        m_angle_value = (m_angle_value + 1) % 60
        h_angle_value = (h_angle_value + 0.5) % 360
      }

      $second.style.setProperty('--deg',`${s_angle_value}*6`)
      $minute.style.setProperty('--deg',`${m_angle_value}*6`)
      $hour.style.setProperty('--deg',`${h_angle_value}`)

    }, 1000);
  }


  
  const init = () => {
    createClockElement()
    runClock()
  };


  init()
};

export default AnalogClock;