(async function() {
  const data = [
    { n: 1, linear: 1, square: 1, cubed: 1},
    { n: 2, linear: 2, square: 4, cubed: 8},
    { n: 3, linear: 3, square: 9, cubed: 27},
    { n: 4, linear: 4, square: 16, cubed: 64},
    { n: 5, linear: 5, square: 25, cubed: 125},
    { n: 6, linear: 6, square: 36, cubed: 216},
    { n: 7, linear: 7, square: 49, cubed: 343},
    { n: 8, linear: 8, square: 64, cubed: 512},
    { n: 9, linear: 9, square: 81, cubed: 729},
    { n: 10, linear: 10, square: 100,     cubed:    1000},
    { n: 20, linear: 20, square: 400,     cubed:    8000},
    { n: 30, linear: 30, square: 900,     cubed:   27000},
    { n: 40, linear: 40, square: 1600,    cubed:  64000},
    { n: 50, linear: 50, square: 2500,    cubed: 125000},
    { n: 60, linear: 60, square: 3600,    cubed: 216000},
    { n: 70, linear: 70, square: 4900,    cubed: 343000},
    { n: 80, linear: 80, square: 6400,    cubed: 512000},
    { n: 90, linear: 90, square: 8100,    cubed: 729000},
    { n: 100, linear: 100, square: 10000, cubed: 1000000}
  ];

  const chart = new Chart(
    document.getElementById('timeComplexityCanvas'),
    {
      type: 'line',
      data: {
        labels: data.map(row => row.n),
        datasets: [
          {
            label: 'Linear',
            data: data.map(row => row.linear)
          },
          {
            label: 'n-squared',
            data: data.map(row => row.square)
          },
          {
            label: 'n-cubed',
            data: data.map(row => row.cubed)
          }
        ]
      }
    }
  );

  chart.options.plugins.decimation.algorithm = 'lttb';
  chart.options.plugins.decimation.enabled = true;
  chart.options.plugins.decimation.samples = 500;
})();
