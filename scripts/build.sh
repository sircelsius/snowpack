#!/usr/bin/env bash
# Force Docker to change ownership to the correct values when it's done
USER=`whoami`
USER_ID=`id -u $USER`

GROUP=`id -g -n $USER`
GROUP_ID=`id -g $USER`

# Work directory
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && cd .. && pwd )"

# run the tests, then reset the permissions to the host.
CMD="npm install; npm test; npm run build; groupadd -g $GROUP_ID $GROUP; useradd -u $USER_ID -g $GROUP $USER; chown -R $USER_ID:$GROUP_ID /usr/src/app"

# build docker image
docker build -t map-handler .

# run tests in built image
docker run --rm -v $DIR:/usr/src/app -e NODE_ENV=dev map-handler /bin/bash -c "$CMD"
