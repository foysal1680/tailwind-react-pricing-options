import { X } from 'lucide-react'
import React from 'react'
import { Line, LineChart } from 'recharts'

const ResultChartData = [
  { "id": 1, "name": "Rahim", "physics": 78, "chemistry": 72, "math": 85 },
  { "id": 2, "name": "Karim", "physics": 65, "chemistry": 70, "math": 68 },
  { "id": 3, "name": "Sakib", "physics": 88, "chemistry": 90, "math": 92 },
  { "id": 4, "name": "Tamim", "physics": 55, "chemistry": 60, "math": 58 },
  { "id": 5, "name": "Jahid", "physics": 91, "chemistry": 87, "math": 89 },
  { "id": 6, "name": "Nusrat", "physics": 73, "chemistry": 75, "math": 80 },
  { "id": 7, "name": "Mim", "physics": 84, "chemistry": 82, "math": 88 },
  { "id": 8, "name": "Rafi", "physics": 60, "chemistry": 65, "math": 70 },
  { "id": 9, "name": "Sumaiya", "physics": 95, "chemistry": 93, "math": 97 },
  { "id": 10, "name": "Hasan", "physics": 68, "chemistry": 66, "math": 72 }
]

export default function ResultChat() {
  return (
    <div>
        <LineChart width={500 } height={500} data={ResultChartData}>
           {/* <XAxis dataKey="name"> </XAxis> */}
            <Line dataKey="physics" stroke='red'></Line>
            <Line dataKey="chemistry"></Line>
            <Line dataKey="math"></Line>

        </LineChart>

    </div>
  )
}
