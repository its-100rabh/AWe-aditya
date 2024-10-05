import * as React from 'react';
import Svg, { Mask, Path, G, Rect, Defs, LinearGradient, Stop } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

const TakeSelfieIcon = (props) => (
  <Svg
    width={187}
    height={165}
    viewBox="0 0 187 165"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Mask id="a" fill="#fff">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M51.455.613c14.682 0 26.585 11.903 26.585 26.585v53.827h1.1l-1.1.114v.368h-3.572l-46.49 4.794-3.105-4.794h-.004V27.198C24.87 12.516 36.772.613 51.455.613z"
      />
    </Mask>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M51.455.613c14.682 0 26.585 11.903 26.585 26.585v53.827h1.1l-1.1.114v.368h-3.572l-46.49 4.794-3.105-4.794h-.004V27.198C24.87 12.516 36.772.613 51.455.613z"
      fill="#EFEFEF"
    />
    <Path
      d="M78.04 81.025v.435h-.436v-.434h.436zm1.1 0v-.434l.045.867-.044-.433zm-1.1.114h-.436v-.392l.39-.04.046.432zm0 .368h.434v.435h-.434v-.435zm-3.572 0l-.044-.432.022-.003h.023v.435zm-46.49 4.794l.045.433-.265.027-.145-.224.366-.236zm-3.105-4.794v-.435h.237l.128.199-.365.236zm-.004 0v.435h-.435v-.435h.435zm52.736-54.309c0-14.442-11.708-26.15-26.15-26.15v-.87c14.922 0 27.02 12.098 27.02 27.02h-.87zm0 53.827V27.198h.87v53.827h-.87zm.434-.434h1.102v.87h-1.102v-.87zm1.146.867l-1.1.114-.09-.866 1.101-.113.09.865zm-1.58.05v-.369h.87v.368h-.87zm-3.136-.436h3.57v.87h-3.57v-.87zm.044.868l-46.49 4.794-.089-.866 46.49-4.793.09.865zm-46.9 4.597l-3.105-4.793.73-.473 3.106 4.793-.73.474zm-2.744-5.465h.004v.87h-.004v-.87zm.435-53.874v54.31h-.87v-54.31h.87zm26.15-26.15c-14.442 0-26.15 11.708-26.15 26.15h-.87c0-14.922 12.098-27.02 27.02-27.02v.87z"
      fill="#000"
      mask="url(#a)"
    />
    <Path
      d="M28.36 30.576c0-15.016 12.173-27.188 27.189-27.188 15.015 0 27.188 12.172 27.188 27.188V86.06H28.36V30.576z"
      fill="#FCBA00"
      stroke="#000"
      strokeWidth={0.479417}
    />
    <G filter="url(#filter0_i_315_18830)">
      <Path
        d="M30.121 31.278c0-14.043 11.384-25.426 25.427-25.426s25.427 11.383 25.427 25.426v53.045H30.12V31.278z"
        fill="#EFEFEF"
      />
    </G>
    <Path
      d="M30.343 31.278c0-13.92 11.285-25.204 25.205-25.204 13.92 0 25.204 11.284 25.204 25.204v52.823H30.343V31.278z"
      stroke="#000"
      strokeWidth={0.444442}
    />
    <Path
      d="M42.687 44.277c0-2.81.47-5.002 1.413-6.577.958-1.592 2.598-2.387 4.92-2.387 2.323 0 3.955.795 4.897 2.387.958 1.575 1.437 3.767 1.437 6.577 0 2.842-.48 5.067-1.437 6.675-.942 1.591-2.574 2.387-4.897 2.387-2.322 0-3.962-.796-4.92-2.387-.942-1.608-1.413-3.833-1.413-6.675zm9.939 0c0-1.315-.09-2.428-.268-3.337-.163-.91-.504-1.649-1.023-2.217-.52-.585-1.292-.877-2.315-.877s-1.794.292-2.314.877c-.52.568-.869 1.307-1.047 2.217-.163.91-.244 2.022-.244 3.337 0 1.364.081 2.51.244 3.435.162.925.503 1.672 1.023 2.24.536.57 1.315.854 2.338.854 1.023 0 1.795-.285 2.314-.853.536-.569.886-1.316 1.048-2.241.162-.926.244-2.07.244-3.435zm5.618-4.263c.097-1.51.673-2.688 1.73-3.532 1.071-.845 2.435-1.267 4.092-1.267 1.136 0 2.119.203 2.947.61.828.405 1.454.957 1.876 1.656.422.698.633 1.486.633 2.362 0 1.007-.268 1.868-.804 2.583-.535.714-1.177 1.193-1.924 1.437v.097c.958.293 1.705.829 2.241 1.608.536.763.804 1.746.804 2.948 0 .958-.22 1.81-.658 2.558-.438.747-1.088 1.34-1.949 1.778-.86.422-1.891.633-3.093.633-1.754 0-3.2-.447-4.336-1.34-1.12-.91-1.722-2.208-1.803-3.897h2.68c.065.86.398 1.567.998 2.12.601.535 1.413.803 2.436.803.991 0 1.754-.268 2.29-.804.536-.552.804-1.258.804-2.12 0-1.136-.365-1.94-1.096-2.41-.715-.488-1.819-.732-3.313-.732h-.633v-2.29h.657c1.316-.016 2.315-.235 2.997-.657.698-.422 1.047-1.088 1.047-1.998 0-.78-.252-1.396-.755-1.851-.504-.471-1.218-.707-2.144-.707-.91 0-1.616.236-2.12.707a2.753 2.753 0 00-.9 1.705h-2.704z"
      fill="#000"
    />
    <Path
      d="M36.93 74.735c-4.154-.025-6.005 3.134-6.461 5.35 2.62 2.154 3.055 5.417 2.945 6.78.61.907 2.22 1.064 2.949 1.029 2.565 9.098 8.858 5.951 11.412 4.583.958 3.147 10.489 7.296 12.357-2.329 3.738 2.776 5.143 2.643 8.78 2.549 3.639-.095 6.299-2.993 7.174-4.43 6.897 6.288 11.258 0 12.06-3.744-.942-8.185-7.653-7.854-10.662-5.795-.808-2.585-4.018-7.721-10.4-7.586-6.382.135-10.293 4.689-10.595 8.813-.705-2.156-3.134-4.858-6.688-4.631-3.554.226-5.591 2.873-6.222 5.237-.283-2.621-2.495-5.8-6.649-5.826z"
      fill="#131313"
      fillOpacity={0.05}
    />
    <Mask id="b" fill="#fff">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M76.078 88.7a11.162 11.162 0 01-8.916 4.432 11.13 11.13 0 01-6.755-2.27 6.951 6.951 0 01-12.882 1.94 6.95 6.95 0 01-11.38-4.657 6.901 6.901 0 01-2.544-.798 6.949 6.949 0 11-3.434-7.762 6.952 6.952 0 0113.472-.119 6.952 6.952 0 0112.754-.526c1.315-4.712 5.639-8.168 10.77-8.168 4.875 0 9.02 3.12 10.55 7.473A6.949 6.949 0 1176.078 88.7z"
      />
    </Mask>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M76.078 88.7a11.162 11.162 0 01-8.916 4.432 11.13 11.13 0 01-6.755-2.27 6.951 6.951 0 01-12.882 1.94 6.95 6.95 0 01-11.38-4.657 6.901 6.901 0 01-2.544-.798 6.949 6.949 0 11-3.434-7.762 6.952 6.952 0 0113.472-.119 6.952 6.952 0 0112.754-.526c1.315-4.712 5.639-8.168 10.77-8.168 4.875 0 9.02 3.12 10.55 7.473A6.949 6.949 0 1176.078 88.7z"
      fill="#FFD601"
    />
    <Path
      d="M76.078 88.7l.33-.285-.351-.408-.326.43.347.262zM60.407 90.86l.263-.346-.548-.416-.141.673.426.09zm-12.882 1.942l.38-.211-.256-.461-.404.339.28.333zm-11.38-4.657l.433-.041-.033-.352-.352-.04-.047.433zm-2.544-.799l.208-.382-.496-.27-.134.55.422.102zm-3.434-7.761l-.208.382.497.27.134-.55-.423-.102zm13.472-.12l-.421.11.344 1.306.483-1.26-.406-.156zm12.754-.526l-.392.189.501 1.038.31-1.11-.419-.117zm21.32-.695l-.41.144.178.51.46-.283-.228-.37zm-10.55 15.322c3.782 0 7.142-1.808 9.262-4.605l-.694-.526a10.727 10.727 0 01-8.569 4.261v.87zm-7.02-2.36a11.565 11.565 0 007.02 2.36v-.87c-2.44 0-4.69-.812-6.493-2.182l-.526.693zm-6.538 5.612a7.386 7.386 0 007.228-5.869l-.852-.178a6.516 6.516 0 01-6.377 5.177v.87zm-6.46-3.805a7.382 7.382 0 006.46 3.805v-.87a6.512 6.512 0 01-5.7-3.357l-.76.422zm-4.083 1.846c1.805 0 3.46-.648 4.742-1.724l-.559-.666a6.486 6.486 0 01-4.182 1.52v.87zm-7.35-6.672a7.385 7.385 0 007.35 6.672v-.87a6.515 6.515 0 01-6.483-5.885l-.867.083zm-2.319-.459c.82.447 1.734.742 2.705.85l.095-.865a6.469 6.469 0 01-2.384-.749l-.416.764zm-6.543 5.348a7.387 7.387 0 007.174-5.626l-.845-.207a6.517 6.517 0 01-6.329 4.963v.87zm-7.384-7.384a7.384 7.384 0 007.384 7.384v-.87a6.514 6.514 0 01-6.514-6.514h-.87zm7.384-7.384a7.384 7.384 0 00-7.384 7.384h.87a6.514 6.514 0 016.514-6.514v-.87zm3.525.895a7.353 7.353 0 00-3.525-.895v.87c1.127 0 2.186.286 3.11.789l.415-.764zm6.543-5.348a7.387 7.387 0 00-7.173 5.626l.845.207a6.517 6.517 0 016.328-4.963v-.87zm7.141 5.5a7.387 7.387 0 00-7.14-5.5v.87a6.517 6.517 0 016.299 4.85l.841-.22zm6.07-4.787a7.386 7.386 0 00-6.896 4.741l.812.312a6.516 6.516 0 016.085-4.183v-.87zm6.656 4.182a7.384 7.384 0 00-6.655-4.183v.87A6.514 6.514 0 0156 79.129l.784-.377zm10.377-8.413c-5.33 0-9.822 3.59-11.188 8.485l.838.234c1.264-4.528 5.42-7.85 10.35-7.85v-.87zM78.124 78.1c-1.589-4.521-5.896-7.763-10.962-7.763v.87c4.685 0 8.67 2.998 10.14 7.181l.822-.288zm-.183.515c.99-.61 2.157-.96 3.407-.96v-.87a7.352 7.352 0 00-3.863 1.089l.456.74zm3.407-.96a6.514 6.514 0 016.514 6.513h.87a7.384 7.384 0 00-7.384-7.384v.87zm6.514 6.513a6.514 6.514 0 01-6.514 6.514v.87a7.384 7.384 0 007.383-7.384h-.87zm-6.514 6.514a6.498 6.498 0 01-4.94-2.268l-.66.568a7.369 7.369 0 005.6 2.57v-.87z"
      fill="#000"
      mask="url(#b)"
    />
    <Path
      d="M40.004 82.168c.535.03 1.773.553 2.45 2.406m-20.448-.928c.095-.368.505-1.148 1.382-1.323m36.991-5.51c.214-1.125 1.436-3.389 4.619-3.446m20.285 8.897c.504.281 1.387 1.274.88 2.992"
      stroke="#000"
      strokeWidth={0.435}
    />
    <Path
      d="M44.89 93.252a2.915 2.915 0 11-5.83 0 2.915 2.915 0 015.83 0z"
      fill="#FFD601"
      stroke="#000"
      strokeWidth={0.435}
    />
    <Path
      d="M72.045 94.742a2.915 2.915 0 11-5.83 0 2.915 2.915 0 015.83 0z"
      fill="#F3CC02"
      stroke="#000"
      strokeWidth={0.435}
    />
    <Path
      d="M72.768 92.048a1.71 1.71 0 11-3.42 0 1.71 1.71 0 013.42 0z"
      fill="#F3CC02"
      stroke="#000"
      strokeWidth={0.435}
    />
    <Path
      d="M39.844 85.706c4.556 1.366 5.911 5.911 6.02 8.013l1.736-1.29.727 1.29.767.768.868.687.889.464 1.413.384 1.393.141 1.857-.262 1.313-.525 1.271-.889 1.131-1.433.727-1.393.267-1.347 1.136 1.056 1.423.64 1.46.54 2.427.497.34-.357 1.125-.68 1.196-.124.197-.516.393-.681.964-.375.93.197.944.859 1.107-.681 1.213-1.17.957-1.299.767.979 1.383.915 1.191.575 2.065.298 1.617-.298 1.553-.575 1.724-1.362.937-1.255.617-2.065.149-2.043-.532-1.936-.788-1.234-1.447-1.533-2.234-1-2.618-.213-2.234.681-.66.704c-.327-2.793-2.862-8.262-10.39-7.791-7.526.47-10.24 6.267-10.656 9.107-1.275-4.119-4.837-5.008-6.458-4.937-4.784.765-6.283 4.071-6.435 5.629-.716-4.035-3.498-5.695-4.8-6.02-5.889-.944-7.985 3.159-8.297 5.328.502-1.085 2.53-3.002 6.63-1.993 4.1 1.009 3.525 5.437 2.725 7.525z"
      fill="#131313"
      fillOpacity={0.15}
    />
    <Path
      d="M43.6 80.835c.688-2.708 3.011-5.635 6.88-5.392-1.151.141-4.177 1.461-6.88 5.392zM47.432 90.695c-.3-1.806.202-5.567 4.621-6.162-1.407.515-4.301 2.468-4.62 6.162z"
      fill="#FFE601"
    />
    <Path
      opacity={0.5}
      d="M32.86 146.225l-4.972 1.057-2.44.936 3.559 1.12-1.119 3.168L149.3 155.56l36.788-11.291-122.968-1.948-30.258 3.904z"
      fill="url(#paint0_linear_315_18830)"
      fillOpacity={0.2}
    />
    <Path
      d="M28.748 147.776l.002.089-.045.117-.032.049c-.226.276-.9.464-1.665.442-.775-.023-1.395-.254-1.534-.546v-.002l-.026-.124v-.002l.164-.239.148-.184.084-.137c.242-.432.234-19.259.343-22.011.01-.211.016-.423.022-.636.018-.593.032-1.194.048-1.796a36.136 36.136 0 01.135-2.246c.015-.181.036-.362.061-.544.02-.146.036-.29.063-.434.02-.145.041-.289.07-.431.023-.143.053-.285.083-.429.03-.141.064-.284.098-.424v-.003c.067-.275.141-.549.232-.818l.2-.207.014-.002.06.007.139.117.05.169c.158 2.226.32 4.458.431 6.674.072 1.421.024 9.486.027 10.907.003.829.021 1.66.087 2.488.096 1.13.1 8.127.063 8.692l-.004.123-.007.105v.015l.01.232.031.173a.838.838 0 00.213.383l.073.072.154.12.097.073.06.062.03.046.014.037.007.023zM159.248 147.776l.002.089-.045.117-.032.049c-.226.276-.9.464-1.665.442-.775-.023-1.395-.254-1.534-.546v-.002l-.026-.124v-.002l.164-.239.148-.184.084-.137c.242-.432.234-19.259.343-22.011.01-.211.016-.423.022-.636.018-.593.032-1.194.048-1.796a36.347 36.347 0 01.135-2.246c.015-.181.036-.362.061-.544.019-.146.036-.29.063-.434.02-.145.041-.289.069-.431.024-.143.054-.285.084-.429.029-.141.064-.284.098-.424v-.003a9.75 9.75 0 01.232-.818l.2-.207.014-.002.061.007.138.117.05.169c.158 2.226.32 4.458.432 6.674.071 1.421.023 9.486.026 10.907.003.829.021 1.66.087 2.488.096 1.13.099 8.127.063 8.692l-.004.123-.007.105v.015l.01.232.031.173a.842.842 0 00.213.383l.073.072.154.12.097.073.059.062.032.046.013.037.007.023z"
      fill="#000"
    />
    <Path
      opacity={0.5}
      d="M156.05 148.824l-.077-.043-.08-.098-.026-.053c-.126-.333.048-1.01.449-1.663.408-.659.918-1.08 1.241-1.055l.002.001.119.04.002.001.125.261.086.221.077.141c.253.426 16.561 9.832 18.89 11.303.178.114.358.225.539.337.505.312 1.019.624 1.532.939a36.17 36.17 0 011.877 1.24c.15.104.296.212.442.325.116.09.233.176.344.271.115.091.229.18.338.276a12.697 12.697 0 01.648.584l.003.001c.204.196.405.397.592.61l.079.277-.005.013-.036.049-.171.061-.172-.04c-2.006-.977-4.02-1.953-5.994-2.964-1.267-.649-8.228-4.722-9.46-5.43a33.22 33.22 0 00-2.198-1.17c-1.027-.481-7.087-3.977-7.559-4.291l-.104-.064-.088-.06-.012-.007-.207-.107-.165-.06a.843.843 0 00-.439-.007l-.098.027-.181.074-.112.047-.083.021-.055.004-.04-.007-.023-.005z"
      fill="url(#paint1_linear_315_18830)"
      fillOpacity={0.2}
    />
    <Path
      d="M173.211 83.124H.502l3.243 1.475-3.243 8.426 6.074 1.21-6.074.816v19.81l4.712.923-4.712.584v8.079h124.663l36.09-1.557-16.771 1.557h28.727v-3.83l-3.62-.912 3.62-1.368V96.51h-11.956l11.956-1.459v-6.565l-4.977-.639 4.977-1.276v-3.447z"
      fill="#000"
    />
    <Path
      d="M176.166 81.735H3.457L6.7 83.21l-3.243 8.426 6.074 1.21-6.074.816v19.81l4.712.923-4.712.584v8.079H128.12l36.09-1.558-16.771 1.558h28.727v-3.83l-3.62-.912 3.62-1.368V95.121H164.21l11.956-1.459v-6.566l-4.977-.638 4.977-1.277v-3.446z"
      fill="#FFD645"
      stroke="#000"
      strokeWidth={0.439126}
    />
    <Path
      d="M20.293 151.452c-2.475.666-4.778-.278-5.62-.834l7.447-2.231c.727.963 1.956 2.958 1.06 3.241-.895.283-2.298 0-2.887-.176zM26.437 150.249c-.41.489-1.996 1.051-2.737 1.271l-.538-3.837h12.221l-.61 3.299c-.88.098-1.72-.643-2.03-1.026-1.231.919-2.696.806-3.275.635-.977.372-2.428-.073-3.03-.342z"
      fill="#60311C"
    />
    <Mask id="c" fill="#fff">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.48 150.388a4.352 4.352 0 11-.864-6.931 5.1 5.1 0 018.302-2.774 5.1 5.1 0 016.679 3.653 3.547 3.547 0 11-1.732 5.091 5.08 5.08 0 01-3.236 1.158 5.074 5.074 0 01-3.29-1.205 3.465 3.465 0 01-5.86 1.008z"
      />
    </Mask>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20.48 150.388a4.352 4.352 0 11-.864-6.931 5.1 5.1 0 018.302-2.774 5.1 5.1 0 016.679 3.653 3.547 3.547 0 11-1.732 5.091 5.08 5.08 0 01-3.236 1.158 5.074 5.074 0 01-3.29-1.205 3.465 3.465 0 01-5.86 1.008z"
      fill="#F3CC02"
    />
    <Path
      d="M20.48 150.388l.364-.313-.33-.385-.367.351.332.347zm-.864-6.931l-.238.418.568.322.14-.638-.47-.102zm8.302-2.774l-.314.364.212.183.263-.094-.161-.453zm6.679 3.653l-.469.108.127.548.521-.21-.18-.446zm-1.733 5.091l.415-.245-.286-.484-.434.357.306.372zm-6.525-.047l.31-.367-.516-.436-.243.63.448.173zm-6.192.661a3.86 3.86 0 01-2.676 1.074v.962a4.819 4.819 0 003.34-1.341l-.664-.695zm-2.676 1.074a3.87 3.87 0 01-3.87-3.871h-.963a4.833 4.833 0 004.833 4.833v-.962zm-3.87-3.871a3.87 3.87 0 013.87-3.871v-.962a4.833 4.833 0 00-4.833 4.833h.962zm3.87-3.871c.694 0 1.345.183 1.907.502l.475-.837a4.816 4.816 0 00-2.382-.627v.962zm2.614.186a4.619 4.619 0 014.511-3.626v-.962a5.581 5.581 0 00-5.45 4.383l.94.205zm4.511-3.626c1.15 0 2.2.42 3.008 1.114l.627-.729a5.56 5.56 0 00-3.635-1.347v.962zm3.483 1.203a4.594 4.594 0 011.55-.267v-.962c-.656 0-1.287.114-1.873.323l.323.906zm1.55-.267a4.62 4.62 0 014.5 3.575l.936-.216a5.581 5.581 0 00-5.436-4.321v.962zm5.147 3.913c.354-.143.74-.221 1.146-.221v-.962a4.01 4.01 0 00-1.505.291l.36.892zm1.146-.221a3.066 3.066 0 013.066 3.066h.961a4.028 4.028 0 00-4.027-4.028v.962zm3.066 3.066a3.066 3.066 0 01-3.066 3.066v.962a4.028 4.028 0 004.027-4.028h-.962zm-3.066 3.066a3.065 3.065 0 01-2.643-1.511l-.829.489a4.027 4.027 0 003.472 1.984v-.962zm-3.363-1.638a4.6 4.6 0 01-2.93 1.049v.962a5.557 5.557 0 003.54-1.268l-.61-.743zm-2.93 1.049a4.595 4.595 0 01-2.98-1.091l-.621.735a5.558 5.558 0 003.601 1.318v-.962zm-3.74-.897a2.983 2.983 0 01-2.782 1.908v.962a3.946 3.946 0 003.68-2.523l-.897-.347zm-2.782 1.908a2.976 2.976 0 01-2.263-1.04l-.73.627a3.936 3.936 0 002.993 1.375v-.962z"
      fill="#000"
      mask="url(#c)"
    />
    <Path
      d="M20.053 148.475c-.137-.821.091-2.531 2.1-2.802-.639.234-1.955 1.122-2.1 2.802zM25.67 144.235c-.137-.821.092-2.531 2.101-2.802-.64.234-1.956 1.122-2.101 2.802z"
      fill="#FFE601"
    />
    <Path
      d="M165.251 151.526c2.475.667 4.778-.278 5.62-.834l-7.447-2.231c-.727.963-1.956 2.959-1.061 3.241.896.283 2.299.001 2.888-.176zM159.107 150.324c.41.489 1.996 1.051 2.737 1.271l.538-3.838H150.16l.612 3.3c.879.098 1.719-.644 2.028-1.027 1.232.919 2.697.807 3.276.636.977.371 2.428-.073 3.031-.342z"
      fill="#60311C"
    />
    <Mask id="d" fill="#fff">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M165.064 150.462a4.351 4.351 0 10.863-6.931 5.1 5.1 0 00-8.302-2.774 5.1 5.1 0 00-6.679 3.653 3.547 3.547 0 101.732 5.091 5.082 5.082 0 003.236 1.158 5.077 5.077 0 003.29-1.204 3.465 3.465 0 005.86 1.007z"
      />
    </Mask>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M165.064 150.462a4.351 4.351 0 10.863-6.931 5.1 5.1 0 00-8.302-2.774 5.1 5.1 0 00-6.679 3.653 3.547 3.547 0 101.732 5.091 5.082 5.082 0 003.236 1.158 5.077 5.077 0 003.29-1.204 3.465 3.465 0 005.86 1.007z"
      fill="#F3CC02"
    />
    <Path
      d="M165.064 150.462l-.365-.313.331-.385.366.351-.332.347zm.863-6.931l.238.418-.568.322-.139-.637.469-.103zm-8.302-2.774l.314.365-.212.182-.263-.094.161-.453zm-6.679 3.653l.469.108-.127.548-.522-.21.18-.446zm1.732 5.091l-.414-.245.286-.484.434.357-.306.372zm6.526-.046l-.31-.368.516-.436.243.63-.449.174zm6.192.66a3.856 3.856 0 002.676 1.074v.962a4.818 4.818 0 01-3.341-1.341l.665-.695zm2.676 1.074a3.87 3.87 0 003.871-3.871h.962a4.833 4.833 0 01-4.833 4.833v-.962zm3.871-3.871a3.87 3.87 0 00-3.871-3.871v-.961a4.832 4.832 0 014.833 4.832h-.962zm-3.871-3.871c-.694 0-1.345.183-1.907.502l-.475-.836a4.803 4.803 0 012.382-.627v.961zm-2.614.187a4.62 4.62 0 00-4.511-3.627v-.962a5.581 5.581 0 015.45 4.383l-.939.206zm-4.511-3.627c-1.15 0-2.2.42-3.008 1.115l-.627-.73a5.56 5.56 0 013.635-1.347v.962zm-3.483 1.203a4.621 4.621 0 00-1.55-.266v-.962c.656 0 1.287.113 1.873.322l-.323.906zm-1.55-.266a4.618 4.618 0 00-4.499 3.574l-.937-.216a5.58 5.58 0 015.436-4.32v.962zm-5.148 3.912a3.06 3.06 0 00-1.145-.221v-.962c.531 0 1.039.103 1.505.291l-.36.892zm-1.145-.221a3.066 3.066 0 00-3.066 3.066h-.961a4.028 4.028 0 014.027-4.028v.962zm-3.066 3.066a3.066 3.066 0 003.066 3.066v.962a4.027 4.027 0 01-4.027-4.028h.961zm3.066 3.066a3.063 3.063 0 002.643-1.511l.829.489a4.027 4.027 0 01-3.472 1.984v-.962zm3.363-1.638a4.593 4.593 0 002.93 1.049v.962a5.557 5.557 0 01-3.541-1.268l.611-.743zm2.93 1.049c1.136 0 2.175-.41 2.98-1.091l.621.735a5.557 5.557 0 01-3.601 1.318v-.962zm3.739-.897a2.984 2.984 0 002.783 1.908v.962a3.946 3.946 0 01-3.68-2.523l.897-.347zm2.783 1.908c.905 0 1.715-.403 2.263-1.04l.729.627a3.934 3.934 0 01-2.992 1.375v-.962z"
      fill="#000"
      mask="url(#d)"
    />
    <Path
      d="M165.491 148.55c.137-.822-.091-2.531-2.101-2.802.64.234 1.956 1.122 2.101 2.802zM159.874 144.308c.137-.821-.092-2.531-2.101-2.801.64.234 1.956 1.122 2.101 2.801z"
      fill="#FFE601"
    />
    <Path
      d="M146.395 105.069l2.784-2.784-2.784-2.784M138.043 102.286h11.06"
      stroke="#131313"
      strokeWidth={1.305}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M146.743 93.52c4.807 0 8.7 3.263 8.7 8.7 0 5.438-3.893 8.7-8.7 8.7"
      stroke="#131313"
      strokeWidth={1.305}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Rect
      x={1.32953}
      y={42.9057}
      width={32.0744}
      height={32.0744}
      rx={16.0372}
      fill="#AEDE67"
      stroke="#000"
      strokeWidth={0.869999}
    />
    <Rect x={4.61914} y={46.1953} width={25.495} height={25.4951} rx={12.7475} fill="#F6F6F6" />
    <Rect x={8.66699} y={50.2432} width={17.4} height={17.4} rx={8.69998} fill="#AEDE67" />
    <Path
      d="M17.575 67.735c4.785 0 8.7-3.915 8.7-8.7 0-4.785-3.915-8.7-8.7-8.7-4.785 0-8.7 3.915-8.7 8.7 0 4.785 3.915 8.7 8.7 8.7z"
      stroke="#AEDE67"
      strokeWidth={1.305}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M13.877 59.035l2.462 2.462 4.933-4.924"
      stroke="#131313"
      strokeWidth={1.305}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M24.853 97.581v1.133H22.6v7.332H21.21v-7.332h-2.265v-1.133h5.907zm.943 5.079c0-.674.138-1.27.415-1.79a3.092 3.092 0 012.752-1.644c.528 0 .987.105 1.377.316.397.203.714.459.95.768v-.975h1.4v6.711h-1.4v-.998c-.236.316-.557.58-.963.791a2.967 2.967 0 01-1.388.317 2.984 2.984 0 01-1.584-.438 3.26 3.26 0 01-1.145-1.243c-.276-.536-.414-1.141-.414-1.815zm5.494.025c0-.463-.098-.865-.293-1.206a1.972 1.972 0 00-.743-.78 1.966 1.966 0 00-.998-.268c-.358 0-.69.09-1 .268-.308.171-.56.427-.754.768-.187.333-.28.731-.28 1.193 0 .463.093.869.28 1.218.195.35.446.617.755.804a2 2 0 001.997 0c.309-.178.556-.438.743-.779.195-.349.293-.755.293-1.218zm5.88.012l3.093 3.349h-1.876l-2.484-2.886v2.886h-1.389v-9.013h1.389v5.238l2.436-2.936h1.924l-3.094 3.362zm10.24-.171c0 .252-.017.479-.05.682h-5.127c.04.536.24.967.596 1.292.358.324.796.487 1.316.487.747 0 1.275-.313 1.583-.938h1.498a3.043 3.043 0 01-1.108 1.522c-.528.39-1.186.585-1.973.585a3.503 3.503 0 01-1.73-.426 3.196 3.196 0 01-1.193-1.218c-.285-.528-.427-1.137-.427-1.827s.138-1.295.414-1.815a2.995 2.995 0 011.182-1.218c.512-.284 1.096-.426 1.754-.426.633 0 1.198.138 1.693.414a2.92 2.92 0 011.157 1.169c.276.495.414 1.068.414 1.717zm-1.45-.438c-.008-.512-.191-.922-.548-1.23-.358-.309-.8-.463-1.328-.463-.48 0-.89.154-1.23.463-.341.3-.544.71-.61 1.23h3.716zm5.517.572c0-.674.138-1.27.414-1.79a3.09 3.09 0 012.753-1.644c.527 0 .986.105 1.376.316.398.203.714.459.95.768v-.975h1.4v6.711h-1.4v-.998c-.236.316-.556.58-.962.791a2.967 2.967 0 01-1.389.317 2.984 2.984 0 01-1.583-.438 3.259 3.259 0 01-1.145-1.243c-.276-.536-.414-1.141-.414-1.815zm5.493.025c0-.463-.098-.865-.292-1.206a1.97 1.97 0 00-.743-.78 1.966 1.966 0 00-1-.268c-.357 0-.69.09-.998.268-.308.171-.56.427-.755.768-.187.333-.28.731-.28 1.193 0 .463.093.869.28 1.218.195.35.447.617.755.804a2 2 0 001.998 0c.308-.178.556-.438.742-.779.195-.349.293-.755.293-1.218zm8.824 3.471a3.483 3.483 0 01-1.425-.28 2.575 2.575 0 01-.986-.78 1.972 1.972 0 01-.39-1.108h1.437c.024.284.158.524.402.719.252.186.564.28.938.28.39 0 .69-.073.901-.22.22-.154.33-.349.33-.584 0-.252-.123-.439-.366-.56-.236-.122-.613-.256-1.133-.402a10.97 10.97 0 01-1.23-.402 2.21 2.21 0 01-.829-.597c-.227-.268-.34-.621-.34-1.06 0-.357.105-.682.316-.974.211-.3.512-.536.901-.707.398-.17.853-.255 1.365-.255.763 0 1.376.195 1.839.584.47.382.722.906.755 1.571H66.89a.987.987 0 00-.365-.718c-.22-.179-.516-.268-.89-.268-.365 0-.645.069-.84.207a.641.641 0 00-.292.548c0 .179.065.329.195.451.13.121.288.219.475.292.187.065.463.15.828.256.487.13.885.264 1.194.402.317.13.589.325.816.584.227.26.345.605.353 1.036 0 .381-.105.722-.317 1.023-.21.3-.511.536-.9.706-.382.171-.833.256-1.353.256zm10.221-3.63c0 .252-.016.479-.048.682h-5.128c.04.536.24.967.597 1.292.357.324.795.487 1.315.487.747 0 1.275-.313 1.584-.938h1.498a3.043 3.043 0 01-1.109 1.522c-.527.39-1.185.585-1.973.585a3.503 3.503 0 01-1.73-.426 3.196 3.196 0 01-1.193-1.218c-.284-.528-.426-1.137-.426-1.827s.138-1.295.414-1.815a2.995 2.995 0 011.181-1.218c.512-.284 1.097-.426 1.754-.426.634 0 1.198.138 1.693.414a2.92 2.92 0 011.157 1.169c.276.495.414 1.068.414 1.717zm-1.449-.438c-.008-.512-.19-.922-.548-1.23-.357-.309-.8-.463-1.328-.463-.479 0-.889.154-1.23.463-.34.3-.544.71-.609 1.23h3.715zm4.204-5.055v9.013h-1.388v-9.013h1.388zm4.637 3.435h-1.242v5.578h-1.401v-5.578h-.792v-1.133h.792v-.475c0-.771.203-1.332.609-1.68.414-.358 1.06-.537 1.936-.537V97.8c-.422 0-.718.082-.889.244-.17.154-.255.426-.255.816v.475h1.242v1.133zm1.937-2.022a.86.86 0 01-.633-.256.86.86 0 01-.256-.633.86.86 0 01.256-.633.86.86 0 01.633-.256c.244 0 .45.085.621.256a.86.86 0 01.256.633.86.86 0 01-.256.633.846.846 0 01-.621.256zm.682.89v6.71h-1.388v-6.71h1.388zm7.974 3.19c0 .252-.016.479-.049.682h-5.127c.04.536.239.967.596 1.292.358.324.796.487 1.316.487.747 0 1.275-.313 1.583-.938h1.498a3.043 3.043 0 01-1.108 1.522c-.528.39-1.186.585-1.973.585a3.502 3.502 0 01-1.73-.426 3.195 3.195 0 01-1.194-1.218c-.284-.528-.426-1.137-.426-1.827s.138-1.295.414-1.815a2.996 2.996 0 011.182-1.218c.511-.284 1.096-.426 1.754-.426.633 0 1.197.138 1.693.414.495.276.88.666 1.157 1.169.276.495.414 1.068.414 1.717zm-1.45-.438c-.008-.512-.19-.922-.548-1.23-.357-.309-.8-.463-1.327-.463-.48 0-.89.154-1.23.463-.341.3-.544.71-.61 1.23h3.716z"
      fill="#131313"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_315_18830"
        x1={27.7688}
        y1={144.56}
        x2={78.1955}
        y2={174.152}
        gradientUnits="userSpaceOnUse"
      >
        <Stop />
        <Stop offset={1} stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="paint1_linear_315_18830"
        x1={158.463}
        y1={146.516}
        x2={157.157}
        y2={148.96}
        gradientUnits="userSpaceOnUse"
      >
        <Stop />
        <Stop offset={1} stopOpacity={0} />
      </LinearGradient>
    </Defs>
  </Svg>
);

export default TakeSelfieIcon;
