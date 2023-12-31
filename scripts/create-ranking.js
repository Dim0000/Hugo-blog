/**
 * TODO(developer): Uncomment this variable and replace with your
 *   Google Analytics 4 property ID before running the sample.
 */
propertyId = '283573149';

// Imports the Google Analytics Data API client library.
const { BetaAnalyticsDataClient } = require('@google-analytics/data');
process.env.GOOGLE_APPLICATION_CREDENTIALS = `.gcp/google-analytics_credentials.json`

// Using a default constructor instructs the client to use the credentials
// specified in GOOGLE_APPLICATION_CREDENTIALS environment variable.
const analyticsDataClient = new BetaAnalyticsDataClient();

// Runs a simple report.

const dayjs = require('dayjs')
const utc = require('dayjs/plugin/utc.js')
const timezone = require('dayjs/plugin/timezone.js')
const fs = require('fs')
dayjs.extend(timezone)
dayjs.extend(utc)
dayjs.tz.setDefault('Asia/Tokyo')

async function runReport() {
  const [response] = await analyticsDataClient.runReport({
    property: `properties/${propertyId}`,
    dateRanges: [
      {
        startDate: '8daysAgo',
        endDate: '1daysAgo',
      },
    ],
    dimensions: [
      {
        name: 'pagePath',
      },
    ],
    metrics: [
      {
        name: 'screenPageViews',
      },
    ],
  });

  let rankings = []
  response.rows.forEach((row) => {
    rankings.push({
      pagePath: row.dimensionValues[0].value,
      pv: row.metricValues[0].value,
    })
  })
  fs.writeFileSync(
    'data/ranking.json',
    JSON.stringify(
      {
        items: rankings,
        createdAt: dayjs().toISOString(),
      },
      null,
      4
    )
  )
}

runReport();
