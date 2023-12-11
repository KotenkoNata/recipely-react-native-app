import {StyleSheet, View, Dimensions} from "react-native";
import Svg, {Path} from "react-native-svg";
import {COLORS} from "../constants/theme";

function HomeScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.topLine}>
                <Svg height={100}
                width={Dimensions.get('screen').width}
                >
                    <Path
                        stroke='#3CA0A7'
                        strokeWidth='2'
                        d='M8.58522 0.5C8.58522 0.5 1.59811 15.3199 1.08522 25.5C0.468029 37.7503 3.22719 44.9663 8.58522 56C14.8211 68.8415 20.293 75.9542 32.0852 84C41.7898 90.6214 48.5714 92.6646 60.0852 95C73.2894 97.6782 81.317 97.3404 94.5852 95C107.236 92.7686 114.937 91.1855 125.585 84C143.24 72.0863 144.097 56.3115 154.085 37.5C161.581 23.3825 171.585 0.5 171.585 0.5'
                     />
                </Svg>
            </View>

            <View style={styles.topLineBottom}>
                <Svg height={500}
                     width={Dimensions.get('screen').width}
                >
                    <Path
                        stroke='#3CA0A7'
                        strokeWidth='2'
                        d='M1 101.709C1 101.709 18.4084 121.935 32.7507 131.7C47.788 141.937 58.271 145.067 75.6419 151.694C90.9002 157.514 99.4338 161.538 115.748 164.19C134.584 167.252 145.714 165.856 164.767 164.19C183.068 162.59 193.992 162.464 211 156.192C226.015 150.656 233.427 145.31 246.093 136.198C257.495 127.995 263.658 122.914 272.83 112.705C287.246 96.659 296.178 86.4303 300.682 66.2191C303.71 52.6287 305.781 43.8121 300.682 30.7297C296.357 19.6343 292.579 12.0374 281.186 6.23702C273.059 2.0995 266.854 -0.29875 257.79 1.73836C249.09 3.69378 239.966 14.7345 239.966 14.7345C239.966 14.7345 238.868 24.5614 239.966 30.7297C241.899 41.5947 246.503 47.0855 253.334 56.2221C259.685 64.7164 264.581 68.6564 272.83 75.7163C291.691 91.8586 305.145 98.3835 328.533 108.706C344.047 115.554 353.509 117.889 369.753 123.202C380.353 126.67 385.77 131.401 397.048 131.7C406.647 131.954 412.511 130.73 421 126.7011'
                    />
                </Svg>
            </View>

            <View style={styles.logoContainer}>
                <Svg height={70}
                     width={190}
                     viewBox='0 0 824 245'
                >
                <Path
                     fill='#FFFFFF'
                     d='M370 2.5C370 4.864 369.7 5 364.5 5C359.3 5 359 5.136 359 7.5C359 9.611 358.533 10 356 10C353.333 10 353 10.333 353 13C353 15.533 352.611 16 350.5 16C348.5 16 348 16.5 348 18.5C348 20.958 347.867 21 340 21C332.236 21 332 21.07 332 23.385C332 25.525 331.437 25.84 326.5 26.457C321.532 27.077 321 27.379 321 29.572C321 31.481 320.477 32 318.552 32C316.304 32 316.08 32.429 315.802 37.25C315.539 41.824 315.21 42.541 313.25 42.82C311.089 43.126 311 43.533 311 53.07C311 62.995 311.001 63 313.5 63C315.864 63 316 63.3 316 68.5C316 73.7 316.136 74 318.5 74C320.5 74 321 74.5 321 76.5C321 78.864 321.3 79 326.5 79C331.944 79 332 79.03 332 82C332 84.933 332.111 85 337 85C341.667 85 342 84.833 342 82.5C342 80.5 341.5 80 339.5 80C337.5 80 337 79.5 337 77.5C337 75.136 336.7 75 331.5 75C326.056 75 326 74.97 326 72C326 69.467 325.611 69 323.5 69C321.28 69 320.999 68.58 320.989 65.25C320.968 58.057 319.868 54 317.939 54C316.877 54 315.949 54.922 315.675 56.25C315.42 57.488 315.276 56.025 315.356 53C315.493 47.785 315.642 47.484 318.25 47.184C320.864 46.883 321 46.605 321 41.572C321 36.464 321.088 36.294 323.5 36.755C325.734 37.182 326 36.902 326 34.117C326 31.006 326.01 31 331.5 31C336.7 31 337 30.864 337 28.5C337 26.389 337.467 26 340 26C342.511 26 343 26.396 343 28.434C343 30.321 343.617 30.961 345.75 31.284L348.5 31.7L345.75 31.85C343.523 31.971 343 32.476 343 34.5C343 36.5 343.5 37 345.5 37C347.5 37 348 37.5 348 39.5C348 41.5 348.5 42 350.5 42H353V31V20H355.5C357.5 20 358 19.5 358 17.5C358 15.5 358.5 15 360.5 15C362.5 15 363 14.5 363 12.5V10H377H391V12.5C391 14.5 391.5 15 393.5 15C395.5 15 396 15.5 396 17.5C396 19.462 396.509 20 398.364 20C400.418 20 400.811 20.608 401.364 24.64C401.714 27.191 402 32.141 402 35.64C402 41.333 402.21 42 404 42C405.833 42 406 41.333 406 34V26H414C421.867 26 422 25.958 422 23.5C422 21.042 421.867 21 414 21C406.133 21 406 20.958 406 18.5C406 16.5 405.5 16 403.5 16C401.389 16 401 15.533 401 13C401 10.467 400.611 10 398.5 10C396.5 10 396 9.5 396 7.5C396 5.136 395.7 5 390.5 5C385.3 5 385 4.864 385 2.5C385 0.056 384.833 0 377.5 0C370.167 0 370 0.056 370 2.5ZM423 24C423 26.533 422.611 27 420.5 27C418.667 27 418 27.533 418 29C418 30.73 418.667 31 422.934 31C427.572 31 427.886 31.164 428.184 33.75C428.432 35.91 429.09 36.568 431.25 36.816C433.83 37.113 434 37.434 434 42C434 46.542 434.184 46.895 436.75 47.284L439.5 47.7L436.75 47.85C434.544 47.97 434 48.482 434 50.434C434 52.321 434.617 52.961 436.75 53.284L439.5 53.7L436.75 53.85C434.75 53.959 434 54.527 434 55.934C434 57.275 434.842 57.995 436.75 58.284L439.5 58.7L436.75 58.85C434.137 58.993 434 59.248 434 64C434 68.929 433.956 69 430.887 69C427.996 69 427.805 69.215 428.213 72L428.654 75H423.327C418.312 75 418 75.146 418 77.5C418 79.611 417.533 80 415 80C412.467 80 412 80.389 412 82.5C412 84.833 412.333 85 417 85C421.889 85 422 84.933 422 82C422 79.03 422.056 79 427.5 79C432.7 79 433 78.864 433 76.5C433 74.532 433.508 74 435.386 74C437.448 74 437.865 73.388 438.447 69.503C438.818 67.03 438.843 64.555 438.502 64.003C438.139 63.416 439.15 63 440.941 63H444V52.5C444 42.006 443.999 42 441.534 42C439.331 42 438.998 41.469 438.406 37C437.821 32.592 437.461 32 435.371 32C433.509 32 433 31.464 433 29.5C433 27.5 432.5 27 430.5 27C428.389 27 428 26.533 428 24C428 21.467 427.611 21 425.5 21C423.389 21 423 21.467 423 24ZM407 29C407 30.467 407.667 31 409.5 31C411.333 31 412 30.467 412 29C412 27.533 411.333 27 409.5 27C407.667 27 407 27.533 407 29ZM343 40C343 41.333 343.667 42 345 42C346.333 42 347 41.333 347 40C347 38.667 346.333 38 345 38C343.667 38 343 38.667 343 40ZM675 120V197H688H701V120C701 44.591 700.96 43 699.07 43C697.863 43 696.977 43.843 696.706 45.25L696.272 47.5L696.136 45.25C696.035 43.571 695.383 43 693.57 43C691.844 43 691.013 43.653 690.706 45.25L690.272 47.5L690.136 45.25C690.045 43.741 689.364 43 688.07 43C686.863 43 685.977 43.843 685.706 45.25L685.272 47.5L685.136 45.25C685.045 43.741 684.364 43 683.07 43C681.863 43 680.977 43.843 680.706 45.25L680.272 47.5L680.136 45.25C680.033 43.553 679.386 43 677.5 43H675V120ZM316 50.5C316 52.333 316.533 53 318 53C319.467 53 320 52.333 320 50.5C320 48.667 319.467 48 318 48C316.533 48 316 48.667 316 50.5ZM0 125V197H15.5H31V170.5V144H37C42.733 144 43 144.111 43 146.5C43 148.5 43.5 149 45.5 149C47.864 149 48 149.3 48 154.5C48 159.944 48.03 160 51 160C53.533 160 54 160.389 54 162.5C54 164.5 54.5 165 56.5 165C58.864 165 59 165.3 59 170.5C59 175.7 59.136 176 61.5 176C63.5 176 64 176.5 64 178.5C64 180.48 64.505 181 66.428 181C68.621 181 68.923 181.532 69.543 186.5C70.16 191.437 70.475 192 72.615 192C74.492 192 75 192.532 75 194.5V197H90.5H106V192C106 187.333 105.833 187 103.5 187C101.5 187 101 186.5 101 184.5C101 182.5 100.5 182 98.5 182C96.136 182 96 181.7 96 176.5C96 171.056 95.97 171 93 171C90.467 171 90 170.611 90 168.5C90 166.5 89.5 166 87.5 166C85.136 166 85 165.7 85 160.5C85 155.73 84.743 155 83.066 155C81.725 155 81.005 155.842 80.716 157.75C80.487 159.262 80.232 158.137 80.15 155.25C80.003 150.097 79.944 150 76.95 150H73.9L74.2 144.25L74.5 138.5L79.688 138.2C84.464 137.924 84.91 137.685 85.289 135.2L85.7 132.5L85.85 135.25C86.055 139.013 90 139.25 90 135.5C90 133.376 90.462 133 93.072 133C95.644 133 96.114 132.635 95.961 130.75C95.861 129.512 95.828 127.038 95.889 125.25C95.984 122.48 96.369 122 98.5 122C100.5 122 101 121.5 101 119.5C101 117.5 101.5 117 103.5 117H106V98.5V80H103.5C101.136 80 101 79.7 101 74.5C101 69.3 100.864 69 98.5 69C96.5 69 96 68.5 96 66.5C96 64.389 95.533 64 93 64C90.467 64 90 63.611 90 61.5C90 59.167 89.667 59 85 59C80.111 59 80 58.933 80 56V53H40H0V125ZM348 63.5V74H353C357.667 74 358 73.833 358 71.5C358 69.5 357.5 69 355.5 69C353.042 69 353 68.867 353 61C353 53.133 352.958 53 350.5 53H348V63.5ZM375 63.43C375 73.943 375.013 74 377.419 74C379.83 74 379.837 73.971 379.669 63.75C379.507 53.941 379.403 53.486 377.25 53.18C375.038 52.866 375 53.041 375 63.43ZM401.79 61.25C401.52 68.942 401.348 69.522 399.25 69.82C397.804 70.025 397 70.829 397 72.07C397 73.691 397.721 74 401.5 74H406V63.5C406 53.739 405.862 53 404.04 53C402.276 53 402.052 53.822 401.79 61.25ZM56.25 74.706C54.864 74.973 54 75.864 54 77.027C54 78.691 54.922 78.951 61.75 79.208C69.379 79.495 69.505 79.543 69.816 82.25C70.065 84.41 70.655 85 72.566 85C74.82 85 75 85.37 75 90C75 94.752 75.137 95.007 77.75 95.15L80.5 95.3L77.75 95.716C75.617 96.039 75 96.679 75 98.566C75 100.518 75.544 101.03 77.75 101.15L80.5 101.3L77.75 101.716C75.139 102.112 75 102.407 75 107.566C75 112.654 74.845 113 72.57 113C70.81 113 70.051 113.621 69.82 115.25C69.541 117.21 68.824 117.539 64.25 117.802C59.429 118.08 59 118.304 59 120.552V123H45H31V99.167C31 86.058 31.3 75.033 31.667 74.667C32.033 74.3 38.221 74.061 45.417 74.136C52.613 74.211 57.488 74.467 56.25 74.706ZM32 77C32 78.467 32.667 79 34.5 79C36.333 79 37 78.467 37 77C37 75.533 36.333 75 34.5 75C32.667 75 32 75.533 32 77ZM38 77C38 78.333 38.667 79 40 79C41.333 79 42 78.333 42 77C42 75.667 41.333 75 40 75C38.667 75 38 75.667 38 77ZM43 77C43 78.333 43.667 79 45 79C46.333 79 47 78.333 47 77C47 75.667 46.333 75 45 75C43.667 75 43 75.667 43 77ZM48 77C48 78.467 48.667 79 50.5 79C52.333 79 53 78.467 53 77C53 75.533 52.333 75 50.5 75C48.667 75 48 75.533 48 77ZM161 98.385C161 100.522 160.436 100.84 155.561 101.449C150.985 102.021 150.073 102.475 149.811 104.314C149.549 106.154 148.758 106.548 144.811 106.802C140.552 107.077 140.094 107.351 139.811 109.802C139.568 111.907 138.895 112.57 136.75 112.816C134.164 113.114 134 113.428 134 118.066C134 122.623 133.815 123 131.572 123C129.379 123 129.077 123.532 128.457 128.5C127.84 133.437 127.525 134 125.385 134C123.032 134 123 134.132 123 143.934V153.867L125.75 154.284L128.5 154.7L125.75 154.85C123.523 154.971 123 155.476 123 157.5C123 159.463 123.509 160 125.369 160C127.33 160 127.845 160.646 128.358 163.75C128.699 165.813 128.983 169.413 128.989 171.75C128.999 175.614 129.227 176 131.5 176C133.5 176 134 176.5 134 178.5C134 180.5 134.5 181 136.5 181C138.468 181 139 181.508 139 183.386C139 185.511 139.631 185.881 144.75 186.758C147.913 187.3 149.262 187.801 147.75 187.872C145.709 187.967 145 188.516 145 190C145 191.816 145.712 192.013 152.75 192.136C157.012 192.211 159.488 192.467 158.25 192.706C156.843 192.977 156 193.863 156 195.07C156 196.914 156.913 197 176.5 197H197V194.5C197 192.136 197.3 192 202.5 192C207.7 192 208 191.864 208 189.5C208 187.389 208.467 187 211 187C213.738 187 214 186.707 214 183.64C214 175.978 212.791 171 210.93 171C209.737 171 208.993 171.924 208.716 173.75C208.487 175.262 208.232 174.137 208.15 171.25L208 166H203C198.333 166 198 166.167 198 168.5C198 170.958 197.867 171 190 171C182.133 171 182 171.042 182 173.5C182 175.864 181.7 176 176.5 176C171.3 176 171 175.864 171 173.5C171 171.136 170.7 171 165.5 171C160.3 171 160 170.864 160 168.5C160 166.5 159.5 166 157.5 166C155.111 166 155 165.733 155 160V154H189.5H224V138.5V123H221.5C219.167 123 219 122.667 219 118C219 113.727 218.719 113 217.07 113C215.843 113 215.005 113.821 214.771 115.25C214.555 116.572 214.075 115.335 213.608 112.25C212.98 108.107 212.424 107 210.973 107C209.733 107 208.997 107.897 208.716 109.75L208.3 112.5L208.15 109.75C208.029 107.523 207.524 107 205.5 107C203.52 107 203 106.495 203 104.572C203 102.379 202.468 102.077 197.5 101.457C192.563 100.84 192 100.525 192 98.385C192 94.806 188.266 95.124 187.716 98.75L187.3 101.5L187.15 98.75L187 96H174H161V98.385ZM284 98.385C284 100.525 283.437 100.84 278.5 101.457C274.056 102.012 273 102.5 273 104C273 105.5 271.944 105.988 267.5 106.543C262.563 107.16 262 107.475 262 109.615C262 111.492 261.468 112 259.5 112C257.389 112 257 112.467 257 115C257 117.515 256.605 118 254.555 118C252.347 118 252.08 118.461 251.805 122.75C251.526 127.1 251.268 127.527 248.75 127.816L246 128.133V146.566V165H249.059C250.741 165 251.869 165.403 251.564 165.897C251.259 166.39 251.294 168.865 251.641 171.397C252.188 175.392 252.584 176 254.636 176C256.491 176 257 176.538 257 178.5C257 180.482 257.504 181 259.434 181C261.345 181 261.935 181.59 262.184 183.75C262.432 185.91 263.09 186.568 265.25 186.816C267.41 187.065 268 187.655 268 189.566C268 191.85 268.34 192 273.5 192C278.7 192 279 192.136 279 194.5V197H297H315V194.5C315 192.136 315.3 192 320.5 192C325.7 192 326 191.864 326 189.5C326 187.5 326.5 187 328.5 187C330.611 187 331 186.533 331 184C331 181.333 331.333 181 334 181C336.933 181 337 180.889 337 176C337 171.37 336.82 171 334.566 171C332.679 171 332.039 171.617 331.716 173.75L331.3 176.5L331.15 173.75C331.029 171.523 330.524 171 328.5 171C326.5 171 326 170.5 326 168.5C326 166.056 325.833 166 318.5 166C311.167 166 311 166.056 311 168.5V171H297H283V168.5C283 166.5 282.5 166 280.5 166C278.136 166 278 165.7 278 160.5C278 155.056 277.97 155 275 155H272V146.5V138H275C277.926 138 278 137.878 278 133.094V128.188L283 127.5C287.424 126.892 288 126.535 288 124.406C288 122.004 288.02 122 299.5 122H311V125.003V128.007L318.5 127.894L326 127.781V124.891C326 122.054 326.102 122 331.5 122H337V117C337 112.111 336.933 112 334 112C331.467 112 331 111.611 331 109.5C331 107.5 330.5 107 328.5 107C326.5 107 326 106.5 326 104.5C326 101.191 322.336 100.978 321.706 104.25C321.275 106.488 321.272 106.489 321.136 104.316C321.037 102.72 320.26 102.048 318.25 101.816C316.09 101.568 315.432 100.91 315.184 98.75C314.964 96.845 314.294 96 313 96C311.731 96 310.999 96.881 310.716 98.75L310.3 101.5L310.15 98.75L310 96H297H284V98.385ZM471 98.371C471 100.461 470.408 100.821 466 101.406C462.058 101.929 461 102.457 461 103.904C461 105.247 459.995 105.904 457.25 106.358C449.952 107.564 449 107.292 449 104V101H436H423V173V245H436H449L448.999 215.75L448.997 186.5L454.749 186.94C457.912 187.182 459.487 187.551 458.25 187.76C456.825 188 456 188.847 456 190.07C456 191.719 456.727 192 461 192C465.667 192 466 192.167 466 194.5V197H481.5H497V194.5C497 192.136 497.3 192 502.5 192C507.852 192 508 191.925 508 189.211C508 186.825 508.398 186.427 510.75 186.461C513.102 186.494 513.494 186.102 513.461 183.75C513.427 181.398 513.825 181 516.211 181C518.519 181 519 180.569 519 178.5C519 176.5 519.5 176 521.5 176C523.958 176 524 175.867 524 168C524 160.133 524.042 160 526.5 160C529.202 160 529.022 160.692 529.613 148C529.754 144.975 529.623 140.587 529.321 138.25C528.849 134.59 528.441 134 526.386 134C524.07 134 524 133.765 524 126C524 118.763 523.816 118 522.07 118C520.863 118 519.977 118.843 519.706 120.25C519.467 121.488 519.211 120.167 519.136 117.316C519.008 112.444 518.835 112.114 516.25 111.816C514.281 111.59 513.409 110.861 513.18 109.25C512.949 107.621 512.19 107 510.43 107C508.505 107 508 106.481 508 104.5C508 101.191 504.336 100.978 503.706 104.25C503.275 106.488 503.272 106.489 503.136 104.316C503.037 102.72 502.26 102.048 500.25 101.816C498.09 101.568 497.432 100.91 497.184 98.75C496.964 96.845 496.294 96 495 96C493.731 96 492.999 96.881 492.716 98.75L492.3 101.5L492.15 98.75L492 96H481.5C471.119 96 471 96.027 471 98.371ZM584 98.385C584 100.525 583.437 100.84 578.5 101.457C573.532 102.077 573 102.379 573 104.572C573 106.815 572.623 107 568.066 107C563.428 107 563.114 107.164 562.816 109.75C562.568 111.91 561.91 112.568 559.75 112.816C557.164 113.114 557 113.428 557 118.066C557 122.662 556.829 123 554.5 123C552.227 123 551.999 123.386 551.989 127.25C551.969 135.041 550.918 139 548.869 139C545.989 139 546.33 143.732 549.25 144.294L551.5 144.728L549.25 144.864C547.741 144.955 547 145.636 547 146.93C547 148.137 547.843 149.023 549.25 149.294L551.5 149.728L549.25 149.864C547.741 149.955 547 150.636 547 151.93C547 153.137 547.843 154.023 549.25 154.294L551.5 154.728L549.25 154.864C547.553 154.967 547 155.614 547 157.5C547 159.5 547.5 160 549.5 160C551.833 160 552 160.333 552 165C552 169.667 552.167 170 554.5 170C556.864 170 557 170.3 557 175.5C557 180.7 557.136 181 559.5 181C561.468 181 562 181.508 562 183.386C562 185.511 562.631 185.881 567.75 186.758C570.913 187.3 572.263 187.801 570.75 187.872C568.709 187.967 568 188.516 568 190C568 191.816 568.712 192.013 575.75 192.136C580.013 192.211 582.487 192.467 581.25 192.706C579.843 192.977 579 193.863 579 195.07C579 196.916 579.919 197 600 197H621V194.5C621 192.167 621.333 192 626 192C630.667 192 631 191.833 631 189.5C631 187.389 631.467 187 634 187H637V179C637 171.192 636.942 171 634.566 171C632.679 171 632.039 171.617 631.716 173.75C631.487 175.262 631.232 174.137 631.15 171.25L631 166H626.5C622.367 166 622 166.204 622 168.5C622 170.86 621.696 171 616.566 171C611.407 171 611.112 171.139 610.716 173.75L610.3 176.5L610.15 173.75C609.945 169.987 606 169.75 606 173.5C606 175.889 605.733 176 600 176C594.267 176 594 175.889 594 173.5C594 171.136 593.7 171 588.5 171C583.01 171 583 170.994 583 167.883C583 165.098 582.734 164.818 580.5 165.245C578.063 165.711 578 165.574 578 159.861V154H612.43H646.861L647.18 151.75C647.409 150.139 648.281 149.41 650.25 149.184C652.836 148.886 653 148.572 653 143.934C653 139.374 652.816 139 650.566 139C648.679 139 648.039 139.617 647.716 141.75C647.487 143.262 647.232 139.663 647.15 133.75L647 123H644.5C642.167 123 642 122.667 642 118C642 113.727 641.719 113 640.07 113C638.863 113 637.977 113.843 637.706 115.25C637.467 116.488 637.211 115.137 637.136 112.25C637.01 107.392 636.818 107 634.566 107C632.679 107 632.039 107.617 631.716 109.75L631.3 112.5L631.15 109.75C631.029 107.523 630.524 107 628.5 107C626.52 107 626 106.495 626 104.572C626 102.379 625.468 102.077 620.5 101.457C615.563 100.84 615 100.525 615 98.385C615 94.806 611.266 95.124 610.716 98.75L610.3 101.5L610.15 98.75L610 96H597H584V98.385ZM364 149V197H377H390V149V101H377H364V149ZM723 103.475C723 105.463 723.503 106 725.364 106C727.418 106 727.811 106.608 728.364 110.64C728.714 113.191 729 116.791 729 118.64C729 121.557 729.329 122 731.5 122C733.864 122 734 122.3 734 127.5C734 132.7 734.136 133 736.5 133C738.864 133 739 133.3 739 138.5C739 143.643 739.156 144 741.406 144C743.535 144 743.892 144.576 744.5 149C745.108 153.424 745.465 154 747.594 154C749.935 154 750 154.217 750 162C750 169.867 750.042 170 752.5 170C754.631 170 755.016 170.48 755.111 173.25C755.172 175.038 755.139 177.512 755.039 178.75C754.886 180.635 755.356 181 757.928 181C760.985 181 761 181.027 761 186.5C761 191.944 760.97 192 758 192H755V198C755 203.733 754.889 204 752.5 204C750.056 204 750 204.167 750 211.5C750 218.833 749.944 219 747.5 219C745.136 219 745 219.3 745 224.5C745 229.619 744.836 230 742.631 230C740.67 230 740.155 230.646 739.642 233.75C739.301 235.813 739.017 239.188 739.011 241.25L739 245H752H765V240C765 235.111 765.067 235 768 235C770.97 235 771 234.944 771 229.5C771 224.3 771.136 224 773.5 224C775.864 224 776 223.7 776 218.5C776 213.325 776.145 213 778.458 213C780.832 213 780.926 212.735 781.208 205.25C781.495 197.621 781.543 197.495 784.25 197.184C786.864 196.883 787 196.605 787 191.572C787 186.464 787.088 186.294 789.5 186.755C791.996 187.232 792 187.221 792.15 178.867C792.232 174.265 792.487 171.738 792.716 173.25C793.005 175.158 793.725 176 795.066 176C796.817 176 797 175.242 797 168V160H800H803V152C803 144.133 803.042 144 805.5 144C807.859 144 808.008 143.677 808.15 138.25C808.232 135.087 808.487 133.738 808.716 135.25C809.005 137.158 809.725 138 811.066 138C813.023 138 813.277 136.582 813.442 124.75C813.475 122.424 813.906 122 816.24 122H819V114C819 106.133 819.042 106 821.5 106C823.5 106 824 105.5 824 103.5V101H811.625C804.819 101 797.865 101.277 796.173 101.615C793.27 102.196 793.08 102.52 792.798 107.365C792.545 111.734 792.181 112.545 790.364 112.805C787.984 113.144 787 116.309 787 123.625C787 127.625 786.786 128 784.5 128C782.042 128 782 128.133 782 136C782 143.808 781.942 144 779.566 144C777.655 144 777.065 144.59 776.816 146.75C776.568 148.91 775.91 149.568 773.75 149.816C771.041 150.128 771 150.049 771 144.566C771 139.048 770.974 139 768 139C765.03 139 765 138.944 765 133.5C765 128.3 764.864 128 762.5 128C760.039 128 760 127.874 760 119.883C760 111.805 759.988 111.769 757.546 112.236C755.202 112.684 755.078 112.453 754.796 107.103L754.5 101.5L738.75 101.225L723 100.949V103.475ZM820 109C820 110.333 820.667 111 822 111C823.333 111 824 110.333 824 109C824 107.667 823.333 107 822 107C820.667 107 820 107.667 820 109ZM179.25 117.706C177.843 117.977 177 118.863 177 120.07C177 121.816 177.763 122 185 122H193V125C193 127.533 193.389 128 195.5 128C197.864 128 198 128.3 198 133.5V139H176.566H155.133L154.816 136.25C154.169 130.624 155.059 128 157.613 128C159.599 128 160 127.495 160 125C160 122.03 160.056 122 165.5 122C170.7 122 171 121.864 171 119.5C171 117.134 171.28 117.007 176.25 117.136C179.137 117.211 180.488 117.467 179.25 117.706ZM602.75 117.716C600.842 118.005 600 118.725 600 120.066C600 121.817 600.758 122 608 122H616V125C616 127.533 616.389 128 618.5 128C620.864 128 621 128.3 621 133.5V139H599.5H578V133.5C578 128.3 578.136 128 580.5 128C582.611 128 583 127.533 583 125C583 122.03 583.056 122 588.5 122C593.7 122 594 121.864 594 119.5C594 117.106 594.243 117.006 599.75 117.15C602.913 117.232 604.263 117.487 602.75 117.716ZM172 120C172 121.333 172.667 122 174 122C175.333 122 176 121.333 176 120C176 118.667 175.333 118 174 118C172.667 118 172 118.667 172 120ZM595 120C595 121.333 595.667 122 597 122C598.333 122 599 121.333 599 120C599 118.667 598.333 118 597 118C595.667 118 595 118.667 595 120ZM487.184 124.75C487.432 126.91 488.09 127.568 490.25 127.816C492.41 128.065 493 128.655 493 130.566C493 132.496 493.518 133 495.5 133C497.864 133 498 133.3 498 138.5C498 143.797 498.101 144.006 500.75 144.15L503.5 144.3L500.75 144.716C498.842 145.005 498 145.725 498 147.066C498 148.473 498.75 149.041 500.75 149.15L503.5 149.3L500.75 149.716C498.139 150.112 498 150.407 498 155.566C498 160.696 497.86 161 495.5 161C493.5 161 493 161.5 493 163.5C493 165.5 492.5 166 490.5 166C488.5 166 488 166.5 488 168.5V171H476.5H465V168.5C465 164.75 461.055 164.987 460.85 168.75L460.7 171.5L460.284 168.75C459.967 166.661 459.31 166 457.549 166C455.489 166 455.154 165.387 454.543 160.5C453.923 155.532 453.621 155 451.428 155C449.048 155 449 154.833 449 146.5V138H452.072C454.644 138 455.114 137.635 454.961 135.75C454.391 128.716 454.688 128.231 460 127.5C464.424 126.892 465 126.535 465 124.406C465 122.011 465.051 122 475.934 122H486.867L487.184 124.75ZM97 125C97 126.333 97.667 127 99 127C100.333 127 101 126.333 101 125C101 123.667 100.333 123 99 123C97.667 123 97 123.667 97 125ZM279 131C279 132.333 279.667 133 281 133C282.333 133 283 132.333 283 131C283 129.667 282.333 129 281 129C279.667 129 279 129.667 279 131ZM316 131C316 132.467 316.667 133 318.5 133C320.333 133 321 132.467 321 131C321 129.533 320.333 129 318.5 129C316.667 129 316 129.533 316 131ZM456 131C456 132.333 456.667 133 458 133C459.333 133 460 132.333 460 131C460 129.667 459.333 129 458 129C456.667 129 456 129.667 456 131ZM579 131C579 132.333 579.667 133 581 133C582.333 133 583 132.333 583 131C583 129.667 582.333 129 581 129C579.667 129 579 129.667 579 131ZM648 136C648 137.467 648.667 138 650.5 138C652.333 138 653 137.467 653 136C653 134.533 652.333 134 650.5 134C648.667 134 648 134.533 648 136ZM75 141.57C75 143.662 75.418 144.08 77.25 143.82C78.696 143.614 79.614 142.696 79.82 141.25C80.08 139.418 79.662 139 77.57 139C75.477 139 75 139.477 75 141.57ZM225 141.5C225 143.333 225.533 144 227 144C228.467 144 229 143.333 229 141.5C229 139.667 228.467 139 227 139C225.533 139 225 139.667 225 141.5ZM225 147C225 148.333 225.667 149 227 149C228.333 149 229 148.333 229 147C229 145.667 228.333 145 227 145C225.667 145 225 145.667 225 147ZM804 147C804 148.333 804.667 149 806 149C807.333 149 808 148.333 808 147C808 145.667 807.333 145 806 145C804.667 145 804 145.667 804 147ZM648 152C648 153.467 648.667 154 650.5 154C652.333 154 653 153.467 653 152C653 150.533 652.333 150 650.5 150C648.667 150 648 150.533 648 152ZM525 163C525 164.333 525.667 165 527 165C528.333 165 529 164.333 529 163C529 161.667 528.333 161 527 161C525.667 161 525 161.667 525 163ZM215 184C215 185.333 215.667 186 217 186C218.333 186 219 185.333 219 184C219 182.667 218.333 182 217 182C215.667 182 215 182.667 215 184ZM332 184C332 185.467 332.667 186 334.5 186C336.333 186 337 185.467 337 184C337 182.533 336.333 182 334.5 182C332.667 182 332 182.533 332 184ZM638 184C638 185.333 638.667 186 640 186C641.333 186 642 185.333 642 184C642 182.667 641.333 182 640 182C638.667 182 638 182.667 638 184ZM107 195C107 196.467 107.667 197 109.5 197C111.333 197 112 196.467 112 195C112 193.533 111.333 193 109.5 193C107.667 193 107 193.533 107 195ZM782 200C782 201.467 782.667 202 784.5 202C786.333 202 787 201.467 787 200C787 198.533 786.333 198 784.5 198C782.667 198 782 198.533 782 200ZM772 227C772 228.333 772.667 229 774 229C775.333 229 776 228.333 776 227C776 225.667 775.333 225 774 225C772.667 225 772 225.667 772 227ZM766 238C766 239.333 766.667 240 768 240C769.333 240 770 239.333 770 238C770 236.667 769.333 236 768 236C766.667 236 766 236.667 766 238Z'
                    />
                </Svg>
            </View>

            <View style={styles.bottomLineUp}>
                <Svg height={175}
                     width={Dimensions.get('screen').width}
                >
                    <Path
                        stroke='#3CA0A7'
                        strokeWidth='2'
                        d='M1 14.013C1 14.013 17.8037 12.4143 28.4035 10.5189C43.3171 7.85204 50.6786 0.430486 65.8735 1.03485C74.6064 1.38219 80.8927 0.615261 87.6844 5.52729C97.4026 12.5559 93.651 22.3359 94.3955 33.4803C95.8111 54.6726 85.4881 65.65 80.4141 86.3913C76.4669 102.527 68.8029 111.413 70.9068 127.822C72.2653 138.417 72.8923 145.492 80.4141 153.778C87.6293 161.726 94.8911 163.565 105.581 167.255C121.169 172.638 131.377 172.207 148.084 171.748C168.636 171.182 179.881 167.159 199.535 161.765C226.92 154.248 239.82 144.29 266.646 135.309C287.08 128.468 298.484 124.116 319.775 119.835C337.854 116.2 348.225 113.487 366.752 113.845C388.423 114.263 401.076 116.708 421 124.328'
                    />
                </Svg>
            </View>

            <View style={styles.bottomLine}>
                <Svg height={50}
                     width={Dimensions.get('screen').width}
                >
                    <Path
                        stroke='#3CA0A7'
                        strokeWidth='2'
                        d='M0.5 47.9997C0.5 47.9997 10.5186 36.0983 17.5 28.9997C23.5056 22.8932 26.5307 18.9782 33.5 13.9997C40.678 8.87193 45.0511 6.03605 53.5 3.49966C60.112 1.51471 64.1105 1.44071 71 0.99966C76.651 0.637894 79.8844 0.271751 85.5 0.99966C92.7893 1.94451 96.7132 3.67727 103.5 6.49966C110.68 9.48561 114.635 11.5325 121 15.9997C127.902 20.8438 131.182 24.3954 137 30.4997C140.054 33.7043 141.883 35.4294 144.5 38.9997C146.935 42.3216 150 47.9997 150 47.9997'
                    />
                </Svg>
            </View>
        </View>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.lightBackground,
    },
    topLine: {
      position: "absolute",
        top: 0,
    },
    topLineBottom: {
        position: "absolute",
        top: 40,
    },
    logoContainer: {
    },
    bottomLineUp: {
        position: 'absolute',
        bottom:80,
    },
    bottomLine: {
        position: 'absolute',
        bottom:0,
        left: '50%'
    }

})