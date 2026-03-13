#!/bin/bash
# Server-side deployment script
# This script is executed on the remote server after files are uploaded

set -e

# Configuration
DEPLOY_PATH="/home/admin/liuyuan-report"
DIST_PATH="${DEPLOY_PATH}/dist"
BACKUP_PATH="${DEPLOY_PATH}/dist.backup"
TIMESTAMP=$(date +%Y%m%d_%H%M%S)

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

log_info() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

log_warn() {
    echo -e "${YELLOW}[WARN]${NC} $1"
}

log_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Backup current dist if it exists
if [ -d "$DIST_PATH" ]; then
    log_info "Backing up current dist directory..."
    mv "$DIST_PATH" "${BACKUP_PATH}_${TIMESTAMP}"
    log_info "Backup created: ${BACKUP_PATH}_${TIMESTAMP}"
else
    log_info "No existing dist directory to backup"
fi

# Files are already uploaded by rsync, just verify
if [ ! -d "$DIST_PATH" ]; then
    log_error "Dist directory not found after upload!"
    exit 1
fi

# Set correct permissions
log_info "Setting file permissions..."
find "$DIST_PATH" -type d -exec chmod 755 {} \;
find "$DIST_PATH" -type f -exec chmod 644 {} \;

# Cleanup old backups (keep last 3)
log_info "Cleaning up old backups..."
ls -t "${BACKUP_PATH}_"* 2>/dev/null | tail -n +4 | xargs -r rm -rf

log_info "Deployment completed successfully!"
log_info "Nginx will serve the new static files automatically (no restart needed)"
