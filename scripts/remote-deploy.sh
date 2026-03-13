#!/bin/bash
# Local script to manually trigger remote deployment
# Usage: ./scripts/remote-deploy.sh

set -e

# Configuration (same as in GitHub Actions)
SSH_HOST="139.224.12.176"
SSH_USERNAME="admin"
REMOTE_PATH="/home/admin/liuyuan-report"
SSH_KEY="${HOME}/.ssh/github_actions"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

log_info() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

log_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if SSH key exists
if [ ! -f "$SSH_KEY" ]; then
    log_error "SSH key not found at $SSH_KEY"
    log_info "Please generate it first with:"
    log_info "  ssh-keygen -t ed25519 -C 'github-actions' -f ~/.ssh/github_actions -N ''"
    exit 1
fi

# Check if dist exists
if [ ! -d "dist" ]; then
    log_error "dist directory not found. Building first..."
    npm run build
fi

log_info "Uploading files to server..."
rsync -avz --delete -e "ssh -i $SSH_KEY" dist/ ${SSH_USERNAME}@${SSH_HOST}:${REMOTE_PATH}/dist/

log_info "Executing deploy script on server..."
ssh -i "$SSH_KEY" "${SSH_USERNAME}@${SSH_HOST}" "bash ${REMOTE_PATH}/scripts/deploy.sh"

log_info "Deployment completed successfully!"
