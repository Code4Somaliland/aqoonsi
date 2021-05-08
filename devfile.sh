#!/bin/bash

# All functions start with dev_
# Add to your profile:
#  alias dev="source ./devfile.sh"

dev_world() {
    echo "Hello world!"
}

dev_ssh() {
    eval "$(ssh-agent -s)"
    ssh-add ~/.ssh/id_rsa_haadka
}

dev_start() {
    yarn
    yarn dev
}

dev_prod() {
    yarn
    yarn build
    yarn preview
}
