import React from 'react'


const paths = [
  'M31.8,131l-29-1.3c0,0.9-0.1,1.8-0.1,2.8l29,0.7C31.7,132.5,31.7,131.8,31.8,131z',
  'M32.4,123.6l-28.8-3.4c-0.1,0.9-0.2,1.8-0.3,2.8l28.9,2.7C32.2,125.1,32.3,124.4,32.4,123.6z',
  'M33.5,116.3L5,110.9c-0.2,0.9-0.3,1.8-0.5,2.8l28.6,4.8C33.2,117.7,33.4,117,33.5,116.3z',
  'M35.1,109l-28-7.4c-0.2,0.9-0.5,1.8-0.7,2.7l28.2,6.8C34.8,110.5,34.9,109.7,35.1,109z',
  'M37.3,101.9L9.8,92.6c-0.3,0.9-0.6,1.8-0.9,2.7l27.6,8.8C36.8,103.3,37,102.6,37.3,101.9z',
  'M39.9,95L13.2,83.7c-0.4,0.9-0.7,1.7-1.1,2.6L39.1,97C39.4,96.3,39.6,95.6,39.9,95z',
  'M43.1,88.2L17.2,75.1c-0.4,0.8-0.8,1.7-1.2,2.5l26.1,12.6C42.4,89.5,42.7,88.9,43.1,88.2z',
  'M46.7,81.7L21.8,66.8c-0.5,0.8-0.9,1.6-1.4,2.4l25.2,14.4C45.9,83,46.3,82.3,46.7,81.7z',
  'M50.7,75.5L27,58.8c-0.5,0.8-1.1,1.5-1.6,2.3l24.1,16.2C49.9,76.7,50.3,76.1,50.7,75.5z',
  'M55.2,69.6L32.7,51.3c-0.6,0.7-1.2,1.5-1.7,2.2l22.9,17.8C54.3,70.7,54.8,70.1,55.2,69.6z',
  'M60.1,63.9L38.9,44.1c-0.6,0.7-1.3,1.4-1.9,2.1l21.6,19.4C59.1,65,59.6,64.5,60.1,63.9z',
  'M65.4,58.7L45.7,37.4c-0.7,0.6-1.4,1.3-2,1.9l20.2,20.8C64.3,59.7,64.8,59.2,65.4,58.7z',
  'M71,53.8L52.8,31.2c-0.7,0.6-1.4,1.2-2.2,1.8l18.7,22.2C69.9,54.8,70.4,54.3,71,53.8z',
  'M77,49.4L60.4,25.6c-0.8,0.5-1.5,1.1-2.3,1.6l17,23.5C75.8,50.2,76.4,49.8,77,49.4z',
  'M83.2,45.4L68.3,20.5c-0.8,0.5-1.6,1-2.4,1.4l15.4,24.6C81.9,46.1,82.6,45.7,83.2,45.4z',
  'M89.7,41.8L76.6,15.9c-0.8,0.4-1.6,0.8-2.5,1.3l13.6,25.6C88.4,42.5,89,42.1,89.7,41.8z',
  'M96.4,38.7L85.2,11.9c-0.9,0.4-1.7,0.7-2.6,1.1l11.7,26.5C95.1,39.3,95.7,39,96.4,38.7z',
  'M103.4,36.1L94.1,8.6c-0.9,0.3-1.8,0.6-2.6,0.9l9.8,27.3C102,36.6,102.7,36.3,103.4,36.1z',
  'M109.7,4.4l5.9,28.4c0.7-0.1,1.4-0.3,2.1-0.4l-5.3-28.5C111.5,4,110.6,4.2,109.7,4.4z',
  'M110.5,34l-7.3-28.1c-0.9,0.2-1.8,0.5-2.7,0.7l7.9,27.9C109.1,34.3,109.8,34.2,110.5,34z',
  'M119,2.8l3.8,28.7c0.7-0.1,1.4-0.2,2.2-0.3l-3.2-28.8C120.9,2.6,120,2.7,119,2.8z',
  'M128.5,1.9l1.8,28.9c0.7,0,1.5-0.1,2.2-0.1l-1.2-29C130.3,1.8,129.4,1.8,128.5,1.9z',
  'M137.9,1.6l-0.2,29l0.2,0c0.7,0,1.3,0,2,0l0.8-29c-0.9,0-1.7,0-2.6,0L137.9,1.6z',
  'M145.2,30.9c0.7,0.1,1.5,0.1,2.2,0.2l2.8-28.9c-0.9-0.1-1.9-0.2-2.8-0.2L145.2,30.9z',
  'M152.5,31.8c0.7,0.1,1.4,0.2,2.1,0.3l4.9-28.6c-0.9-0.2-1.8-0.3-2.8-0.4L152.5,31.8z',
  'M168.9,5.4c-0.9-0.2-1.8-0.4-2.7-0.6l-6.3,28.3c0.7,0.2,1.4,0.3,2.1,0.5L168.9,5.4z',
  'M169.1,35.6L178,8c-0.9-0.3-1.8-0.6-2.7-0.8L167,35C167.7,35.2,168.4,35.4,169.1,35.6z',
  'M176.1,38.2l10.9-26.9c-0.9-0.3-1.7-0.7-2.6-1l-10.3,27.1C174.7,37.6,175.4,37.9,176.1,38.2z',
  'M182.9,41.2l12.7-26.1c-0.8-0.4-1.7-0.8-2.5-1.2l-12.2,26.3C181.6,40.6,182.2,40.9,182.9,41.2z',
  'M189.5,44.7L204,19.6c-0.8-0.5-1.6-0.9-2.4-1.4l-14,25.4C188.2,44,188.8,44.3,189.5,44.7z',
  'M195.8,48.7l16.3-24c-0.8-0.5-1.5-1-2.3-1.5l-15.8,24.3C194.6,47.8,195.2,48.2,195.8,48.7z',
  'M201.8,53.1l17.9-22.8c-0.7-0.6-1.5-1.1-2.2-1.7L200,51.7C200.6,52.2,201.2,52.6,201.8,53.1z',
  'M207.5,57.8l19.5-21.5c-0.7-0.6-1.4-1.2-2.1-1.9l-19,21.9C206.4,56.9,206.9,57.4,207.5,57.8z',
  'M212.8,63l20.9-20.1c-0.6-0.7-1.3-1.3-2-2l-20.5,20.5C211.8,62,212.3,62.5,212.8,63z',
  'M217.8,68.6L240,50c-0.6-0.7-1.2-1.4-1.8-2.1l-21.9,19.1C216.8,67.5,217.3,68,217.8,68.6z',
  'M222.4,74.4l23.5-17c-0.5-0.8-1.1-1.5-1.7-2.2l-23.1,17.5C221.5,73.3,221.9,73.8,222.4,74.4z',
  'M226.5,80.6l24.6-15.3c-0.5-0.8-1-1.6-1.5-2.3l-24.3,15.8C225.7,79.4,226.1,80,226.5,80.6z',
  'M230.2,87l25.6-13.5c-0.4-0.8-0.9-1.6-1.3-2.5l-25.3,14.1C229.5,85.8,229.9,86.4,230.2,87z',
  'M233.4,93.7L260,82c-0.4-0.8-0.8-1.7-1.1-2.5l-26.3,12.3C232.9,92.4,233.2,93.1,233.4,93.7z',
  'M236.2,100.6l27.3-9.8c-0.3-0.9-0.6-1.7-1-2.6l-27.1,10.4C235.7,99.2,236,99.9,236.2,100.6z',
  'M238.5,107.7l27.9-7.8c-0.3-0.9-0.5-1.8-0.8-2.7l-27.7,8.4C238.1,106.3,238.3,107,238.5,107.7z',
  'M240.2,114.9l28.4-5.8c-0.2-0.9-0.4-1.8-0.6-2.7l-28.3,6.4C239.9,113.4,240.1,114.1,240.2,114.9z',
  'M241.4,122.2l28.8-3.8c-0.1-0.9-0.3-1.8-0.4-2.8l-28.7,4.4C241.2,120.7,241.3,121.5,241.4,122.2z',
  'M242.2,129.6l28.9-1.8c-0.1-0.9-0.1-1.9-0.2-2.8l-28.9,2.3C242.1,128.1,242.1,128.8,242.2,129.6z',
  'M271.3,134.5l-29,0.4l0,1.1c0,0.4,0,0.8,0,1.3l29,0.4c0-0.5,0-1.1,0-1.6L271.3,134.5z'
]
const SpeedometerIcon = ({ percent = 50 }) =>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 275 140">
    <style type="text/css">
      {`
        .st0{ fill:#5ed062; }
        .st1{ fill:#f2f4f6 }
        .st2{ fill:#F9CE43; }
        .st3{ opacity:0.5; fill:none; stroke:#F9CE43; stroke-width:1.5; stroke-linecap:round; }
        .st4{ opacity:0.1; fill:#F9CE43; }
        .st5{ fill:url(#SVGID_1_); }
      `}
    </style>
    <g className="ticks">
      {
        paths.map((d, i) => {
          const rowPercent = Math.floor((i / paths.length) * 100)
          return <path key={i} className={`tick ${rowPercent < percent ? 'st0' : 'st1'}`} d={d} />
        })
      }
    </g>
    <g>
      <circle className="st2" cx="137.7" cy="131.5" r="4.6" />
      <line className="st3 arrow" x1="137.7" y1="38.5" x2="137.7" y2="131.5" transform={`rotate(${Math.round(-90 + 180 * (percent / 100))}, 137.7, 131.5)`} />
      <circle className="st4" cx="137.7" cy="131.5" r="10.3" />
    </g>
    <g>
      <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="137.7366" y1="131.4783" x2="137.7366" y2="46.7136">
        <stop offset="0" style={{ stopColor: 'fill:#ffffff', stopOpacity: 0 }}/>
        <stop offset="1" style={{ stopColor: 'fill:#445265', stopOpacity: '5.000000e-02' }}/>
      </linearGradient>
      <path className="st5" d="M222.5,131.5c0-46.8-38-84.8-84.8-84.8S53,84.7,53,131.5" />
    </g>
  </svg>


export default SpeedometerIcon
