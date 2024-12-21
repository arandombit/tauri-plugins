use tauri::{AppHandle, command, Runtime};
use tauri::plugin::PermissionState;
use serde::{Deserialize, Serialize};

use crate::{models::*, Result, AuthExt};

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
enum PermissionType {
    Health
}

struct PermissionStatus {
    health: PermissionState
}

#[command]
pub(crate) async fn authenticate<R: Runtime>(
    app_handle: AppHandle<R>,
    payload: AuthenticateArgs,
) -> Result<AuthResult> {
    app_handle.auth().authenticate(payload)
}

#[command]
pub(crate) async fn request_permissions<R: Runtime>(
    app: AppHandle<R>,
    permissions: Option<Vec<PermissionType>>,
    request_updates_in_background: bool,
) -> Result <PermissionStatus> {
    app.fitness().request_permissions(permissions, request_updates_in_background)
}
