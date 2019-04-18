#!/bin/bash

# Change into config directory
cd config/

# Check if config.json exists
if [ -e config.json ]
then
    echo "Already Exists: config.json"
else
    # Duplicate the example_config.json and save as config.json
    echo "Creating config.json"
    cp example_config.json config.json
fi

npm i