import * as h from '@api-ts/io-ts-http'
import * as t from 'io-ts'

h.httpRoute({
  path: '/test',
  method: 'GET',
  request: h.httpRequest({
    query: {
      foo: h.optional(t.string),
    },
  }),
  response: {
    200: t.type({
      id: t.number,
    }),
  },
});