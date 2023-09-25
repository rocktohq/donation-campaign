import { PieChart, Pie, Cell, Legend } from 'recharts';
import { getLocalData } from '../../utils/localStorage/localStorage';
import { useEffect, useState } from 'react';

const Statistics = () => {

  const [donations, setDonations] = useState(0);
  const donated = getLocalData();

  useEffect(() => {
    fetch("/data.json")
      .then(res => res.json())
      .then(data => setDonations(data.length))
  }, [])

  const data = [
    { name: 'Total Donation', value: donations },
    { name: 'Your Donation', value: donated.length }
  ];

  const COLORS = ['#FF444A', '#00C49F'];
  const RADIAN = Math.PI / 180;

  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className="flex justify-center items-center text-center my-10">
      <PieChart width={300} height={300}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={120}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend></Legend>
      </PieChart>
    </div>
  )
}

export default Statistics
