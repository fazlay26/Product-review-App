
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
const data = [
    {
        "month": "Mar",
        "investment": 100000,
        "sell": 241,
        "revenue": 10401
    },
    {
        "month": "Apr",
        "investment": 200000,
        "sell": 423,
        "revenue": 24500
    },
    {
        "month": "May",
        "investment": 500000,
        "sell": 726,
        "revenue": 67010
    },
    {
        "month": "Jun",
        "investment": 500000,
        "sell": 529,
        "revenue": 40405
    },
    {
        "month": "Jul",
        "investment": 600000,
        "sell": 601,
        "revenue": 50900
    },
    {
        "month": "Aug",
        "investment": 700000,
        "sell": 670,
        "revenue": 61000
    }
]


const DashBoard = () => {
    return (

        <div className='flex  justify-center pl-6 pr-6  pt-5'>
            <div className='md:grid grid-cols-2 gap-y-12'>
                <div className=''>
                    <h1 className='text-center text-xl text-violet-600 font-bold'>Monthwise Sell</h1>
                    <BarChart width={400} height={400} data={data}>
                        <Bar dataKey="sell" fill="#9900F0" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                    </BarChart>
                </div>
                <div className=''>
                    <h1 className='text-xl text-center text-violet-600 font-bold'>Investment vs Revenue</h1>

                    <LineChart
                        width={500}
                        height={450}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="investment" stroke="#8884d8" strokeDasharray="5 5" />
                        <Line type="monotone" dataKey="revenue" stroke="#82ca9d" strokeDasharray="3 4 5 2" />
                    </LineChart>

                </div>
                <div className=''>
                    <h1 className='text-xl text-center text-violet-600 font-bold'>Investment vs Revenue</h1>
                    <AreaChart
                        width={500}
                        height={400}
                        data={data}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="sell" stroke="#8884d8" fill="#99FEFF" />
                    </AreaChart>
                </div>
                <div className=' h-[70vh] '>
                    <h1 className='text-xl text-center text-violet-600 font-bold'>Investment vs Revenue</h1>
                    <PieChart width={400} height={400}>
                        <Pie data={data} dataKey="investment" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
                        <Pie data={data} dataKey="revenue" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
                    </PieChart>
                </div>
            </div>
        </div>




    );
};

export default DashBoard;