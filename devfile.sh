#!/bin/bash

# All functions start with dev_
# Add to your profile:
#  alias dev="source ./devfile.sh"

dev_start() {
    yarn
    yarn dev
}

dev_prod() {
    yarn
    yarn build
    yarn preview
}
