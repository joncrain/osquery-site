import React, { Component } from 'react';

class Linux extends Component {
  static defaultProps = {
    fillColor: '#00125F',
    height: 23,
    width: 23,
  };

  render() {
    const { className, fillColor, height, width } = this.props;

    return (
      <svg
        className={className}
        width={`${width}px`}
        height={`${height}px`}
        viewBox={`0 0 ${width} ${height}`}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>linux</title>
        <g
          id="Page-1"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="osquery-io-again-again"
            transform="translate(-866.000000, -368.000000)"
            fill={fillColor}
          >
            <g id="h1-page-title" transform="translate(474.000000, 253.000000)">
              <g
                id="compatible-platforms"
                transform="translate(238.000000, 115.000000)"
              >
                <path
                  d="M165.473684,18.9473684 C162.683368,18.9473684 160.421053,17.0425263 160.421053,14.6930526 C160.421053,12.3423158 162.683368,8.84210526 165.473684,8.84210526 C168.264,8.84210526 170.526316,12.3423158 170.526316,14.6930526 C170.526316,17.0425263 168.264,18.9473684 165.473684,18.9473684 M165.473684,3.78947368 C166.736842,3.78947368 168,4.42105263 168,5.05263158 C168,5.68421053 166.736842,7.57894737 165.473684,7.57894737 C164.210526,7.57894737 162.947368,5.68421053 162.947368,5.05263158 C162.947368,4.42105263 164.210526,3.78947368 165.473684,3.78947368 M170.526316,7.57894737 C169.488,6.54063158 170.141053,5.48968421 169.827789,3.75915789 C169.802526,3.58736842 169.764632,3.42189474 169.720421,3.25894737 C169.697684,3.17178947 169.668632,3.08842105 169.642105,3.00378947 C169.596632,2.87115789 169.554947,2.73726316 169.499368,2.61094737 C169.489263,2.58694737 169.486737,2.568 169.476632,2.544 L169.465263,2.55031579 L169.465263,2.54905263 C169.312421,2.22442105 169.119158,1.92884211 168.895579,1.65347368 C168.843789,1.58905263 168.793263,1.52463158 168.737684,1.46273684 C168.641684,1.35663158 168.541895,1.25557895 168.435789,1.15957895 C168.347368,1.07873684 168.253895,1.00421053 168.159158,0.930947368 C168.065684,0.858947368 167.976,0.783157895 167.877474,0.718736842 C167.685474,0.592421053 167.480842,0.482526316 167.268632,0.387789474 C167.190316,0.352421053 167.110737,0.327157895 167.029895,0.296842105 C166.860632,0.231157895 166.685053,0.176842105 166.503158,0.132631579 C166.426105,0.113684211 166.347789,0.0947368421 166.266947,0.0795789474 C166.009263,0.0328421053 165.746526,0 165.473684,0 C165.200842,0 164.938105,0.0328421053 164.680421,0.0795789474 C164.599579,0.0947368421 164.521263,0.113684211 164.444211,0.132631579 C164.262316,0.176842105 164.086737,0.231157895 163.917474,0.296842105 C163.836632,0.327157895 163.757053,0.352421053 163.678737,0.387789474 C163.466526,0.482526316 163.261895,0.592421053 163.069895,0.718736842 C162.971368,0.783157895 162.881684,0.858947368 162.788211,0.930947368 C162.693474,1.00421053 162.6,1.07873684 162.511579,1.15957895 C162.405474,1.25557895 162.305684,1.35663158 162.209684,1.46273684 C162.154105,1.52463158 162.103579,1.58905263 162.051789,1.65347368 C161.828211,1.92884211 161.634947,2.22442105 161.482105,2.54905263 L161.482105,2.55031579 L161.470737,2.544 C161.460632,2.568 161.458105,2.58694737 161.448,2.61094737 C161.392421,2.73726316 161.350737,2.87115789 161.305263,3.00378947 C161.278737,3.08842105 161.249684,3.17178947 161.226947,3.25894737 C161.182737,3.42189474 161.144842,3.58736842 161.119579,3.75915789 C160.806316,5.48968421 161.459368,6.54063158 160.421053,7.57894737 C159.157895,8.84210526 154.105263,13.2631579 154.105263,15.1578947 C154.105263,15.216 154.121684,15.2854737 154.145684,15.3587368 C154.227789,15.8488421 154.575158,16.2303158 155.048842,16.3566316 C155.153684,16.4008421 155.259789,16.4336842 155.368421,16.4336842 C155.939368,16.4336842 157.894737,15.7894737 157.894737,15.7894737 C158.191579,17.0261053 159.008842,18.0227368 159.828632,18.9397895 C159.846316,18.9587368 159.865263,18.9776842 159.881684,18.9978947 C160.149474,19.2896842 160.434947,19.5637895 160.744421,19.8113684 C160.755789,19.8202105 160.765895,19.8277895 160.776,19.8353684 C161.009684,20.0197895 161.263579,20.1776842 161.516211,20.3343158 C161.089263,20.6450526 159.885474,21.4736842 159.157895,21.4736842 C158.809263,21.4736842 158.526316,21.7566316 158.526316,22.1052632 C158.526316,22.4538947 158.809263,22.7368421 159.157895,22.7368421 L162.942316,22.7368421 C163.643368,22.7368421 164.210526,22.1696842 164.210526,21.4686316 L164.210526,21.36 C164.234526,21.3637895 164.258526,21.3675789 164.282526,21.3713684 C164.671579,21.432 165.068211,21.4736842 165.473684,21.4736842 C165.879158,21.4736842 166.275789,21.432 166.664842,21.3713684 C166.688842,21.3675789 166.712842,21.3637895 166.736842,21.36 L166.736842,21.4686316 C166.736842,22.1696842 167.304,22.7368421 168.005053,22.7368421 L171.789474,22.7368421 C172.138105,22.7368421 172.421053,22.4538947 172.421053,22.1052632 C172.421053,21.7566316 172.138105,21.4736842 171.789474,21.4736842 C171.061895,21.4736842 169.858105,20.6450526 169.431158,20.3343158 C169.683789,20.1776842 169.937684,20.0197895 170.171368,19.8353684 C170.181474,19.8277895 170.191579,19.8202105 170.202947,19.8113684 C170.512421,19.5637895 170.797895,19.2896842 171.065684,18.9978947 C171.082105,18.9776842 171.101053,18.9587368 171.118737,18.9397895 C171.938526,18.0227368 172.755789,17.0261053 173.052632,15.7894737 C173.052632,15.7894737 175.008,16.4336842 175.578947,16.4336842 C175.687579,16.4336842 175.793684,16.4008421 175.898526,16.3566316 C176.372211,16.2303158 176.719579,15.8488421 176.801684,15.3587368 C176.825684,15.2854737 176.842105,15.216 176.842105,15.1578947 C176.842105,13.2631579 171.789474,8.84210526 170.526316,7.57894737"
                  id="linux"
                />
              </g>
            </g>
          </g>
        </g>
      </svg>
    );
  }
}

export default Linux;