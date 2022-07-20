import { memo, ReactElement } from 'react';

// import { PieChart } from 'react-minimal-pie-chart';
import { Container, ContainerProps } from '../layout/container';

type RadialChartProps = ContainerProps & {
  readonly data: {
    readonly [key: string]: unknown;
    readonly title?: string | number;
    readonly color: string;
    readonly value: number;
    readonly key?: string | number;
  };
};

export const RadialChart = memo(
  ({
    // data,
    ...props
  }: RadialChartProps): ReactElement => {
    // const [localData, setLocalData] = useState(data);

    // useEffect(() => {
    //   setLocalData(data);
    // }, [data]);

    return (
      <Container {...props}>
        Radial
        {/*<PieChart*/}
        {/*  animate={false}*/}
        {/*  animationDuration={500}*/}
        {/*  animationEasing="ease-in"*/}
        {/*  // cx={50}*/}
        {/*  // cy={50}*/}
        {/*  // data={localData}*/}
        {/*  label={props => {*/}
        {/*    const label =*/}
        {/*      data[props.dataIndex].title === 'UNSPENT' ? ' Remaining' : '';*/}
        {/*    return `${Math.round(data[props.dataIndex].percentage)}%${label}`;*/}
        {/*  }}*/}
        {/*  labelPosition={80}*/}
        {/*  labelStyle={{*/}
        {/*    fill: 'rgba(0, 0, 0, .5)',*/}
        {/*    fontSize: '5px',*/}
        {/*    fontWeight: 'bold',*/}
        {/*  }}*/}
        {/*  lengthAngle={180}*/}
        {/*  lineWidth={15}*/}
        {/*  onClick={undefined}*/}
        {/*  onMouseOut={undefined}*/}
        {/*  onMouseOver={undefined}*/}
        {/*  paddingAngle={0}*/}
        {/*  radius={50}*/}
        {/*  rounded={false}*/}
        {/*  startAngle={180}*/}
        {/*  style={{*/}
        {/*    height: `${height}px`,*/}
        {/*  }}*/}
        {/*  viewBoxSize={[100, 100]}*/}
        {/*/>*/}
      </Container>
    );
  },
);
