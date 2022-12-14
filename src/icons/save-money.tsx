import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"

interface SaveMoneySvgProps{
  svgProps: React.SVGProps<Svg>
  pathProps: React.SVGProps<Path>
}

function SaveMoneySvg(props: SaveMoneySvgProps | any) {

  const { svgProps, pathProps } = props;
  return (
    <Svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...svgProps}
    >
      <Path
        d="M12.313 13.098a.373.373 0 00-.135-.005.895.895 0 01-.791-.887.394.394 0 00-.787 0 1.684 1.684 0 001.238 1.622v.393a.394.394 0 10.787 0v-.37a1.681 1.681 0 00-.344-3.326.894.894 0 11.893-.894.394.394 0 10.788 0 1.684 1.684 0 00-1.337-1.645v-.359a.394.394 0 00-.787 0v.383a1.681 1.681 0 00.443 3.302.893.893 0 01.032 1.786z"
        fill="#F2994A"
        {...pathProps}
      />
      <Path
        d="M6.572 10.949a5.709 5.709 0 105.709-5.709 5.715 5.715 0 00-5.709 5.709zm5.709-4.921a4.921 4.921 0 110 9.842 4.921 4.921 0 010-9.842z"
        fill="#F2994A"
        {...pathProps}
      />
      <Path
        d="M19.93 17.628l-3.084 1.457a2.512 2.512 0 00-2.141-1.321l-2.847-.078a3.006 3.006 0 01-1.294-.335l-.29-.15a5.11 5.11 0 00-4.732.005l.018-.656a.394.394 0 00-.383-.404l-3.122-.086a.393.393 0 00-.404.382l-.188 6.85a.394.394 0 00.382.405l3.122.086h.01c.214 0 .389-.17.394-.383l.01-.327.81-.435c.319-.171.69-.212 1.039-.113l4.842 1.359a5.18 5.18 0 001.09.116c.758 0 1.506-.163 2.195-.479a.38.38 0 00.048-.027l7.022-4.542a.394.394 0 00.129-.524 1.989 1.989 0 00-2.626-.8zM2.26 22.921l.167-6.063 2.335.064-.167 6.063-2.334-.064zm12.742-.103a4.463 4.463 0 01-2.73.305l-4.83-1.356a2.177 2.177 0 00-1.622.177l-.415.222.111-4.031a4.327 4.327 0 014.396-.235l.29.15a3.802 3.802 0 001.634.423l2.847.078c.8.023 1.48.592 1.641 1.376l-4.24-.117a.394.394 0 00-.022.787l4.68.129h.01c.214 0 .388-.17.394-.383a2.49 2.49 0 00-.038-.51l3.163-1.495.01-.005a1.203 1.203 0 011.36.19L15 22.819zM12.674 4.134V.394a.394.394 0 00-.787 0v3.74a.394.394 0 10.787 0zM15.627 4.134V2.362a.394.394 0 10-.788 0v1.772a.394.394 0 10.788 0zM9.722 4.134V2.362a.394.394 0 00-.788 0v1.772a.394.394 0 00.788 0z"
        fill="#F2994A"
        {...pathProps}
      />
    </Svg>
  )
}

export default SaveMoneySvg;
