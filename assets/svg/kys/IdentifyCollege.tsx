import * as React from 'react';
import Svg, { Mask, Path, G, Rect, Defs, LinearGradient, Stop } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

const IdentifyCollege = (props) => (
  <Svg
    width={238}
    height={137}
    viewBox="0 0 238 137"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Mask id="a" fill="#fff">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31.684.963c14.647 0 26.521 11.874 26.521 26.52V81.18h1.099l-1.099.113v.368h-3.563L8.266 86.443l-3.098-4.782h-.004V27.484C5.164 12.837 17.038.963 31.684.963z"
      />
    </Mask>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M31.684.963c14.647 0 26.521 11.874 26.521 26.52V81.18h1.099l-1.099.113v.368h-3.563L8.266 86.443l-3.098-4.782h-.004V27.484C5.164 12.837 17.038.963 31.684.963z"
      fill="#EFEFEF"
    />
    <Path
      d="M58.205 81.18v.434h-.434v-.434h.434zm1.099 0v-.434l.044.866-.044-.432zm-1.099.113h-.434v-.391l.39-.04.044.431zm0 .368h.434v.434h-.434v-.434zm-3.563 0l-.045-.432.022-.002h.023v.434zM8.266 86.443l.044.432-.264.027-.145-.223.365-.236zm-3.098-4.782v-.434h.236l.128.198-.364.236zm-.004 0v.434H4.73v-.434h.434zM57.77 27.484c0-14.408-11.68-26.087-26.087-26.087V.529c14.887 0 26.955 12.068 26.955 26.955h-.868zm0 53.696V27.484h.868V81.18h-.868zm.434-.434h1.099v.868h-1.099v-.868zm1.143.866l-1.098.113-.09-.863 1.1-.113.088.863zm-1.577.049v-.368h.868v.368h-.868zm-3.13-.434h3.564v.868h-3.563v-.868zm.045.866L8.31 86.875l-.089-.864 46.376-4.782.089.864zM7.901 86.679l-3.097-4.782.728-.472 3.098 4.782-.729.472zm-2.737-5.452h.004v.868h-.004v-.868zm.434-53.743V81.66H4.73V27.484h.868zM31.684 1.397c-14.407 0-26.086 11.68-26.086 26.087H4.73C4.73 12.597 16.798.529 31.684.529v.868z"
      fill="#000"
      mask="url(#a)"
    />
    <Path
      d="M8.646 30.854C8.646 15.873 20.79 3.73 35.77 3.73c14.979 0 27.122 12.143 27.122 27.122v55.352H8.646V30.853z"
      fill="#FCBA00"
      stroke="#000"
      strokeWidth={0.478256}
    />
    <G filter="url(#filter0_i_315_18705)">
      <Path
        d="M10.402 31.555c0-14.01 11.357-25.366 25.365-25.366 14.01 0 25.366 11.357 25.366 25.366V84.47h-50.73V31.555z"
        fill="#EFEFEF"
      />
    </G>
    <Path
      d="M10.624 31.555c0-13.887 11.257-25.144 25.143-25.144 13.887 0 25.144 11.257 25.144 25.144v52.694H10.624V31.555z"
      stroke="#000"
      strokeWidth={0.443366}
    />
    <Path
      d="M25.076 44.562c0-2.802.47-4.99 1.41-6.561.956-1.588 2.592-2.381 4.909-2.381 2.316 0 3.944.793 4.884 2.381.956 1.572 1.434 3.759 1.434 6.561 0 2.835-.478 5.055-1.434 6.659-.94 1.587-2.568 2.381-4.885 2.381-2.316 0-3.952-.794-4.908-2.381-.94-1.604-1.41-3.824-1.41-6.659zm9.915 0c0-1.312-.09-2.422-.267-3.329-.162-.907-.502-1.644-1.02-2.211-.52-.584-1.289-.875-2.31-.875-1.02 0-1.79.291-2.308.875-.518.567-.867 1.304-1.045 2.211-.162.907-.243 2.017-.243 3.33 0 1.36.08 2.502.243 3.426.162.923.502 1.668 1.02 2.235.535.568 1.313.851 2.334.851 1.02 0 1.79-.284 2.308-.85.535-.568.883-1.313 1.045-2.236.162-.924.243-2.066.243-3.427zm5.288-6.1v-2.527h5.055v17.716H42.54V38.463h-2.26z"
      fill="#000"
    />
    <Path
      d="M17.199 74.906c-4.145-.025-5.991 3.127-6.446 5.337 2.614 2.148 3.048 5.404 2.938 6.763.608.906 2.215 1.062 2.942 1.027 2.559 9.076 8.837 5.937 11.384 4.572.956 3.14 10.464 7.279 12.327-2.323 3.73 2.769 5.13 2.636 8.76 2.542 3.629-.094 6.283-2.985 7.156-4.419 6.88 6.273 11.23 0 12.03-3.735-.939-8.165-7.634-7.835-10.636-5.78-.806-2.58-4.008-7.704-10.375-7.569-6.366.135-10.267 4.678-10.569 8.793-.703-2.151-3.126-4.847-6.671-4.62-3.546.225-5.579 2.866-6.207 5.224-.283-2.615-2.49-5.786-6.633-5.812z"
      fill="#131313"
      fillOpacity={0.05}
    />
    <Mask id="b" fill="#fff">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M56.25 88.836a11.136 11.136 0 01-8.894 4.422c-2.533 0-4.869-.844-6.741-2.266a6.935 6.935 0 01-12.85 1.94 6.933 6.933 0 01-11.35-4.646 6.884 6.884 0 01-2.54-.797 6.932 6.932 0 11-3.427-7.745 6.935 6.935 0 0113.44-.116 6.935 6.935 0 0112.724-.528c1.313-4.7 5.625-8.147 10.744-8.147 4.863 0 9 3.113 10.525 7.455a6.932 6.932 0 11-1.631 10.429z"
      />
    </Mask>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M56.25 88.836a11.136 11.136 0 01-8.894 4.422c-2.533 0-4.869-.844-6.741-2.266a6.935 6.935 0 01-12.85 1.94 6.933 6.933 0 01-11.35-4.646 6.884 6.884 0 01-2.54-.797 6.932 6.932 0 11-3.427-7.745 6.935 6.935 0 0113.44-.116 6.935 6.935 0 0112.724-.528c1.313-4.7 5.625-8.147 10.744-8.147 4.863 0 9 3.113 10.525 7.455a6.932 6.932 0 11-1.631 10.429z"
      fill="#FFD601"
    />
    <Path
      d="M56.25 88.836l.328-.283-.35-.407-.324.428.346.262zm-15.635 2.156l.262-.346-.547-.415-.14.672.425.089zm-12.85 1.94l.38-.211-.256-.46-.403.338.279.332zm-11.35-4.647l.433-.041-.034-.352-.35-.038-.048.431zm-2.54-.796l.208-.382-.495-.269-.134.548.421.103zm-3.426-7.745l-.208.381.495.27.134-.548-.421-.103zm13.439-.116l-.42.11.343 1.305.482-1.26-.405-.155zm12.724-.528l-.39.188.5 1.037.308-1.108-.418-.117zm21.269-.692l-.41.144.179.507.458-.282-.227-.37zM47.356 93.692a11.57 11.57 0 009.24-4.594l-.692-.524a10.701 10.701 0 01-8.548 4.25v.868zm-7.004-2.355a11.538 11.538 0 007.004 2.355v-.867a10.67 10.67 0 01-6.479-2.179l-.525.691zm-6.523 5.599a7.369 7.369 0 007.21-5.856l-.849-.177a6.5 6.5 0 01-6.361 5.165v.868zm-6.444-3.794a7.364 7.364 0 006.444 3.794v-.868a6.496 6.496 0 01-5.685-3.347l-.759.421zm-4.07 1.84c1.8 0 3.45-.646 4.728-1.718l-.557-.665a6.47 6.47 0 01-4.17 1.514v.868zm-7.331-6.656a7.367 7.367 0 007.332 6.655v-.868a6.499 6.499 0 01-6.468-5.87l-.864.084zm-2.316-.456a7.32 7.32 0 002.7.846l.095-.862a6.452 6.452 0 01-2.38-.747l-.415.763zm-6.527 5.334a7.369 7.369 0 007.156-5.612l-.843-.206a6.5 6.5 0 01-6.313 4.95v.868zm-7.366-7.366a7.366 7.366 0 007.366 7.366v-.868a6.498 6.498 0 01-6.498-6.498h-.868zm7.366-7.366a7.366 7.366 0 00-7.366 7.366h.868A6.498 6.498 0 017.14 79.34v-.868zm3.515.89a7.335 7.335 0 00-3.515-.89v.868c1.124 0 2.18.284 3.1.785l.415-.762zm6.527-5.333a7.369 7.369 0 00-7.156 5.612l.843.206a6.501 6.501 0 016.313-4.95v-.868zm7.125 5.489a7.37 7.37 0 00-7.125-5.49v.869a6.501 6.501 0 016.285 4.841l.84-.22zm6.056-4.778a7.369 7.369 0 00-6.881 4.733l.81.31a6.5 6.5 0 016.071-4.176v-.867zm6.64 4.172a7.367 7.367 0 00-6.64-4.172v.867a6.499 6.499 0 015.858 3.681l.781-.376zm10.352-8.393c-5.318 0-9.799 3.582-11.162 8.464l.836.234c1.261-4.517 5.407-7.83 10.326-7.83v-.868zm10.934 7.745c-1.584-4.51-5.88-7.745-10.934-7.745v.868c4.673 0 8.65 2.99 10.116 7.165l.818-.288zm-.182.513a6.465 6.465 0 013.399-.958v-.868a7.334 7.334 0 00-3.853 1.087l.454.74zm3.399-.958a6.498 6.498 0 016.498 6.498h.868a7.366 7.366 0 00-7.367-7.366v.868zm6.498 6.498a6.498 6.498 0 01-6.498 6.498v.868a7.366 7.366 0 007.366-7.366h-.868zm-6.498 6.498a6.483 6.483 0 01-4.928-2.262l-.658.566a7.35 7.35 0 005.586 2.564v-.868z"
      fill="#000"
      mask="url(#b)"
    />
    <Path
      d="M20.262 82.32c.534.03 1.77.552 2.445 2.4m-20.4-.925c.096-.368.504-1.145 1.38-1.32m36.901-5.496c.213-1.123 1.432-3.381 4.608-3.438m20.235 8.875c.504.28 1.384 1.271.878 2.985"
      stroke="#000"
      strokeWidth={0.433947}
    />
    <Path
      d="M25.135 93.378a2.908 2.908 0 11-5.815 0 2.908 2.908 0 015.815 0z"
      fill="#FFD601"
      stroke="#000"
      strokeWidth={0.433947}
    />
    <Path
      d="M52.225 94.864a2.908 2.908 0 11-5.815 0 2.908 2.908 0 015.815 0z"
      fill="#F3CC02"
      stroke="#000"
      strokeWidth={0.433947}
    />
    <Path
      d="M52.947 92.177a1.706 1.706 0 11-3.413 0 1.706 1.706 0 013.413 0z"
      fill="#F3CC02"
      stroke="#000"
      strokeWidth={0.433947}
    />
    <Path
      d="M20.104 85.85c4.544 1.363 5.896 5.897 6.005 7.994l1.732-1.288.725 1.288.765.766.866.685.887.463 1.41.383 1.389.14 1.853-.261 1.309-.524 1.269-.886 1.128-1.43.725-1.39.267-1.343 1.132 1.053 1.42.64 1.457.538 2.42.495.34-.356 1.122-.677 1.194-.125.196-.515.392-.68.962-.373.926.196.943.857 1.104-.68 1.21-1.167.956-1.295.764.977 1.38.913 1.188.573 2.06.297 1.613-.297 1.55-.573 1.72-1.36.933-1.252.616-2.059.149-2.038-.531-1.932-.786-1.23-1.443-1.53-2.23-.997-2.61-.212-2.23.679-.658.702c-.326-2.787-2.855-8.242-10.364-7.773-7.508.47-10.215 6.253-10.63 9.086-1.273-4.11-4.826-4.996-6.443-4.926-4.772.764-6.268 4.062-6.42 5.616-.713-4.026-3.489-5.681-4.787-6.006-5.875-.941-7.966 3.152-8.277 5.316.5-1.082 2.523-2.995 6.613-1.988 4.09 1.006 3.517 5.423 2.719 7.506z"
      fill="#131313"
      fillOpacity={0.15}
    />
    <Path
      d="M23.852 80.992c.686-2.703 3.004-5.623 6.864-5.38-1.15.141-4.168 1.458-6.864 5.38zM27.672 90.827c-.3-1.801.201-5.553 4.61-6.146-1.404.513-4.291 2.462-4.61 6.146z"
      fill="#FFE601"
    />
    <Path
      opacity={0.5}
      d="M84.953 118.343l-4.96 1.055-2.434.933 3.55 1.118-1.116 3.159 121.117 3.048 36.699-11.264-122.671-1.943-30.185 3.894z"
      fill="url(#paint0_linear_315_18705)"
      fillOpacity={0.2}
    />
    <Path
      d="M80.85 119.89l.002.089-.044.117-.033.049c-.225.275-.897.462-1.66.441-.773-.023-1.392-.254-1.531-.545v-.002l-.025-.123v-.003l.163-.238.148-.184.083-.136c.242-.431.234-19.212.343-21.958.01-.21.016-.422.022-.634.018-.592.031-1.192.047-1.792a36.079 36.079 0 01.135-2.24c.015-.181.036-.362.061-.544.02-.145.036-.289.062-.432a8.08 8.08 0 01.07-.43 13.524 13.524 0 01.18-.851v-.004c.068-.273.142-.547.232-.815l.2-.207.014-.002.06.007.138.117.05.169c.158 2.22.32 4.447.431 6.657.071 1.418.024 9.463.027 10.881.003.827.02 1.656.086 2.482.096 1.127.099 8.107.063 8.671l-.004.122-.007.106v.014l.01.232.031.173a.841.841 0 00.212.382l.073.071.154.12.096.073.06.062.031.045.013.038.008.022zM211.035 119.89l.002.089-.045.117-.032.049c-.226.275-.898.462-1.661.441-.773-.023-1.391-.254-1.531-.545v-.002l-.025-.123v-.003l.163-.238.149-.184.083-.136c.241-.431.234-19.212.342-21.958.011-.21.016-.422.022-.634.018-.592.032-1.192.048-1.792a36.184 36.184 0 01.135-2.24c.015-.181.035-.362.061-.544.019-.145.035-.289.062-.432.021-.145.041-.288.07-.43.023-.143.053-.285.083-.428.029-.14.063-.284.097-.423v-.004c.067-.273.141-.547.232-.815l.2-.207.013-.002.061.007.138.117.051.169c.157 2.22.318 4.447.43 6.657.071 1.418.023 9.463.026 10.881.003.827.021 1.656.086 2.482.097 1.127.1 8.107.064 8.671l-.004.122-.008.106v.014l.011.232.031.173a.833.833 0 00.212.382l.072.071.155.12.096.073.059.062.032.045.013.038.007.022z"
      fill="#000"
    />
    <Path
      opacity={0.5}
      d="M207.846 120.936l-.078-.043-.079-.098-.026-.052c-.125-.333.048-1.008.448-1.659.407-.658.916-1.078 1.238-1.053l.002.001.119.04.002.001.125.26.085.221.076.14c.253.425 16.521 9.809 18.845 11.275.177.115.358.226.538.337.504.311 1.016.623 1.528.937a36.6 36.6 0 011.608 1.049c.09.059.179.123.265.188.149.103.295.211.44.324.116.09.233.176.343.27.116.091.229.18.338.276a14.84 14.84 0 01.647.582l.003.002c.203.194.403.395.59.608l.079.276-.005.013-.036.049-.171.061-.171-.041c-2.001-.973-4.011-1.947-5.98-2.956-1.264-.647-8.208-4.711-9.437-5.417a33.293 33.293 0 00-2.192-1.167c-1.025-.48-7.071-3.967-7.542-4.28l-.103-.065-.088-.059-.012-.007-.206-.107-.165-.059a.835.835 0 00-.437-.008l-.098.027-.181.074-.112.047-.083.02-.055.005-.039-.008-.023-.004z"
      fill="url(#paint1_linear_315_18705)"
      fillOpacity={0.2}
    />
    <Path
      d="M224.965 55.395H52.674l3.235 1.472-3.235 8.405 6.06 1.207-6.06.814v19.763l4.7.92-4.7.582v8.06h124.361l36.003-1.554-16.73 1.554h28.657v-3.82l-3.611-.91 3.611-1.365V68.75h-11.927l11.927-1.456v-6.55L220 60.108l4.965-1.274v-3.438z"
      fill="#000"
    />
    <Path
      d="M227.913 54.01H55.623l3.234 1.47-3.235 8.407 6.06 1.206-6.06.815V85.67l4.7.92-4.7.583v8.06h124.361l36.003-1.554-16.73 1.553h28.657v-3.82l-3.611-.91 3.611-1.365V67.363h-11.927l11.927-1.455v-6.55l-4.964-.637 4.964-1.274V54.01z"
      fill="#FFD645"
      stroke="#000"
      strokeWidth={0.438062}
    />
    <Path
      d="M72.417 123.557c-2.47.666-4.766-.277-5.606-.831l7.429-2.226c.725.961 1.951 2.951 1.058 3.234-.894.282-2.293 0-2.88-.177zM78.546 122.358c-.41.488-1.99 1.049-2.73 1.268l-.537-3.828h12.192l-.61 3.292c-.877.097-1.715-.643-2.023-1.025-1.23.917-2.69.805-3.268.634-.975.371-2.422-.073-3.023-.341z"
      fill="#60311C"
    />
    <Mask id="c" fill="#fff">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M72.604 122.496a4.341 4.341 0 11-.862-6.914 5.087 5.087 0 018.282-2.768 5.089 5.089 0 016.663 3.645 3.538 3.538 0 11-1.728 5.078 5.063 5.063 0 01-3.227 1.155 5.067 5.067 0 01-3.283-1.201 3.456 3.456 0 01-5.845 1.005z"
      />
    </Mask>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M72.604 122.496a4.341 4.341 0 11-.862-6.914 5.087 5.087 0 018.282-2.768 5.089 5.089 0 016.663 3.645 3.538 3.538 0 11-1.728 5.078 5.063 5.063 0 01-3.227 1.155 5.067 5.067 0 01-3.283-1.201 3.456 3.456 0 01-5.845 1.005z"
      fill="#F3CC02"
    />
    <Path
      d="M72.604 122.496l.364-.312-.33-.384-.366.35.332.346zm-.862-6.914l-.236.417.566.321.14-.636-.47-.102zm8.282-2.768l-.313.364.212.182.262-.094-.16-.452zm6.663 3.645l-.467.107.126.547.52-.209-.178-.445zm-1.728 5.078l.413-.244-.284-.483-.433.356.304.371zm-6.51-.046l.31-.366-.514-.436-.243.629.447.173zm-6.177.659a3.847 3.847 0 01-2.67 1.071v.96c1.294 0 2.468-.51 3.334-1.338l-.664-.693zm-2.67 1.071a3.861 3.861 0 01-3.86-3.861h-.96a4.821 4.821 0 004.82 4.821v-.96zm-3.86-3.861a3.862 3.862 0 013.86-3.862v-.959a4.82 4.82 0 00-4.82 4.821h.96zm3.86-3.862c.694 0 1.343.182 1.904.501l.473-.835a4.804 4.804 0 00-2.376-.625v.959zm2.61.186a4.607 4.607 0 014.499-3.617v-.96a5.568 5.568 0 00-5.437 4.372l.937.205zm4.499-3.617c1.147 0 2.194.418 3 1.111l.626-.728a5.545 5.545 0 00-3.626-1.343v.96zm3.474 1.199a4.598 4.598 0 011.547-.266v-.959c-.655 0-1.284.113-1.869.321l.322.904zm1.547-.266a4.608 4.608 0 014.488 3.566l.935-.215a5.567 5.567 0 00-5.423-4.31V113zm5.135 3.904a3.047 3.047 0 011.142-.221v-.959a3.99 3.99 0 00-1.5.29l.358.89zm1.142-.221a3.06 3.06 0 013.058 3.059h.96a4.018 4.018 0 00-4.018-4.018v.959zm3.058 3.059a3.058 3.058 0 01-3.058 3.058v.96a4.018 4.018 0 004.018-4.018h-.96zM88.01 122.8a3.057 3.057 0 01-2.637-1.507l-.826.488a4.017 4.017 0 003.463 1.979v-.96zm-3.355-1.634a4.584 4.584 0 01-2.922 1.046v.96c1.34 0 2.571-.475 3.532-1.264l-.61-.742zm-2.922 1.046a4.59 4.59 0 01-2.973-1.087l-.62.732a5.545 5.545 0 003.593 1.315v-.96zm-3.73-.894a2.976 2.976 0 01-2.776 1.903v.96a3.935 3.935 0 003.67-2.517l-.894-.346zm-2.776 1.903a2.966 2.966 0 01-2.258-1.037l-.728.625a3.927 3.927 0 002.986 1.372v-.96z"
      fill="#000"
      mask="url(#c)"
    />
    <Path
      d="M72.177 120.588c-.137-.819.091-2.525 2.096-2.795-.639.234-1.951 1.12-2.096 2.795zM77.781 116.358c-.136-.819.092-2.525 2.096-2.795-.638.234-1.95 1.119-2.096 2.795z"
      fill="#FFE601"
    />
    <Path
      d="M203.402 123.631c-2.469.665-4.766-.277-5.606-.831l7.429-2.226c.725.96 1.952 2.951 1.058 3.233-.893.283-2.293 0-2.881-.176zM209.531 122.432c-.41.488-1.991 1.048-2.731 1.268l-.536-3.828h12.191l-.609 3.291c-.878.098-1.715-.642-2.024-1.024-1.229.917-2.69.805-3.267.634-.976.371-2.423-.073-3.024-.341z"
      fill="#60311C"
    />
    <Mask id="d" fill="#fff">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M203.589 122.571a4.341 4.341 0 11-.861-6.916 5.087 5.087 0 018.282-2.768 5.088 5.088 0 016.663 3.645 3.538 3.538 0 11-1.727 5.077 5.064 5.064 0 01-3.229 1.156 5.065 5.065 0 01-3.284-1.202 3.454 3.454 0 01-5.844 1.008z"
      />
    </Mask>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M203.589 122.571a4.341 4.341 0 11-.861-6.916 5.087 5.087 0 018.282-2.768 5.088 5.088 0 016.663 3.645 3.538 3.538 0 11-1.727 5.077 5.064 5.064 0 01-3.229 1.156 5.065 5.065 0 01-3.284-1.202 3.454 3.454 0 01-5.844 1.008z"
      fill="#F3CC02"
    />
    <Path
      d="M203.589 122.571l.363-.313-.329-.384-.366.35.332.347zm-.861-6.916l-.237.417.566.322.14-.637-.469-.102zm8.282-2.768l-.313.364.211.182.263-.094-.161-.452zm6.663 3.645l-.468.108.127.548.52-.211-.179-.445zm-1.727 5.077l.413-.243-.285-.484-.433.357.305.37zm-6.513-.046l.31-.366-.515-.436-.242.629.447.173zm-6.176.661a3.85 3.85 0 01-2.669 1.07v.96a4.803 4.803 0 003.332-1.337l-.663-.693zm-2.669 1.07a3.86 3.86 0 01-3.861-3.861h-.96a4.821 4.821 0 004.821 4.821v-.96zm-3.861-3.861a3.86 3.86 0 013.861-3.861v-.96a4.822 4.822 0 00-4.821 4.821h.96zm3.861-3.861c.693 0 1.342.182 1.903.5l.474-.834a4.797 4.797 0 00-2.377-.626v.96zm2.609.185a4.607 4.607 0 014.499-3.617v-.96a5.568 5.568 0 00-5.437 4.372l.938.205zm4.499-3.617c1.147 0 2.195.418 3.001 1.111l.625-.727a5.544 5.544 0 00-3.626-1.344v.96zm3.475 1.199a4.593 4.593 0 011.546-.265v-.96c-.655 0-1.284.113-1.868.322l.322.903zm1.546-.265a4.607 4.607 0 014.488 3.566l.936-.215a5.568 5.568 0 00-5.424-4.311v.96zm5.135 3.903c.353-.142.739-.22 1.144-.22v-.96c-.53 0-1.038.103-1.503.29l.359.89zm1.144-.22a3.059 3.059 0 013.059 3.058h.959a4.018 4.018 0 00-4.018-4.018v.96zm3.059 3.058a3.06 3.06 0 01-3.059 3.059v.959a4.018 4.018 0 004.018-4.018h-.959zm-3.059 3.059a3.058 3.058 0 01-2.637-1.508l-.827.487a4.017 4.017 0 003.464 1.98v-.959zm-3.355-1.635a4.587 4.587 0 01-2.924 1.046v.96a5.544 5.544 0 003.533-1.265l-.609-.741zm-2.924 1.046a4.588 4.588 0 01-2.974-1.088l-.62.732a5.545 5.545 0 003.594 1.316v-.96zm-3.731-.895a2.977 2.977 0 01-2.777 1.904v.96a3.936 3.936 0 003.672-2.518l-.895-.346zm-2.777 1.904a2.97 2.97 0 01-2.257-1.036l-.727.625a3.924 3.924 0 002.984 1.371v-.96z"
      fill="#000"
      mask="url(#d)"
    />
    <Path
      d="M203.163 120.662c-.137-.819.091-2.525 2.096-2.795-.638.234-1.951 1.12-2.096 2.795zM208.766 116.431c-.136-.819.092-2.525 2.097-2.795-.639.234-1.952 1.12-2.097 2.795z"
      fill="#FFE601"
    />
    <Path
      d="M198.214 77.288l2.777-2.777-2.777-2.778M189.883 74.51h11.033"
      stroke="#131313"
      strokeWidth={1.30184}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M198.562 65.767c4.795 0 8.678 3.254 8.678 8.678 0 5.425-3.883 8.68-8.678 8.68"
      stroke="#131313"
      strokeWidth={1.30184}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Rect
      x={195.481}
      y={12.8993}
      width={31.9968}
      height={31.9968}
      rx={15.9984}
      fill="#FF034F"
      stroke="#000"
      strokeWidth={0.867893}
    />
    <Rect x={198.763} y={16.1812} width={25.4333} height={25.4333} rx={12.7167} fill="#F6F6F6" />
    <Rect x={202.8} y={20.2188} width={17.3579} height={17.3579} rx={8.67893} fill="#F6F6F6" />
    <Path
      d="M211.479 20.219c-4.782 0-8.679 3.897-8.679 8.679s3.897 8.679 8.679 8.679 8.679-3.897 8.679-8.68c0-4.781-3.897-8.678-8.679-8.678zm-.651 5.207c0-.356.295-.65.651-.65.356 0 .651.294.651.65v4.34c0 .355-.295.65-.651.65a.656.656 0 01-.651-.65v-4.34zm1.449 7.273a.89.89 0 01-.182.287 1.005 1.005 0 01-.286.182.867.867 0 01-.33.07.864.864 0 01-.33-.07.992.992 0 01-.286-.182.893.893 0 01-.183-.287.871.871 0 01-.069-.33.87.87 0 01.069-.33.998.998 0 01.183-.286.992.992 0 01.286-.182.869.869 0 01.66 0c.104.043.199.104.286.182a.995.995 0 01.182.286c.044.105.07.217.07.33a.854.854 0 01-.07.33z"
      fill="#FF034F"
    />
    <Path
      d="M71.048 67.785c0-.672.138-1.267.413-1.786a3.085 3.085 0 012.746-1.64c.527 0 .985.105 1.373.316.397.202.713.457.948.765v-.972h1.397v6.695h-1.397v-.996a2.75 2.75 0 01-.96.79c-.405.21-.867.315-1.385.315a2.974 2.974 0 01-1.58-.437 3.246 3.246 0 01-1.142-1.24c-.275-.534-.413-1.137-.413-1.81zm5.48.025c0-.462-.097-.863-.291-1.203-.187-.34-.434-.6-.742-.778a1.955 1.955 0 00-.996-.267c-.356 0-.689.089-.996.267-.308.17-.56.425-.754.766-.186.332-.28.728-.28 1.19 0 .462.094.867.28 1.215.195.349.446.616.754.802a1.999 1.999 0 001.992 0c.308-.178.555-.437.742-.777.194-.349.291-.754.291-1.216zm6.595-3.451c.526 0 .996.11 1.409.328.421.219.75.543.984.972.235.43.353.948.353 1.555v3.95h-1.373V67.42c0-.6-.15-1.057-.45-1.373-.3-.324-.709-.486-1.227-.486-.519 0-.932.162-1.24.486-.3.316-.45.773-.45 1.373v3.742h-1.384v-6.695h1.385v.766c.227-.276.514-.49.863-.644a2.82 2.82 0 011.13-.231zm10.54.11l-4.108 9.841h-1.434l1.361-3.256-2.636-6.586h1.543l1.883 5.103 1.956-5.103h1.434zm3.739 3.34c0-.688.138-1.291.413-1.81a3.013 3.013 0 011.166-1.215c.495-.283 1.062-.425 1.702-.425.81 0 1.478.194 2.004.583.535.38.896.928 1.082 1.64h-1.495a1.579 1.579 0 00-.583-.777c-.267-.187-.603-.28-1.008-.28-.567 0-1.021.203-1.361.608-.332.397-.498.956-.498 1.677 0 .72.166 1.283.498 1.689.34.404.794.607 1.361.607.802 0 1.332-.352 1.591-1.057h1.495c-.195.68-.559 1.223-1.094 1.628-.534.397-1.199.595-1.992.595-.64 0-1.207-.141-1.702-.425a3.118 3.118 0 01-1.166-1.215c-.275-.526-.413-1.134-.413-1.823zm10.651 3.463a3.465 3.465 0 01-1.713-.425 3.158 3.158 0 01-1.203-1.215c-.292-.526-.437-1.134-.437-1.823 0-.68.15-1.283.449-1.81a3.11 3.11 0 011.227-1.215 3.564 3.564 0 011.738-.425c.64 0 1.219.142 1.737.425.519.284.928.689 1.228 1.215.299.527.449 1.13.449 1.81 0 .681-.154 1.285-.461 1.811a3.228 3.228 0 01-1.264 1.227 3.633 3.633 0 01-1.75.425zm0-1.203c.357 0 .689-.085.997-.255.315-.17.571-.425.765-.765.194-.34.292-.753.292-1.24 0-.486-.094-.894-.28-1.227a1.874 1.874 0 00-.741-.765 2.027 2.027 0 00-.996-.255c-.357 0-.689.085-.997.255-.299.17-.538.425-.717.765-.178.333-.267.742-.267 1.228 0 .72.182 1.28.547 1.676.373.39.838.584 1.397.584zm6.23-7.897v8.991h-1.385v-8.991h1.385zm3.203 0v8.991h-1.385v-8.991h1.385zm7.955 5.48c0 .25-.016.477-.049.68h-5.115c.041.535.239.964.595 1.288.357.324.794.486 1.313.486.745 0 1.271-.312 1.579-.936h1.495a3.037 3.037 0 01-1.106 1.52c-.526.388-1.183.582-1.968.582-.64 0-1.215-.141-1.726-.425a3.174 3.174 0 01-1.19-1.215c-.284-.526-.426-1.134-.426-1.823 0-.688.138-1.291.413-1.81a2.994 2.994 0 011.179-1.215c.51-.283 1.094-.425 1.75-.425.632 0 1.195.138 1.689.413.494.275.879.664 1.154 1.166.275.495.413 1.066.413 1.714zm-1.446-.438c-.008-.51-.19-.92-.547-1.227-.356-.308-.798-.462-1.324-.462-.478 0-.887.154-1.227.462-.34.3-.543.709-.608 1.227h3.706zm5.507-2.855c.518 0 .976.105 1.373.316.405.202.721.457.947.765v-.972h1.398v6.804c0 .616-.13 1.163-.389 1.64a2.789 2.789 0 01-1.13 1.143c-.486.275-1.069.413-1.75.413-.907 0-1.66-.215-2.26-.644a2.335 2.335 0 01-1.02-1.725h1.373c.105.348.328.627.668.838.348.219.761.328 1.239.328.559 0 1.009-.17 1.349-.51.348-.34.522-.834.522-1.483v-1.117a2.854 2.854 0 01-2.32 1.118 3.058 3.058 0 01-1.604-.438 3.241 3.241 0 01-1.142-1.24c-.276-.534-.414-1.137-.414-1.81 0-.672.138-1.267.414-1.786a3.081 3.081 0 012.746-1.64zm2.32 3.45c0-.461-.097-.862-.291-1.202-.187-.34-.434-.6-.741-.778a1.956 1.956 0 00-.997-.267c-.356 0-.688.089-.996.267-.308.17-.559.425-.753.766-.187.332-.28.728-.28 1.19 0 .462.093.867.28 1.215.194.349.445.616.753.802a1.999 1.999 0 001.993 0c.307-.178.554-.437.741-.777.194-.349.291-.754.291-1.216zm9.353-.157c0 .25-.016.477-.049.68h-5.115c.041.535.239.964.595 1.288.357.324.794.486 1.313.486.745 0 1.271-.312 1.579-.936h1.495a3.037 3.037 0 01-1.106 1.52c-.526.388-1.183.582-1.968.582-.64 0-1.215-.141-1.726-.425a3.174 3.174 0 01-1.19-1.215c-.284-.526-.426-1.134-.426-1.823 0-.688.138-1.291.413-1.81a2.994 2.994 0 011.179-1.215c.51-.283 1.094-.425 1.75-.425.632 0 1.194.138 1.689.413.494.275.878.664 1.154 1.166.275.495.413 1.066.413 1.714zm-1.446-.438c-.008-.51-.19-.92-.547-1.227-.356-.308-.798-.462-1.324-.462-.478 0-.887.154-1.227.462-.34.3-.543.709-.608 1.227h3.706zM72.215 77.581a.858.858 0 01-.632-.255.858.858 0 01-.255-.632c0-.25.085-.462.255-.632.17-.17.38-.255.632-.255.243 0 .45.085.62.255.17.17.255.381.255.632a.858.858 0 01-.256.632.844.844 0 01-.62.255zm.68.887v6.695H71.51v-6.695h1.385zm1.357 3.317c0-.672.138-1.267.413-1.786a3.086 3.086 0 012.758-1.64c.438 0 .867.097 1.288.291.43.187.77.438 1.02.754v-3.232h1.398v8.991h-1.397v-1.008a2.582 2.582 0 01-.948.802c-.397.21-.855.315-1.373.315a3.06 3.06 0 01-1.604-.437 3.246 3.246 0 01-1.142-1.24c-.275-.534-.413-1.137-.413-1.81zm5.48.025c0-.462-.097-.863-.292-1.203-.186-.34-.433-.6-.741-.778a1.955 1.955 0 00-.996-.267c-.357 0-.689.089-.997.267-.308.17-.559.425-.753.766-.186.332-.28.728-.28 1.19 0 .462.094.867.28 1.215.194.349.445.616.753.802a2 2 0 001.993 0c.308-.178.555-.437.741-.777.195-.349.292-.754.292-1.216zm9.353-.158c0 .25-.017.477-.05.68h-5.114c.04.535.238.964.595 1.288.356.324.794.486 1.312.486.745 0 1.272-.312 1.58-.936h1.494a3.036 3.036 0 01-1.106 1.52c-.526.388-1.182.582-1.968.582-.64 0-1.215-.141-1.725-.425a3.179 3.179 0 01-1.191-1.215c-.284-.526-.425-1.134-.425-1.823 0-.688.138-1.291.413-1.81a2.99 2.99 0 011.178-1.215c.51-.283 1.094-.425 1.75-.425.632 0 1.195.138 1.69.413.493.275.878.664 1.153 1.166.276.495.413 1.066.413 1.714zm-1.446-.438c-.008-.51-.19-.92-.547-1.227-.357-.308-.798-.462-1.325-.462-.477 0-.887.154-1.227.462-.34.3-.543.709-.607 1.227h3.706zm6.187-2.855c.526 0 .996.11 1.409.328.421.219.75.543.984.972.235.43.353.948.353 1.555v3.95h-1.374V81.42c0-.6-.15-1.057-.45-1.373-.299-.324-.708-.486-1.226-.486-.519 0-.932.162-1.24.486-.3.316-.45.773-.45 1.373v3.742h-1.384v-6.695h1.385v.766c.227-.276.514-.49.862-.644a2.82 2.82 0 011.13-.231zm6.128 1.24v3.705c0 .251.057.433.17.547.122.105.324.158.608.158h.851v1.154h-1.094c-.624 0-1.102-.146-1.434-.437-.332-.292-.498-.766-.498-1.422v-3.706h-.79v-1.13h.79v-1.665h1.397v1.665h1.629v1.13h-1.629zm3.61-2.018a.859.859 0 01-.632-.255.858.858 0 01-.255-.632c0-.25.085-.462.255-.632a.859.859 0 01.632-.255c.243 0 .449.085.62.255.17.17.255.381.255.632a.858.858 0 01-.255.632.846.846 0 01-.62.255zm.68.887v6.695h-1.385v-6.695h1.385zm3.435 1.13v3.706c0 .251.057.433.17.547.122.105.324.158.608.158h.85v1.154h-1.093c-.624 0-1.102-.146-1.434-.437-.332-.292-.498-.766-.498-1.422v-3.706h-.79v-1.13h.79v-1.665h1.397v1.665h1.628v1.13h-1.628zm8.931-1.13l-4.106 9.842h-1.434l1.361-3.256-2.637-6.586h1.543l1.883 5.103 1.957-5.103h1.433z"
      fill="#000"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_315_18705"
        x1={79.8736}
        y1={116.682}
        x2={130.178}
        y2={146.202}
        gradientUnits="userSpaceOnUse"
      >
        <Stop />
        <Stop offset={1} stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="paint1_linear_315_18705"
        x1={210.252}
        y1={118.633}
        x2={208.95}
        y2={121.071}
        gradientUnits="userSpaceOnUse"
      >
        <Stop />
        <Stop offset={1} stopOpacity={0} />
      </LinearGradient>
    </Defs>
  </Svg>
);

export default IdentifyCollege;
