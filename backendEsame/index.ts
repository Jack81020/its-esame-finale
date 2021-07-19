
// PER FAR FUNZIONARE, ESEGUIRE QUESTI COMANDI SU UN NUOVO TERMINALE (`CTRL` + `SHIFT` + `ò`) ⬇⬇⬇

// npm i fastify
// npm i fastify-swagger
// npm i @types/node

// POI, SEMPRE SU UN NUOVO TERMINALE (`CTRL` + `SHIFT` + `ò`) SCRIVI : ` node . `

// VAI SUL BROWSER E SCRIVI SULLA BARRA DEGLI INDIRIZZI ` http://127.0.0.1:3000/api `

import fastify from 'fastify'
import * as swagger from 'fastify-swagger'

const app = fastify({
  logger: true,
  ignoreTrailingSlash: true
})

app.register(swagger.default, {
  routePrefix: '/api',
  swagger: {
    info: {
      title: 'Esame ITS 2021',
      description: 'Api Esame',
      version: '1.0.0'
    },
    host: '127.0.0.1:3000',
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json']
  },
  exposeRoute: true
})

// CHIAMATA GET PER RICEVERE I DATI
app.get("/getData", (req, reply) => {
  reply
    .code(200)
    .header('Content-Type', 'application/json; charset=utf-8')
    .send(
      {
        attraction: "Colosseo",
        location: "Roma",
        interests: [1, 2],
        currentVisitors: 80,
        isOpen: true,
        avaiability: [
          {
            openingDayMonth: [5, 5],
            openingDayweekHourMinute: [0, 10, 0]
          },{
            closingDayMonth: [15, 10],
            closingDayweekHourMinute: [4, 18, 30]
          }
        ],
        closeCode: 1,
        avgRest: 55,
        personAnalytics: [
          {
            ingoing: [6,6,6,5],
            outgoing: [6,6,6,5],
            now: [6,6,6,5]
          }
        ],
        avgTime: [
          {hour: 0, people: 55},
          {hour: 1, people: 55},
          {hour: 2, people: 55},
          {hour: 3, people: 55},
          {hour: 4, people: 55},
          {hour: 5, people: 55},
          {hour: 6, people: 55},
          {hour: 7, people: 55},
          {hour: 8, people: 55},
          {hour: 9, people: 55},
          {hour: 10, people: 55},
          {hour: 11, people: 55},
          {hour: 12, people: 55},
          {hour: 13, people: 55},
          {hour: 14, people: 55},
          {hour: 15, people: 55},
          {hour: 16, people: 55},
          {hour: 17, people: 55},
          {hour: 18, people: 55},
          {hour: 19, people: 55},
          {hour: 20, people: 55},
          {hour: 21, people: 55},
          {hour: 22, people: 55},
          {hour: 23, people: 55}
        ]
      }
    )
})

app.listen(3000, err => {
  if (err) throw err
})