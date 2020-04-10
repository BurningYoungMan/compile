#!/bin/sh
echo "======> run FE's build procedure start <======"
ssh_url=$1
branch=$2
name=$3
echo ${ssh_url} ${repository} ${name}
cd ../
# git clone ${ssh_url}
cd ./${name}
pwd
git fetch
git checkout ${branch}
# startTime=`date "+%s"`
npm install
# installEndTime=`date "+%s"`
npm run build
# buildEndTime=`date "+%s"`
rm -rf node_modules
# endTime=`date "+%s"`
# cost=$[$endTime-$startTime]
# installCost=$[$installEndTime-$startTime]
# buildCost=$[$buildEndTime-$installEndTime]
# cleanCost=$[$endTime-$buildEndTime]
# echo " ------------------------------------------------------------------------"
# echo "  FE's BUILD SUCCESS"
# echo " ------------------------------------------------------------------------"
# echo "  Total time: ${cost}s  install: ${installCost}s  build: ${buildCost}s  clean: ${cleanCost}s "
# echo "  Finished at: `date '+%Y-%m-%d %H:%M:%S'`"
# echo " ------------------------------------------------------------------------"
# echo "======> run FE's build procedure end <======"