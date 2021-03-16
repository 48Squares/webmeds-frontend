# Webmeds
######[webmeds](https://webmeds.in)

###### Dev
```bash
yarn dev
```

###### Production
```bash
pm2 start yarn --name "meds" -- start
```

###### Apache Benchmark
```bash
ab -n 100 -c 10 http://webmeds.in:3000/
```