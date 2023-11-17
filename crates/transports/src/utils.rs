use serde::Serialize;
use serde_json::{self, value::RawValue};

use std::future::Future;

use crate::error::TransportError;

/// Convert to a `Box<RawValue>` from a `Serialize` type, mapping the error
/// to a `TransportError`.
pub(crate) fn to_json_raw_value<S>(s: &S) -> Result<Box<RawValue>, TransportError>
where
    S: Serialize,
{
    RawValue::from_string(serde_json::to_string(s).map_err(TransportError::ser_err)?)
        .map_err(TransportError::ser_err)
}

pub(crate) trait Spawnable {
    /// Spawn the future as a task.
    ///
    /// In WASM this will be a `wasm-bindgen-futures::spawn_local` call, while
    /// in native it will be a `tokio::spawn` call.
    fn spawn_task(self);
}

#[cfg(not(target_arch = "wasm32"))]
impl<T> Spawnable for T
where
    T: Future<Output = ()> + Send + 'static,
{
    fn spawn_task(self) {
        tokio::spawn(self);
    }
}

#[cfg(target_arch = "wasm32")]
impl<T> Spawnable for T
where
    T: Future<Output = ()> + 'static,
{
    fn spawn_task(self) {
        wasm_bindgen_futures::spawn_local(self);
    }
}