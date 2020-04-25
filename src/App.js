import React, { useEffect, useState } from 'react';
import { fetchGlobalData, globalEvolution } from './service/ApiService';
import './App.scss';
import Summary from './components/summary/Summary';
import { Container, Paper, Link } from '@material-ui/core';
import ChartsEVO from './components/charts/ChartsEVO';

function App() {

  const [summaryData, setSummaryData] = useState({isLoading: true});
  const [chartConf, setChartConf] = useState();

  useEffect(() => {

    const fetchGlobal = async () => {
      const data = await fetchGlobalData();
      addDataSummary(data);
    } 

    const evolutionGlobal = async () => {
      const data = await globalEvolution();
      createObjectChartGlobal(data);
    }

    fetchGlobal();
    evolutionGlobal();
    
  }, []);

  const createObjectChartGlobal = (data) => {
    console.log('al crear chart data', data);
    const dataDeaths = [];
    const dataRecovered = [];
    const dataInfected = [];
    const dates = [];
    data.forEach(element => {
      dataDeaths.push((element.deaths.total)? element.deaths.total : element.deaths );
      dataRecovered.push((element.totalRecovered)? element.totalRecovered : element.recovered);
      dataInfected.push((element.totalConfirmed)? element.totalConfirmed : element.confirmed);
      dates.push((element.reportDate)? element.reportDate : element.date);
    });

    const recovered = {
      label: 'Recovered',
      color: 'rgba(0, 255, 0, 0.25)',
      data: dataRecovered
    };

    const infected = {
      label: 'Infected',
      color: 'rgba(255, 0, 0, 0.25)',
      data: dataInfected
    };

    const deaths = {
      label: 'Deaths',
      color: 'rgba(0, 0, 0, 0.5)',
      data: dataDeaths
    };

    setChartConf( { dataCharts: [recovered, infected, deaths], labelsCharts: dates} );
  }

  const addDataSummary = (data) => {
    setSummaryData({
      infected: data.confirmed.value,
      recovered: data.recovered.value,
      deaths: data.deaths.value,
      isLoading:false
    });
  }


  return (
    <div className="App">
      <header className="App--header">
        <h1>COVID - 19</h1>
      </header>
      <main className="App--main">
        <Container className="App--main__conteiner">
          <div className="App--main__conteiner--elements" >
            <Summary summary={summaryData} />
            {chartConf? <ChartsEVO chartConfig={ chartConf } />  : null }
          </div>
        </Container>
      </main>
      <footer className="App--footer">
        <Paper className="paper" variant="outlined" square>
          <div className="flex-column">
            <div className="social">
              
            </div>
            <div className="rights">&copy; Pau Maravi Busquets - v0.1</div>
            <div className="rights">
              All the data is from <Link href="https://github.com/mathdroid/covid-19-api" target="_blank" rel="noreferrer" >Mathdro</Link>
            </div>
          </div>
        </Paper>
      </footer>
    </div>
  );
}

export default App;
