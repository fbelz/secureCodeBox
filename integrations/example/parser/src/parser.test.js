const fs = require('fs');
const util = require('util');

// eslint-disable-next-line security/detect-non-literal-fs-filename
const readFile = util.promisify(fs.readFile);

const { parse } = require('./parser');

test('example parser parses empty json to zero findings', async () => {
  const xmlContent = await readFile(
    __dirname + '/__testFiles__/localhost.json',
    {
      encoding: 'utf8',
    }
  );

  const res = await parse(xmlContent);

  expect(res).toEqual([]);
});