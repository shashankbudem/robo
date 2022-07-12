import { Doughnut } from 'react-chartjs-2';
import React, {useState, useEffect} from "react";
// import React, {useState, useEffect, useRef} from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import {RingSpinner} from "react-spinners-kit";
import axios from 'axios';
import Slider from 'react-rangeslider'
// import 'react-rangeslider/lib/index.css';
import './slider.css';



ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);


function Portfolio() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [current, setCurrent] = useState(0);
    const [volume, setVolume] = useState(5)
    const horizontalLabels = {1: '1', 2: '2', 3: '3', 4:'4', 5:'5', 6:'6', 7:'7', 8:'8', 9:'9', 10:'10'}
    
    var handleOnChange = (value) => {
      setVolume(value)
      setCurrent(value)
    }

    const url = "/predict";

    useEffect(() => {
        const getData = async () => {
          try {
            const response = await axios.get(url);
            setData(response.data);
            setCurrent(response.data[0].current)
            setError(null);
            setVolume(response.data[0].current)
            console.log("Entering here"+current)
          } catch (err) {
            setError(err.message);
            setData(null);
            console.log("Entering here"+error)
          } finally {
            setLoading(false);
          }
        };
        getData();
      }, []);

      
    // useEffect(() => {
    //     const timeout = setTimeout(() => {
    //         setLoading(true)
    //       }, 5000)
    //       return () => clearTimeout(timeout)
    //     }, [loading])

        
        if (loading) return(<center><RingSpinner size={60} color="#a11d24" loading={true} /></center>)
    return (<div><center><div>
                    <Doughnut
                        width={350}
                        height={350}
                        data={{
                            labels: ['Stocks', 'Mutual Funds', 'Debt', 'Cash'],
                            datasets: [
                                {
                                    label: 'Asset allocation',
                                    data: [data[current].equity, data[current].mutual_fund, data[current].debt, data[current].cash],
                                    // data: [19,31,40,10],
                                    backgroundColor: ['#711116',
                                        '#9C0815',
                                        '#b8333a',
                                        '#c26066'
                                    ],
                                    hoverOffset: 30,
                                    borderColor: ['#000000',
                                        '#000000',
                                        '#000000',
                                        '#000000'
                                    ],
                                    borderWidth: 0.1,
                                },
                            ]
                        }}
                        options={{
                            radius: '85%',
                            responsive: false,
                            legend: {
                                position: 'Right',
                            },
                            animation: {
                                animateScale: true,
                                animateRotate: true
                            },
                            title: {
                                text: 'Asset Allocation',
                                display: true
                            },
                            plugins: {
                                datalabels: {
                                  color: "#ffffff",
                                  formatter: function (value) {
                                    return Math.round(value) + '%';
                                  },
                                  font: {
                                    weight: 'bold',
                                    size: 12,
                                  }
                                }
                              },
                        }}
                    /></div></center><div className='gap'><Slider
                    min={1}
                    max={10}
                    value={volume}
                    labels={horizontalLabels}
                    onChange={handleOnChange}
                /></div></div>
            );    
  }

export default Portfolio;