import { Box,} from "@chakra-ui/react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { data } from "./Reuseables.jsx"

export default function NairaChart() {

    return (
        <Box h="219px">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis dataKey="amt" />
                    <Tooltip />
                    <Legend />
                    <Bar barSize={20} dataKey="inflow" fill="#FFA500" />
                    <Bar barSize={20} dataKey="outflow" fill="#1B1C1E" />
                </BarChart>
            </ResponsiveContainer>
        </Box>
    )
}

