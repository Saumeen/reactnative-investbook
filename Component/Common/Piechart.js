import React from 'react'
import { PieChart } from 'react-native-chart-kit'

export default (props) => {

    return (<PieChart
        data={props.data}
        height={200}
        width={400}
        chartConfig={{
            backgroundColor: '#e26a00',
            backgroundGradientFrom: '#fb8c00',
            backgroundGradientTo: '#ffa726',
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
                borderRadius: 16
            }
        }}
        accessor="population"
        style={{
            marginVertical: 8,
            borderRadius: 16
        }}
    />)

}
