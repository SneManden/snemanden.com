# snemanden.com

## Deploy

1. `$ npx sapper export` (builds as a completely static site)
2. `$ scp -r __sapper__/export/* snemanden@snemanden.com:apps/snemanden_com_sapper/` (uploads static site to snemanden_com_sapper webapp [WebFaction])
