import React from 'react'
import PropTypes from 'prop-types'

const More = ({size = 24}) => {
  return (
    <svg width={size} height={size} viewBox="0 0 42 42" version="1.1">
      <g
        id="icon-settings"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g
          id="Header/Settings"
          transform="translate(9.000000, 9.000000)"
          fill="#0055B8"
        >
          <g id="gear">
            <path
              d="M23.9036431,10.6582305 C23.8657249,10.3211599 23.4727138,10.0678662 23.1328773,10.0678662 C22.0341413,10.0678662 21.0591524,9.42272119 20.6502602,8.42498141 C20.2325353,7.4030632 20.5018885,6.21127138 21.3207435,5.46013383 C21.5784981,5.22450558 21.6098141,4.83006691 21.3936357,4.55607435 C20.8312862,3.84196283 20.192119,3.19690706 19.4942454,2.63785874 C19.2209665,2.41855762 18.8200149,2.44907063 18.5830483,2.71146468 C17.8684015,3.50292937 16.5847138,3.7970855 15.5927732,3.38319703 C14.5605056,2.94896654 13.9095613,1.90295911 13.9732639,0.780133829 C13.9942305,0.427449814 13.7364758,0.120802974 13.3848625,0.0798513011 C12.4892788,-0.023732342 11.5858439,-0.0269442379 10.6875836,0.0727137546 C10.3399851,0.111078067 10.0822305,0.410498141 10.0939182,0.75872119 C10.1329963,1.87048327 9.47420074,2.89820074 8.45219331,3.31681784 C7.47211896,3.71714498 6.19744238,3.42548699 5.48422305,2.64107063 C5.24850558,2.38269145 4.85406691,2.35092937 4.57944981,2.56496654 C3.86087732,3.12874349 3.20734572,3.77433457 2.63982156,4.48255762 C2.4184684,4.75788848 2.45103346,5.15696654 2.71137546,5.39384387 C3.54584387,6.1495316 3.81528625,7.35167286 3.38176952,8.38536803 C2.96788104,9.37088476 1.94453532,10.0060372 0.772996283,10.0060372 C0.392832714,9.99381413 0.122052045,10.2489814 0.0804758364,10.5946171 C-0.0249814126,11.4953755 -0.0262304833,12.4131747 0.0753011152,13.3212491 C0.112951673,13.6597472 0.517918216,13.9108104 0.861501859,13.9108104 C1.90554647,13.8841338 2.90792565,14.5305279 3.32841636,15.5537844 C3.74756877,16.5757026 3.47812639,17.7667807 2.6580223,18.5185428 C2.40151673,18.754171 2.36895167,19.1479851 2.58513011,19.4219777 C3.14221561,20.131539 3.78147212,20.7772193 4.48184387,21.3409071 C4.75655019,21.5622602 5.15625279,21.5310335 5.39437918,21.2686394 C6.1117026,20.4752119 7.39530112,20.1815911 8.38331599,20.5962825 C9.418171,21.0291747 10.0691152,22.0750929 10.0054126,23.1985428 C9.98462454,23.5514052 10.2436283,23.8585874 10.5938141,23.8989145 C11.0519554,23.9523569 11.5128625,23.9790335 11.9750186,23.9790335 C12.41371,23.9790335 12.8524907,23.9549442 13.2911822,23.9061413 C13.6388699,23.867777 13.8964461,23.5683569 13.8847584,23.2195093 C13.8445204,22.1083717 14.5044758,21.0806543 15.525145,20.6627509 C16.5118216,20.2597472 17.781145,20.5547063 18.4944535,21.3383197 C18.7315093,21.5961636 19.1231822,21.6273011 19.399316,21.4139777 C20.1165502,20.851539 20.7687435,20.2064833 21.3389442,19.4962974 C21.5602082,19.2215911 21.5289814,18.8218885 21.2673011,18.5851004 C20.4328327,17.8294126 20.162052,16.6270929 20.5955688,15.5941115 C21.0031227,14.62171 21.988461,13.968803 23.0482974,13.968803 L23.1965799,13.9726394 C23.540342,14.0005651 23.8566245,13.7357621 23.89829,13.3848625 C24.0039257,12.4833011 24.0051747,11.5663048 23.9036431,10.6582305 Z M12.0084758,16.0140669 C9.80315242,16.0140669 8.00930855,14.220223 8.00930855,12.0148996 C8.00930855,9.80966543 9.80315242,8.01573234 12.0084758,8.01573234 C14.21371,8.01573234 16.0075539,9.80966543 16.0075539,12.0148996 C16.0075539,14.220223 14.21371,16.0140669 12.0084758,16.0140669 Z"
              id="Shape"
            >
              {' '}
            </path>
          </g>
        </g>
      </g>
    </svg>
  )
}

More.propTypes = {
  size: PropTypes.number,
}

export default More
