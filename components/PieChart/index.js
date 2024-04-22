import { Pie } from 'react-chartjs-2';

import {
    Chart as ChartJS,
    CategoryScale,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js'
import { useEffect, useState } from "react"

ChartJS.register(
    CategoryScale,
    ArcElement,
    Tooltip,
    Legend
)

export default function PieChart(){
    const [chartData, setChartData] = useState({
        datasets: []
    })

    const [chartOptions, setChartOptions] = useState({})

    useEffect (() => {
        setChartData({
            labels: ["Pop", "Hip-Pop", "R&B"],
            datasets: [
                {
                    label: 'Colors',
                    data: [10, 30, 14],
                    borderColor:  [
                        'rgba(158, 128, 241, 1)',
                        'rgb(220, 119, 85, 1)', 
                        'rgba(246, 198, 92, 1)'
                    ],
                    backgroundColor: [
                        'rgba(158, 128, 241, 1)',
                        'rgb(220, 119, 85, 1)', 
                        'rgba(246, 198, 92, 1)'
                    ],
                    borderWidth: 1,

                },
            ]
        })
        setChartOptions({
            indexAxis: 'y',
            plugins: {
                legend: {
                    position: 'top'
                },
                title: {
                    display: "true",
                    text: "Top 3 Music Genres"
                }
            },
            maintainAspectRatio: true,
            responsive: true
        })
    }, [])

    return(
        <div>
            <Pie data={chartData} options={chartOptions}/>
        </div>
    )
}
