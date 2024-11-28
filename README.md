# playwright-page-route-webkit-blob

[TBD URL]

## Steps

1. Run `npm i`
2. Run `npm test`

```
Running 9 tests using 7 workers

  ✘  1 [webkit] › index.spec.js:9:5 › PW Blob › renders message [1] (5.9s)
  ✓  2 [chromium] › index.spec.js:20:5 › PW Blob › should open second page with "Second Page" heading (539ms)
  ✓  3 [chromium] › index.spec.js:15:5 › PW Blob › renders message [2] (541ms)
  ✓  4 [chromium] › index.spec.js:9:5 › PW Blob › renders message [1] (552ms)
  ✓  5 [firefox] › index.spec.js:9:5 › PW Blob › renders message [1] (588ms)
  ✘  6 [webkit] › index.spec.js:20:5 › PW Blob › should open second page with "Second Page" heading (5.9s)
  ✘  7 [webkit] › index.spec.js:15:5 › PW Blob › renders message [2] (5.9s)
  ✓  8 [firefox] › index.spec.js:20:5 › PW Blob › should open second page with "Second Page" heading (615ms)
  ✓  9 [firefox] › index.spec.js:15:5 › PW Blob › renders message [2] (516ms)
```

There should be no error in the webkit browser.
