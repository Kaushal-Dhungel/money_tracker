import React  from 'react';
import { Bar } from 'react-chartjs-2';

const ChartSection = ({category,expense}) => {

    function gettotal (label,arr) {
        let newarr = arr.filter(item => item.category === label)
        return newarr.map(item => parseFloat(item.amount)).reduce((a,b)=> a+b,0)
    }


    let labels = ['shopping','education','entertainment_travel','health','assets','others'];
    if (category === 'Incomes') 
        labels = ['salary','business','sales','others'];

    const bgColor = [
        'rgba(0,0,255,0.5)',
        'rgba(0,255,0,0.5)',
        'rgba(255,0,0,0.5)',
        'rgba(50,110,125,0.5)',
        'rgba(110,125,50,0.5)',
        'rgba(125,50,110,0.5)',
    ]
    const bd = labels.map(item =>gettotal(item,expense))

    return (
        <div className="chart_section">
            <div className="line_chart">
                <Bar
                    data =  {{
                    labels : labels,
                    datasets : [{
                        // label : 'People',
                        backgroundColor: bgColor,
                        data : bd

                    }]
                    }}

                    // height = {300}
                    // width = {500}
                    options = {{
                        responsive : true,
                        maintainAspectRatio : false,
                        legend : {display: false},
                        title : {
                            display: true, 
                            text: `${category} Per Category`,
                            fontSize: 18
                        },
                    }}
                />
            </div>

            {/* <div className="line_chart">
                <Pie
                    data =  {{
                    responsive : true,
                    maintainAspectRatio : false,
                    
                    labels : labels,
                    datasets : [{
                        // label : 'People',
                        backgroundColor: bgColor,
                        data : bd

                    }]
                    }}

                    // height = {300}
                    // width = {300}
                    options = {{
                        legend : {display: true, position: "bottom"},
                        title : {
                            display: true, 
                            text: `Monthly ${category} Per Category`,
                            fontSize:18
                        },
                    }}
                />
            </div> */}

        </div>
    )
}

export default ChartSection;
  
