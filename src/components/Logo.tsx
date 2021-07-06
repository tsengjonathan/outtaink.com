import React from 'react';

export type LogoProps = {
  readonly className?: string;
  readonly color?: string;
  readonly width?: number;
  readonly height?: number;
}

const Logo = ({ color = '#FFF', width = 150, height = 24, className }: LogoProps) => {
  return (
    <svg className={className} width={width} height={height} xmlns="http://www.w3.org/2000/svg">
      <g fill={color}>
        <path d="M0 12.4573585C0 6.02264151 5.47347273 1.13660377 12.7216364 1.13660377c7.2481636 0 12.7261636 4.88150944 12.7261636 11.32075473 0 6.4392453-5.4734727 11.3207547-12.7261636 11.3207547C5.46894545 23.7781132 0 18.8920755 0 12.4573585zm21.0201273 0c0-3.67698114-3.5901273-6.43471699-8.2984909-6.43471699-4.70836367 0-8.29396367 2.75773585-8.29396367 6.43471699 0 3.6769811 3.59012727 6.434717 8.29396367 6.434717 4.7038363 0 8.2984909-2.7577359 8.2984909-6.434717zM43.7515636 7.24528302V23.3977358h-4.0066363v-3.2694339c-1.18439 2.301949-3.5833396 3.7208726-6.1706728 3.6498113-3.8708181 0-6.4830545-2.4090566-6.4830545-6.0588679V7.24528302h3.9704182v9.07924528c0 1.68 1.6750909 2.8211321 4.2194182 2.8211321 2.6484545 0 4.4638909-1.1728302 4.4638909-2.8845283V7.24528302h4.0066363zM53.7206182 11.7735849v5.4701887c0 1.0777358.7334182 1.5849056 2.2636363 1.5849056h2.5443273v4.5690566h-2.9970545c-3.8346 0-5.8220728-1.68-5.8220728-5.0445283v-6.5796226h-3.4497818V7.24528302h3.4497818V3.48679245l4.0066364-1.01433962v4.77283019h4.8124909v4.52830188h-4.8079636zM67.5967091 11.7735849v5.4701887c0 1.0777358.7334182 1.5849056 2.2636364 1.5849056h2.5443272v4.5690566h-2.9970545c-3.8346 0-5.8220727-1.68-5.8220727-5.0445283v-6.5796226h-3.4543091V7.24528302h3.4543091V3.48679245l4.0066363-1.01433962v4.77283019h4.8124909v4.52830188h-4.8079636zM92.8362545 7.24528302V23.3977358h-3.9749454V20.16c-1.3379063 2.3006699-3.8229358 3.6892701-6.4830546 3.6226415-4.8804 0-8.5746545-3.6498113-8.5746545-8.4679245 0-4.8181132 3.6942545-8.46792455 8.5927636-8.46792455 2.6598756-.06564436 5.1444379 1.3226948 6.4830546 3.62264155V7.24528302h3.9568363zm-3.9749454 8.08301888c0-2.1871698-2.3360727-3.8354717-5.4734727-3.8354717-3.1374 0-5.4327273 1.6483019-5.4327273 3.8354717 0 2.1871698 2.2998545 3.8354717 5.4327273 3.8354717 3.1328727 0 5.4734727-1.6664151 5.4734727-3.8535849v.0181132zM94.1265273 2.53584906C94.1265273 1.10943396 95.5254545 0 97.3363636 0c1.8109091 0 3.2415274 1.10943396 3.2415274 2.53584906 0 1.42641509-1.3944001 2.56754717-3.2415274 2.56754717-1.8471272 0-3.2098363-1.10943397-3.2098363-2.56754717zm1.2178363 4.70943396h3.9749455V23.3977358h-3.9749455V7.24528302zM119.1216 12.9962264v10.4150944h-3.974945V14.549434c0-1.8701887-1.779219-3.074717-4.527273-3.074717-2.856709 0-4.807964 1.2362264-4.807964 3.1381132v8.7849056h-3.974945V7.24528302h3.974945v3.39169808c1.358182-2.4724528 3.621818-3.77217557 6.514746-3.77217557 4.074545-.01801308 6.795436 2.42274164 6.795436 6.13142087zM128.1852 17.1169811l-2.576018 1.7116981v4.5690566h-3.974946V.57056604h3.974946V12.7969811h.765109l5.994109-5.55169808h6.659618l-7.6692 7.33584908 7.877455 8.8166037h-5.156564zM141.567818 10.3018868c0-1.74339623 1.638873-3.07471699 3.8346-3.07471699 2.195727 0 3.866291 1.33132076 3.866291 3.07471699 0 1.7433962-1.638873 3.1064151-3.866291 3.1064151s-3.8346-1.3313208-3.8346-3.1064151zM141.567818 20.3184906c0-1.7433963 1.638873-3.1064151 3.8346-3.1064151 2.195727 0 3.866291 1.3584905 3.866291 3.1064151 0 1.7479245-1.638873 3.0792452-3.866291 3.0792452s-3.8346-1.3313207-3.8346-3.0792452z"/>
      </g>
    </svg>
  )
}

export default Logo;
